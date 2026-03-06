"use client";

import dynamic from "next/dynamic";
import { TRIP_SUMMARIES } from "@/lib/generated-dashboard";

const DashboardMap = dynamic(
  () =>
    import("@/components/dashboard-map").then((m) => ({
      default: m.DashboardMap,
    })),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-cream animate-pulse" />,
  }
);

export function DashboardMapPreview() {
  return (
    <div className="h-[200px] pointer-events-none">
      <DashboardMap trips={TRIP_SUMMARIES} preview />
    </div>
  );
}
