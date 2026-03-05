"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { TopBar } from "@/components/top-bar";
import type { DayValue } from "@/components/top-bar";
import { Sidebar } from "@/components/sidebar";
import { TodoDialog } from "@/components/todo-dialog";
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

const trip = getTripById("new-york")!;

export default function NewYorkTrip() {
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

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-paper text-ink font-sans">
      <TopBar trip={trip} activeDay={activeDay} onDayChange={handleDayChange} />
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <Sidebar
          activeDay={activeDay}
          activeStop={activeStop}
          onStopClick={handleStopClick}
          onTodoClick={setTodoStop}
        />
        <div className="flex-1 relative">
          <ItineraryMap activeDay={activeDay} focusedStop={focusedStop} />
        </div>
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
