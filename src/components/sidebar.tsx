"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import type { Stop, TripData } from "@/lib/generated-trips";
import { cn } from "@/lib/utils";

import type { DayValue } from "@/components/top-bar";

interface SidebarProps {
  trip: TripData;
  activeDay: DayValue;
  activeStop: string | null;
  onStopClick: (stop: Stop, day: number) => void;
  onTodoClick: (stop: Stop) => void;
  mobile?: boolean;
}

const emojiBgMap: Record<number, string> = {
  1: "bg-[#fde8e2]",
  2: "bg-[#e2eafe]",
  3: "bg-[#e2f5ec]",
  4: "bg-[#e8e8f0]",
};

const tagStyleMap: Record<string, string> = {
  Arrive: "bg-[#1a1614] text-[#f5f0e8]",
  Food: "bg-[#fef3e2] text-[#b8712a]",
  Park: "bg-[#e6f4ea] text-[#2a7a3b]",
  Neighbourhood: "bg-[#e8fde8] text-[#2a8a2a]",
  Walk: "bg-[#e8fde8] text-[#2a8a2a]",
  Evening: "bg-[#e8fde8] text-[#2a8a2a]",
  Memorial: "bg-[#e8f0fe] text-[#2a5cb8]",
  Icon: "bg-[#fce4ec] text-[#b82a4a]",
  Views: "bg-[#fce4ec] text-[#b82a4a]",
  Viewpoint: "bg-[#fce4ec] text-[#b82a4a]",
  Museum: "bg-[#f3e5f5] text-[#7a2ab8]",
  Experience: "bg-[#f3e5f5] text-[#7a2ab8]",
  Entertainment: "bg-[#f3e5f5] text-[#7a2ab8]",
  Shopping: "bg-[#fef3e2] text-[#b8712a]",
  Landmark: "bg-[#e8f0fe] text-[#2a5cb8]",
  Break: "bg-[#fef3e2] text-[#b8712a]",
};

const activeBorderMap: Record<number, string> = {
  1: "border-l-day1",
  2: "border-l-day2",
  3: "border-l-day3",
  4: "border-l-[#666]",
};

const dayLabelColorMap: Record<number, string> = {
  1: "text-day1",
  2: "text-day2",
  3: "text-day3",
  4: "text-[#666]",
};

export function Sidebar({ trip, activeDay, activeStop, onStopClick, onTodoClick, mobile }: SidebarProps) {
  const DAYS = trip.days;

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

  const allDayNums = Object.keys(DAYS).map(Number).sort((a, b) => a - b);
  const days = activeDay === "all" ? allDayNums : [activeDay];

  return (
    <aside className={cn(
      "shrink-0 bg-paper flex flex-col overflow-hidden",
      mobile
        ? "w-full h-full"
        : "w-full md:w-[380px] border-b md:border-b-0 md:border-r border-line h-[46vh] md:h-auto"
    )}>
      <div className="px-5.5 py-2  border-b border-line shrink-0">
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
      <ScrollArea className="flex-1 overflow-hidden">
        <div className="py-1.5 pb-2">
          {days.map((dayNum) => (
            <div key={dayNum}>
              {activeDay === "all" && (
                <div className="px-5.5 pt-2">
                  <p
                    className={cn(
                      "text-xs tracking-wider uppercase font-semibold",
                      dayLabelColorMap[dayNum]
                    )}
                  >
                    Day {dayNum} — {DAYS[dayNum].title}
                  </p>
                </div>
              )}
              <div className="flex flex-row p-4 gap-4">
              {DAYS[dayNum].airport && (
                <div className="flex gap-3 border-l-[3px] border-l-transparent">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[15px] shrink-0 mt-0.5 bg-[#e8e8f0]">
                    ✈️
                  </div>
                  <div>
                    <p className="text-xs tracking-wide uppercase text-subtle mb-0.5">Airport</p>
                    <p className="font-mono text-sm font-semibold leading-tight mb-0.5">
                      {DAYS[dayNum].airport!.name}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      <span className="inline-block bg-warm rounded-full px-2.5 py-0.5 text-xs text-neutral-800">
                        {DAYS[dayNum].airport!.code}
                      </span>
                      {DAYS[dayNum].airport!.flightNumber && (
                        <span className="inline-block bg-[#e8e8f0] rounded-full px-2.5 py-0.5 text-[10.5px] font-medium text-[#444]">
                          {DAYS[dayNum].airport!.flightNumber}
                        </span>
                      )}
                    </div>
                    {(DAYS[dayNum].airport!.date || DAYS[dayNum].airport!.time) && (
                      <p className="text-[11.5px] text-muted-foreground mt-1">
                        {DAYS[dayNum].airport!.date}{DAYS[dayNum].airport!.date && DAYS[dayNum].airport!.time ? " · " : ""}{DAYS[dayNum].airport!.time}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {DAYS[dayNum].stays.length > 0 && (
                <div className="flex gap-3 border-l-[3px] border-l-transparent">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[15px] shrink-0 mt-0.5 bg-[#fef3e2]">
                    🏨
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[1.5px] uppercase text-subtle mb-0.5">
                      {DAYS[dayNum].stays.length > 1 ? "Stays" : "Stay"}
                    </p>
                    {DAYS[dayNum].stays.map((stay, si) => (
                      <p key={si} className="font-mono text-sm font-semibold leading-tight mb-0.5">
                        {stay.name}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              </div>
              <div className="flex flex-col flex-1 overflow-y-scroll h-px bg-line mx-[22px] my-1" />
              <div className="flex flex-col flex-1">
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
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-[10px] tracking-[1.5px] uppercase text-subtle">
                        {stop.time}
                      </p>
                      {stop.tag && (
                        <span className={cn(
                          "inline-block text-[9px] tracking-[1px] uppercase font-medium px-2 py-px rounded-full",
                          tagStyleMap[stop.tag] ?? "bg-warm text-muted-foreground"
                        )}>
                          {stop.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-base font-semibold tracking-tighter leading-tight mb-0.5">
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
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      {stop.suggestedBy && (
                        <span className="inline-flex items-center gap-1 bg-[#f0eaff] rounded-full px-2.5 py-0.5 text-[10.5px] text-[#6b47b8]">
                          <span className="opacity-70">by</span> {stop.suggestedBy}
                        </span>
                      )}
                      {stop.todos && stop.todos.length > 0 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onTodoClick(stop);
                          }}
                          className="inline-flex items-center gap-1 bg-[#fef3e2] hover:bg-[#fde8c8] rounded-full px-2.5 py-0.5 text-[10.5px] text-[#9a6b2c] transition-colors cursor-pointer"
                        >
                          {stop.todos.filter((t) => t.done).length}/{stop.todos.length} todos
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              </div>

            </div>
          ))}
        </div>
      </ScrollArea>

    </aside>
  );
}
