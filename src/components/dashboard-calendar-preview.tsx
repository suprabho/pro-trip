import { TRIP_SUMMARIES, CALENDAR_RANGE } from "@/lib/generated-dashboard";
import type { TripSummary } from "@/lib/generated-dashboard";

function parseDate(dateStr: string): Date {
  return new Date(dateStr + "T00:00:00");
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function getDaysBetween(start: Date, end: Date): number {
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

export function DashboardCalendarPreview() {
  const datedTrips = TRIP_SUMMARIES.filter((t) => t.startDate && t.endDate);

  if (!CALENDAR_RANGE || datedTrips.length === 0) {
    return (
      <div className="flex items-center justify-center h-24 text-muted-foreground text-xs">
        No trips with dates yet.
      </div>
    );
  }

  const paddedStart = parseDate(CALENDAR_RANGE.start);
  paddedStart.setDate(paddedStart.getDate() - 1);
  const paddedEnd = parseDate(CALENDAR_RANGE.end);
  paddedEnd.setDate(paddedEnd.getDate() + 1);
  const totalDays = getDaysBetween(paddedStart, paddedEnd);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[9px] text-muted-foreground px-1">
        <span>{formatDate(paddedStart)}</span>
        <span>{formatDate(paddedEnd)}</span>
      </div>

      {datedTrips.map((trip) => {
        const tripStart = parseDate(trip.startDate!);
        const tripEnd = parseDate(trip.endDate!);
        const offsetPct = (getDaysBetween(paddedStart, tripStart) / totalDays) * 100;
        const widthPct = (getDaysBetween(tripStart, tripEnd) / totalDays) * 100;

        return (
          <div key={trip.id} className="relative h-8 rounded bg-cream/50">
            <div
              className="absolute inset-y-0 flex items-center gap-1.5 rounded-md px-2 text-white"
              style={{
                left: `${offsetPct}%`,
                width: `${widthPct}%`,
                minWidth: 80,
                backgroundColor: trip.color,
              }}
            >
              <span className="text-xs">{trip.emoji}</span>
              <span className="text-[10px] font-medium truncate">{trip.city}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
