"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DayValue = 1 | 2 | 3 | "all";

interface TopBarProps {
  activeDay: DayValue;
  onDayChange: (day: DayValue) => void;
}

const dayTabs: { value: DayValue; label: string }[] = [
  { value: 1, label: "Day 1" },
  { value: 2, label: "Day 2" },
  { value: 3, label: "Day 3" },
  { value: "all", label: "All Days" },
];

export function TopBar({ activeDay, onDayChange }: TopBarProps) {
  return (
    <header className="h-[54px] bg-ink flex items-center justify-between px-5 shrink-0 z-50">
      <div className="flex items-center">
        <Link href="/trips" className="text-subtle hover:text-paper transition-colors mr-3 text-sm">
          &larr;
        </Link>
        <h1 className="font-serif text-xl font-semibold text-paper">
          New York, <span className="text-day1 italic">Three Days</span>
        </h1>
        <div className="hidden sm:block border-l border-white/12 pl-3.5 ml-3.5">
          <span className="text-[10px] text-subtle tracking-[1.5px] uppercase">
            LGA Arrival · Now Now NoHo
          </span>
        </div>
      </div>
      <div className="flex gap-1">
        {dayTabs.map((tab) => (
          <Button
            key={String(tab.value)}
            variant="outline"
            size="sm"
            onClick={() => onDayChange(tab.value)}
            className={cn(
              "rounded-full text-xs font-medium px-3.5 py-1 h-auto border-[1.5px] border-white/15 bg-transparent text-subtle hover:text-white hover:bg-transparent hover:border-white/35 cursor-pointer",
              activeDay === tab.value && tab.value === 1 &&
                "bg-day1 border-day1 text-white hover:bg-day1 hover:border-day1",
              activeDay === tab.value && tab.value === 2 &&
                "bg-day2 border-day2 text-white hover:bg-day2 hover:border-day2",
              activeDay === tab.value && tab.value === 3 &&
                "bg-day3 border-day3 text-white hover:bg-day3 hover:border-day3",
              activeDay === tab.value && tab.value === "all" &&
                "bg-white/15 border-white/30 text-white hover:bg-white/15 hover:border-white/30"
            )}
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </header>
  );
}
