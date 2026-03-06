"use client";

import Link from "next/link";
import type { TripMeta } from "@/lib/generated-trips";

interface DashboardCalendarProps {
  trips: TripMeta[];
}

function parseDate(dateStr: string): Date {
  return new Date(dateStr + "T00:00:00");
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function getDaysBetween(start: Date, end: Date): number {
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

export function DashboardCalendar({ trips }: DashboardCalendarProps) {
  // Filter trips that have date ranges
  const datedTrips = trips.filter((t) => t.startDate && t.endDate);

  if (datedTrips.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
        No trips with dates to display.
      </div>
    );
  }

  // Find overall date range
  const allStarts = datedTrips.map((t) => parseDate(t.startDate!));
  const allEnds = datedTrips.map((t) => parseDate(t.endDate!));
  const minDate = new Date(Math.min(...allStarts.map((d) => d.getTime())));
  const maxDate = new Date(Math.max(...allEnds.map((d) => d.getTime())));

  // Add padding
  const paddedStart = new Date(minDate);
  paddedStart.setDate(paddedStart.getDate() - 2);
  const paddedEnd = new Date(maxDate);
  paddedEnd.setDate(paddedEnd.getDate() + 2);

  const totalDays = getDaysBetween(paddedStart, paddedEnd);

  // Generate date labels
  const dateLabels: { date: Date; label: string; isMonthStart: boolean }[] = [];
  for (let i = 0; i <= totalDays; i++) {
    const d = new Date(paddedStart);
    d.setDate(d.getDate() + i);
    dateLabels.push({
      date: d,
      label: formatDate(d),
      isMonthStart: d.getDate() === 1,
    });
  }

  return (
    <div className="w-full border border-line rounded-lg overflow-hidden bg-white">
      <div className="overflow-x-auto">
        <div style={{ minWidth: Math.max(totalDays * 48, 600) }}>
          {/* Date header */}
          <div className="flex border-b border-line bg-warm">
            {dateLabels.map((dl, i) => {
              const isWeekend = dl.date.getDay() === 0 || dl.date.getDay() === 6;
              return (
                <div
                  key={i}
                  className={`flex-shrink-0 w-12 text-center py-2 border-r border-line last:border-r-0 ${
                    isWeekend ? "bg-cream" : ""
                  }`}
                >
                  <div className="text-[9px] tracking-wider uppercase text-muted-foreground">
                    {dl.date.toLocaleDateString("en-US", { weekday: "short" })}
                  </div>
                  <div className={`text-[11px] font-medium ${dl.isMonthStart ? "text-ink font-bold" : "text-subtle"}`}>
                    {dl.date.getDate()}
                  </div>
                  {(dl.date.getDate() === 1 || i === 0) && (
                    <div className="text-[8px] tracking-wider uppercase text-muted-foreground">
                      {dl.date.toLocaleDateString("en-US", { month: "short" })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Trip rows */}
          {datedTrips.map((trip) => {
            const tripStart = parseDate(trip.startDate!);
            const tripEnd = parseDate(trip.endDate!);
            const offsetDays = getDaysBetween(paddedStart, tripStart);
            const duration = getDaysBetween(tripStart, tripEnd);

            return (
              <div key={trip.id} className="relative h-16 border-b border-line last:border-b-0">
                {/* Background grid */}
                <div className="absolute inset-0 flex">
                  {dateLabels.map((dl, i) => {
                    const isWeekend = dl.date.getDay() === 0 || dl.date.getDay() === 6;
                    return (
                      <div
                        key={i}
                        className={`flex-shrink-0 w-12 border-r border-line last:border-r-0 ${
                          isWeekend ? "bg-cream/50" : ""
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Trip bar */}
                <div className="absolute inset-y-0 flex items-center" style={{ left: offsetDays * 48 }}>
                  <Link
                    href={`/trips/${trip.id}`}
                    className="group flex items-center gap-2 rounded-lg px-3 py-2 shadow-sm border border-white/50 hover:shadow-md transition-shadow"
                    style={{
                      width: duration * 48,
                      minWidth: 120,
                      backgroundColor: trip.color,
                    }}
                  >
                    <span className="text-base">{trip.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <div className="text-white font-semibold text-xs truncate group-hover:underline">
                        {trip.city}
                      </div>
                      <div className="text-white/75 text-[10px] truncate">
                        {formatDate(tripStart)} - {formatDate(tripEnd)}
                      </div>
                    </div>
                    <span className="text-white/60 text-xs group-hover:text-white transition-colors ml-auto shrink-0">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
