"use client";

import { useState, useCallback } from "react";
import { useParams, notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { TopBar } from "@/components/top-bar";
import type { DayValue } from "@/components/top-bar";
import { Sidebar } from "@/components/sidebar";
import { TodoDialog } from "@/components/todo-dialog";
import { MobileBottomSheet } from "@/components/mobile-bottom-sheet";
import { getTripById } from "@/lib/generated-trips";
import type { Stop } from "@/lib/generated-trips";

const ItineraryMap = dynamic(
  () =>
    import("@/components/itinerary-map").then((m) => ({
      default: m.ItineraryMap,
    })),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-cream animate-pulse" />,
  }
);

export default function TripPage() {
  const { slug } = useParams<{ slug: string }>();
  const trip = getTripById(slug);

  const [activeDay, setActiveDay] = useState<DayValue>(1);
  const [activeStop, setActiveStop] = useState<string | null>(null);
  const [focusedStop, setFocusedStop] = useState<Stop | null>(null);
  const [todoStop, setTodoStop] = useState<Stop | null>(null);

  const handleDayChange = useCallback((day: DayValue) => {
    setActiveDay(day);
    setActiveStop(null);
    setFocusedStop(null);
  }, []);

  const handleStopClick = useCallback((stop: Stop) => {
    setActiveStop(stop.name);
    setFocusedStop(stop);
  }, []);

  if (!trip) {
    notFound();
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-paper text-ink font-sans">
      <TopBar trip={trip} activeDay={activeDay} onDayChange={handleDayChange} />
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        <div className="hidden md:flex md:w-[380px] shrink-0">
          <Sidebar
            trip={trip}
            activeDay={activeDay}
            activeStop={activeStop}
            onStopClick={handleStopClick}
            onTodoClick={setTodoStop}
          />
        </div>
        <div className="flex-1 relative">
          <ItineraryMap trip={trip} activeDay={activeDay} focusedStop={focusedStop} />
        </div>
        <MobileBottomSheet>
          <Sidebar
            trip={trip}
            activeDay={activeDay}
            activeStop={activeStop}
            onStopClick={handleStopClick}
            onTodoClick={setTodoStop}
            mobile
          />
        </MobileBottomSheet>
      </div>

      {todoStop && todoStop.todos && (
        <TodoDialog
          open={!!todoStop}
          onOpenChange={(open) => !open && setTodoStop(null)}
          stop={todoStop}
        />
      )}
    </div>
  );
}
