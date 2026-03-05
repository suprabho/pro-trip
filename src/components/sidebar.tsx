"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { getTripById, type Stop } from "@/lib/generated-trips";

const trip = getTripById("new-york")!;
const DAYS = trip.days;
import { cn } from "@/lib/utils";

type DayValue = 1 | 2 | 3 | "all";

interface SidebarProps {
  activeDay: DayValue;
  activeStop: string | null;
  onStopClick: (stop: Stop, day: number) => void;
}

const emojiBgMap: Record<number, string> = {
  1: "bg-[#fde8e2]",
  2: "bg-[#e2eafe]",
  3: "bg-[#e2f5ec]",
};

const activeBorderMap: Record<number, string> = {
  1: "border-l-day1",
  2: "border-l-day2",
  3: "border-l-day3",
};

const dayLabelColorMap: Record<number, string> = {
  1: "text-day1",
  2: "text-day2",
  3: "text-day3",
};

export function Sidebar({ activeDay, activeStop, onStopClick }: SidebarProps) {
  const headerInfo =
    activeDay === "all"
      ? {
          label: "Full Itinerary",
          title: "All Three Days",
          subtitle: "Manhattan · Brooklyn · Uptown",
        }
      : {
          label: DAYS[activeDay].label,
          title: DAYS[activeDay].title,
          subtitle: DAYS[activeDay].subtitle,
        };

  const days = activeDay === "all" ? [1, 2, 3] : [activeDay];

  return (
    <aside className="w-full md:w-[380px] shrink-0 bg-paper border-b md:border-b-0 md:border-r border-line flex flex-col overflow-hidden h-[46vh] md:h-auto">
      <div className="px-[22px] pt-[18px] pb-[14px] border-b border-line shrink-0">
        <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground">
          {headerInfo.label}
        </p>
        <h2 className="font-serif text-2xl font-bold leading-tight">
          {headerInfo.title}
        </h2>
        <p className="text-[11.5px] text-muted-foreground mt-0.5">
          {headerInfo.subtitle}
        </p>
      </div>
      <ScrollArea className="flex-1">
        <div className="py-1.5 pb-5">
          {days.map((dayNum) => (
            <div key={dayNum}>
              {activeDay === "all" && (
                <div className="px-[22px] pt-3.5 pb-1">
                  <p
                    className={cn(
                      "text-[10px] tracking-[2px] uppercase font-semibold",
                      dayLabelColorMap[dayNum]
                    )}
                  >
                    Day {dayNum} — {DAYS[dayNum].title}
                  </p>
                </div>
              )}
              {DAYS[dayNum].airport && (
                <div className="flex gap-3 px-[22px] py-2.5 border-l-[3px] border-l-transparent">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[15px] shrink-0 mt-0.5 bg-[#e8e8f0]">
                    ✈️
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[1.5px] uppercase text-subtle mb-0.5">Airport</p>
                    <p className="font-serif text-[17px] font-semibold leading-tight mb-0.5">
                      {DAYS[dayNum].airport!.name}
                    </p>
                    <span className="inline-block mt-0.5 bg-warm rounded-full px-2.5 py-0.5 text-[10.5px] text-muted-foreground">
                      {DAYS[dayNum].airport!.code}
                    </span>
                  </div>
                </div>
              )}
              {DAYS[dayNum].stays.length > 0 && (
                <div className="flex gap-3 px-[22px] py-2.5 border-l-[3px] border-l-transparent">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[15px] shrink-0 mt-0.5 bg-[#fef3e2]">
                    🏨
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[1.5px] uppercase text-subtle mb-0.5">
                      {DAYS[dayNum].stays.length > 1 ? "Stays" : "Stay"}
                    </p>
                    {DAYS[dayNum].stays.map((stay, si) => (
                      <p key={si} className="font-serif text-[17px] font-semibold leading-tight mb-0.5">
                        {stay.name}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              <div className="h-px bg-line mx-[22px] my-1" />
              {DAYS[dayNum].stops.map((stop, i) => (
                <div
                  key={`${dayNum}-${i}`}
                  onClick={() => onStopClick(stop, dayNum)}
                  className={cn(
                    "flex gap-3 px-[22px] py-3 cursor-pointer transition-colors border-l-[3px] border-l-transparent hover:bg-cream animate-in fade-in slide-in-from-bottom-1",
                    activeStop === stop.name && "bg-cream",
                    activeStop === stop.name && activeBorderMap[dayNum]
                  )}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-[15px] shrink-0 mt-0.5",
                      emojiBgMap[dayNum]
                    )}
                  >
                    {stop.emoji}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[1.5px] uppercase text-subtle mb-0.5">
                      {stop.time}
                    </p>
                    <p className="font-serif text-[17px] font-semibold leading-tight mb-0.5">
                      {stop.name}
                    </p>
                    <p className="text-xs leading-relaxed text-[#5a5045]">
                      {stop.desc}
                    </p>
                    {stop.tip && (
                      <span className="inline-block mt-1.5 bg-warm rounded-full px-2.5 py-0.5 text-[10.5px] text-muted-foreground">
                        {stop.tip}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}
