"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { TripData } from "@/lib/generated-trips";

export type DayValue = number | "all";

const NUMBER_WORDS = [
  "", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
  "Eight", "Nine", "Ten", "Eleven", "Twelve",
];

function daysLabel(n: number): string {
  return `${NUMBER_WORDS[n] ?? n} Day${n === 1 ? "" : "s"}`;
}

interface TopBarProps {
  trip: TripData;
  activeDay: DayValue;
  onDayChange: (day: DayValue) => void;
}

export function TopBar({ trip, activeDay, onDayChange }: TopBarProps) {
  const { meta, days } = trip;
  const dayNumbers = Object.keys(days).map(Number).sort((a, b) => a - b);

  const dayTabs: { value: DayValue; label: string; color?: string }[] = [
    ...dayNumbers.map((d) => ({
      value: d as DayValue,
      label: `Day ${d}`,
      color: days[d].color,
    })),
    { value: "all" as const, label: "All Days" },
  ];

  // Build subtitle from first day's airport + first stay
  const firstDay = days[dayNumbers[0]];
  const subtitleParts: string[] = [];
  if (firstDay?.airport) subtitleParts.push(`${firstDay.airport.code} Arrival`);
  if (firstDay?.stays?.[0]) subtitleParts.push(firstDay.stays[0].name);
  const subtitle = subtitleParts.join(" · ");

  return (
    <header className="bg-ink flex flex-col md:flex-row items-center justify-between px-5 shrink-0 z-50">
      <div className="flex items-center">
        <Link href="/trips" className="text-subtle hover:text-paper transition-colors mr-3 text-sm">
          &larr;
        </Link>
        <h1 className="font-serif text-xl font-semibold text-paper">
          {meta.city},{" "}
          <span className="italic" style={{ color: meta.color }}>
            {daysLabel(meta.days)}
          </span>
        </h1>
        {subtitle && (
          <div className="hidden sm:block border-l border-white/12 pl-3.5 ml-3.5">
            <span className="text-[10px] text-subtle tracking-[1.5px] uppercase">
              {subtitle}
            </span>
          </div>
        )}
      </div>
      <div className="flex p-2 gap-1">
        {dayTabs.map((tab) => (
          <Button
            key={String(tab.value)}
            variant="outline"
            size="sm"
            onClick={() => onDayChange(tab.value)}
            className={cn(
              "rounded-full text-xs font-medium px-3.5 py-1 h-auto border-[1.5px] border-white/15 bg-transparent text-subtle hover:text-white hover:bg-transparent hover:border-white/35 cursor-pointer",
              activeDay === tab.value && tab.value === "all" &&
                "bg-white/15 border-white/30 text-white hover:bg-white/15 hover:border-white/30"
            )}
            style={
              activeDay === tab.value && tab.color
                ? { backgroundColor: tab.color, borderColor: tab.color, color: "white" }
                : undefined
            }
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </header>
  );
}
