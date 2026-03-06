"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { TRIPS, getAllTrips } from "@/lib/generated-trips";
import { DashboardCalendar } from "@/components/dashboard-calendar";

const DashboardMap = dynamic(
  () =>
    import("@/components/dashboard-map").then((m) => ({
      default: m.DashboardMap,
    })),
  {
    ssr: false,
    loading: () => <div className="w-full h-[500px] bg-cream animate-pulse rounded-lg" />,
  }
);

type View = "cards" | "map" | "calendar";

const trips = getAllTrips();

export default function Dashboard() {
  const [view, setView] = useState<View>("cards");

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <header className="h-[54px] bg-ink flex items-center justify-between px-5 shrink-0">
        <Image src="/PRO-trip-logo-light.svg" alt="PRO trip" width={137} height={41} />
      </header>

      <div className="max-w-4xl h-dvh mx-auto px-6 py-16 overflow-y-auto">
        <div className="mb-12">
          <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground mb-2">
            Dashboard
          </p>
          <h2 className="font-serif text-5xl font-bold leading-tight">
            Promads&apos; Travel Plans
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Plan, organize, and explore your upcoming trips.
          </p>
        </div>

        <div className="flex items-center justify-between mb-5">
          <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground">
            {trips.length} trip{trips.length !== 1 ? "s" : ""}
          </p>

          {/* View toggle */}
          <div className="flex items-center gap-1 bg-warm rounded-lg p-0.5">
            {([
              { key: "cards", label: "Cards", icon: GridIcon },
              { key: "map", label: "Map", icon: MapIcon },
              { key: "calendar", label: "Calendar", icon: CalendarIcon },
            ] as const).map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setView(key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-colors ${
                  view === key
                    ? "bg-white text-ink shadow-sm font-medium"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                <Icon />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {view === "cards" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trips.map((trip) => (
              <Link
                key={trip.id}
                href={`/trips/${trip.id}`}
                className="block group"
              >
                <div className="border border-line rounded-lg overflow-hidden hover:bg-cream transition-colors cursor-pointer h-full flex flex-col">
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: trip.color }}
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0"
                        style={{ backgroundColor: `${trip.color}15` }}
                      >
                        {trip.emoji}
                      </div>
                      <div>
                        <h2 className="font-serif text-xl font-bold group-hover:underline leading-tight">
                          {trip.city}
                        </h2>
                        <span className="text-xs text-subtle">{trip.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground flex-1">
                      {trip.highlights}
                    </p>
                    <div className="flex gap-3 mt-4 pt-4 border-t border-line">
                      <span className="text-[10.5px] bg-warm rounded-full px-2.5 py-0.5 text-muted-foreground">
                        {trip.days} days
                      </span>
                      <span className="text-[10.5px] bg-warm rounded-full px-2.5 py-0.5 text-muted-foreground">
                        {trip.stops} stops
                      </span>
                      <span className="ml-auto text-subtle group-hover:text-ink transition-colors text-sm">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {view === "map" && (
          <div className="h-[500px]">
            <DashboardMap trips={TRIPS} />
          </div>
        )}

        {view === "calendar" && (
          <DashboardCalendar trips={trips} />
        )}
      </div>
    </div>
  );
}

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
