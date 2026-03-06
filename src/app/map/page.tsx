"use client";

import Image from "next/image";
import Link from "next/link";
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

export default function MapPage() {
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
      <div className="flex-1 relative">
        <DashboardMap trips={TRIP_SUMMARIES} />
      </div>
    </div>
  );
}
