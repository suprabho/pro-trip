"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllTrips } from "@/lib/generated-trips";
import type { TripMeta } from "@/lib/generated-trips";

type ViewMode = "week" | "month" | "year";

const trips = getAllTrips();

function parseDate(dateStr: string): Date {
  return new Date(dateStr + "T00:00:00");
}

function formatShort(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function startOfWeek(date: Date): Date {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getDaysBetween(start: Date, end: Date): number {
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

function tripOverlapsRange(trip: TripMeta, rangeStart: Date, rangeEnd: Date): boolean {
  if (!trip.startDate || !trip.endDate) return false;
  const ts = parseDate(trip.startDate);
  const te = parseDate(trip.endDate);
  return ts <= rangeEnd && te >= rangeStart;
}

export default function CalendarPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [currentDate, setCurrentDate] = useState(() => new Date(2026, 2, 6)); // Mar 6 2026

  const navigate = (dir: -1 | 1) => {
    setCurrentDate((prev) => {
      const d = new Date(prev);
      if (viewMode === "week") d.setDate(d.getDate() + dir * 7);
      else if (viewMode === "month") d.setMonth(d.getMonth() + dir);
      else d.setFullYear(d.getFullYear() + dir);
      return d;
    });
  };

  const title = useMemo(() => {
    if (viewMode === "week") {
      const ws = startOfWeek(currentDate);
      const we = new Date(ws);
      we.setDate(we.getDate() + 6);
      return `${formatShort(ws)} - ${formatShort(we)}, ${we.getFullYear()}`;
    }
    if (viewMode === "month") return currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    return currentDate.getFullYear().toString();
  }, [viewMode, currentDate]);

  return (
    <div className="h-screen flex flex-col bg-paper text-ink font-sans">
      <header className="h-[54px] bg-ink flex items-center justify-between px-5 shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">
            &larr; Dashboard
          </Link>
          <Image src="/PRO-trip-logo-light.svg" alt="PRO trip" width={137} height={41} />
        </div>
      </header>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-line bg-white shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-warm transition-colors text-muted-foreground hover:text-ink">
              <ChevronLeft />
            </button>
            <h2 className="font-serif text-lg font-bold min-w-[220px] text-center">{title}</h2>
            <button onClick={() => navigate(1)} className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-warm transition-colors text-muted-foreground hover:text-ink">
              <ChevronRight />
            </button>
            <button
              onClick={() => setCurrentDate(new Date(2026, 2, 6))}
              className="text-[10px] tracking-[2px] uppercase text-muted-foreground hover:text-ink transition-colors ml-2 px-2 py-1 rounded hover:bg-warm"
            >
              Today
            </button>
          </div>

          <div className="flex items-center gap-0.5 bg-warm rounded-lg p-0.5">
            {(["week", "month", "year"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setViewMode(m)}
                className={`px-3 py-1.5 rounded-md text-xs capitalize transition-colors ${
                  viewMode === m
                    ? "bg-white text-ink shadow-sm font-medium"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* View content */}
        <div className="flex-1 overflow-auto p-6">
          {viewMode === "week" && <WeekView date={currentDate} trips={trips} />}
          {viewMode === "month" && <MonthView date={currentDate} trips={trips} />}
          {viewMode === "year" && <YearView date={currentDate} trips={trips} />}
        </div>
      </div>
    </div>
  );
}

/* ── Week View ── */
function WeekView({ date, trips }: { date: Date; trips: TripMeta[] }) {
  const ws = startOfWeek(date);
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(ws);
    d.setDate(d.getDate() + i);
    return d;
  });

  return (
    <div className="border border-line rounded-lg bg-white overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-7 border-b border-line bg-warm">
        {days.map((d, i) => {
          const isToday = isSameDay(d, new Date(2026, 2, 6));
          return (
            <div key={i} className="text-center py-3 border-r border-line last:border-r-0">
              <div className="text-[9px] tracking-wider uppercase text-muted-foreground">
                {d.toLocaleDateString("en-US", { weekday: "short" })}
              </div>
              <div className={`text-lg font-serif font-bold mt-0.5 ${isToday ? "text-blue-600" : ""}`}>
                {d.getDate()}
              </div>
            </div>
          );
        })}
      </div>

      {/* Body */}
      <div className="grid grid-cols-7 min-h-[400px]">
        {days.map((d, i) => {
          const dayTrips = trips.filter((t) => {
            if (!t.startDate || !t.endDate) return false;
            const ts = parseDate(t.startDate);
            const te = parseDate(t.endDate);
            return d >= ts && d <= te;
          });

          return (
            <div key={i} className="border-r border-line last:border-r-0 p-2 space-y-1.5">
              {dayTrips.map((trip) => (
                <Link
                  key={trip.id}
                  href={`/trips/${trip.id}`}
                  className="block rounded-md px-2 py-1.5 text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: trip.color }}
                >
                  <div className="text-[10px]">{trip.emoji} {trip.city}</div>
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Month View ── */
function MonthView({ date, trips }: { date: Date; trips: TripMeta[] }) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const startPad = firstDay.getDay();
  const totalDays = daysInMonth(year, month);

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let i = 1; i <= totalDays; i++) cells.push(new Date(year, month, i));
  while (cells.length % 7 !== 0) cells.push(null);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="border border-line rounded-lg bg-white overflow-hidden">
      {/* Weekday header */}
      <div className="grid grid-cols-7 border-b border-line bg-warm">
        {weekdays.map((wd) => (
          <div key={wd} className="text-center py-2 text-[9px] tracking-wider uppercase text-muted-foreground border-r border-line last:border-r-0">
            {wd}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7">
        {cells.map((cell, i) => {
          if (!cell) {
            return <div key={i} className="h-24 border-r border-b border-line last:border-r-0 bg-cream/30" />;
          }

          const isToday = isSameDay(cell, new Date(2026, 2, 6));
          const dayTrips = trips.filter((t) => {
            if (!t.startDate || !t.endDate) return false;
            const ts = parseDate(t.startDate);
            const te = parseDate(t.endDate);
            return cell >= ts && cell <= te;
          });

          const isWeekend = cell.getDay() === 0 || cell.getDay() === 6;

          return (
            <div
              key={i}
              className={`h-24 border-r border-b border-line last:border-r-0 p-1.5 ${
                isWeekend ? "bg-cream/30" : ""
              }`}
            >
              <div className={`text-[11px] mb-1 ${isToday ? "bg-ink text-white w-5 h-5 rounded-full flex items-center justify-center font-bold" : "text-subtle pl-0.5"}`}>
                {cell.getDate()}
              </div>
              <div className="space-y-0.5">
                {dayTrips.map((trip) => {
                  const isStart = trip.startDate && isSameDay(cell, parseDate(trip.startDate));
                  return (
                    <Link
                      key={trip.id}
                      href={`/trips/${trip.id}`}
                      className="block rounded px-1 py-0.5 text-white hover:opacity-90 transition-opacity truncate"
                      style={{ backgroundColor: trip.color }}
                    >
                      <span className="text-[9px]">
                        {isStart ? `${trip.emoji} ${trip.city}` : trip.emoji}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Year View ── */
function YearView({ date, trips }: { date: Date; trips: TripMeta[] }) {
  const year = date.getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {months.map((month) => {
        const firstDay = new Date(year, month, 1);
        const startPad = firstDay.getDay();
        const total = daysInMonth(year, month);

        const cells: (number | null)[] = [];
        for (let i = 0; i < startPad; i++) cells.push(null);
        for (let i = 1; i <= total; i++) cells.push(i);
        while (cells.length % 7 !== 0) cells.push(null);

        const monthStart = new Date(year, month, 1);
        const monthEnd = new Date(year, month, total);
        const monthTrips = trips.filter((t) => tripOverlapsRange(t, monthStart, monthEnd));

        return (
          <div key={month} className="border border-line rounded-lg bg-white overflow-hidden">
            <div className="text-center py-2 text-[10px] tracking-[2px] uppercase font-medium text-muted-foreground border-b border-line bg-warm">
              {new Date(year, month).toLocaleDateString("en-US", { month: "long" })}
            </div>

            {/* Mini weekday header */}
            <div className="grid grid-cols-7 px-1.5 pt-1.5">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i} className="text-center text-[8px] text-muted-foreground">{d}</div>
              ))}
            </div>

            {/* Mini days */}
            <div className="grid grid-cols-7 px-1.5 pb-1.5">
              {cells.map((day, i) => {
                if (!day) return <div key={i} className="h-5" />;

                const cellDate = new Date(year, month, day);
                const isToday = isSameDay(cellDate, new Date(2026, 2, 6));
                const hasTrip = trips.some((t) => {
                  if (!t.startDate || !t.endDate) return false;
                  return cellDate >= parseDate(t.startDate) && cellDate <= parseDate(t.endDate);
                });

                const tripForColor = hasTrip
                  ? trips.find((t) => t.startDate && t.endDate && cellDate >= parseDate(t.startDate) && cellDate <= parseDate(t.endDate))
                  : null;

                return (
                  <div
                    key={i}
                    className={`h-5 flex items-center justify-center text-[9px] rounded-sm ${
                      isToday ? "bg-ink text-white font-bold" : hasTrip ? "text-white font-medium" : "text-subtle"
                    }`}
                    style={hasTrip && !isToday && tripForColor ? { backgroundColor: tripForColor.color } : undefined}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            {/* Trip pills */}
            {monthTrips.length > 0 && (
              <div className="px-1.5 pb-2 space-y-0.5">
                {monthTrips.map((trip) => (
                  <Link
                    key={trip.id}
                    href={`/trips/${trip.id}`}
                    className="block rounded px-1.5 py-0.5 text-white text-[8px] truncate hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: trip.color }}
                  >
                    {trip.emoji} {trip.city}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Icons ── */
function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
