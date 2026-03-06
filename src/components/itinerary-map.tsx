"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getTripById, type Stop } from "@/lib/generated-trips";
import type { DayValue } from "@/components/top-bar";

const trip = getTripById("new-york")!;
const DAYS = trip.days;

/* Tag → pin color using palette values from globals.css */
const tagColorMap: Record<string, string> = {
  Arrive:        "#201c1a", // neutral-950
  Food:          "#ce6c96", // pink-500
  Park:          "#008738", // positive-700
  Neighbourhood: "#cf5900", // accent-600
  Walk:          "#00c9c3", // primary-600
  Evening:       "#582553", // blue-600
  Memorial:      "#1b63d1", // blue-600
  Icon:          "#bb3d4f", // rose-600
  Views:         "#bb3d4f", // rose-600
  Viewpoint:     "#bb3d4f", // rose-600
  Museum:        "#6854a8", // violet-600
  Experience:    "#6854a8", // violet-600
  Entertainment: "#6854a8", // violet-600
  Shopping:      "#ee848a", // accent-500
  Landmark:      "#1b63d1", // blue-600
  Break:         "#cf5900", // accent-500
};

interface ItineraryMapProps {
  activeDay: DayValue;
  focusedStop: Stop | null;
}

function createIcon(color: string, emoji: string) {
  return L.divIcon({
    className: "",
    html: `<div style="width:34px;height:34px;border-radius:50% 50% 50% 0;background:${color};
      transform:rotate(-45deg);border:2.5px solid white;
      box-shadow:0 3px 12px rgba(0,0,0,0.28);
      display:flex;align-items:center;justify-content:center;">
      <span style="transform:rotate(45deg);font-size:14px;line-height:1;">${emoji}</span>
    </div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -36],
  });
}

function createStayIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="width:34px;height:34px;border-radius:50%;background:${color};
      border:2.5px solid white;box-shadow:0 3px 12px rgba(0,0,0,0.28);
      display:flex;align-items:center;justify-content:center;">
      <span style="font-size:14px;line-height:1;">🏨</span>
    </div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -20],
  });
}

function createAirportIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="width:34px;height:34px;border-radius:50%;background:${color};
      border:2.5px solid white;box-shadow:0 3px 12px rgba(0,0,0,0.28);
      display:flex;align-items:center;justify-content:center;">
      <span style="font-size:14px;line-height:1;">✈️</span>
    </div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -20],
  });
}

function MapController({
  activeDay,
  focusedStop,
}: {
  activeDay: DayValue;
  focusedStop: Stop | null;
}) {
  const map = useMap();
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  const registerMarker = useCallback((name: string, marker: L.Marker | null) => {
    if (marker) {
      markersRef.current.set(name, marker);
    }
  }, []);

  useEffect(() => {
    if (focusedStop) {
      map.flyTo([focusedStop.lat, focusedStop.lng], 16, { duration: 0.8 });
      setTimeout(() => {
        const marker = markersRef.current.get(focusedStop.name);
        if (marker) marker.openPopup();
      }, 900);
    } else if (activeDay === "all") {
      map.flyTo([40.735, -73.993], 12, { duration: 0.9 });
    } else {
      const d = DAYS[activeDay];
      map.flyTo(d.center, d.zoom, { duration: 0.9 });
    }
  }, [activeDay, focusedStop, map]);

  // Expose registerMarker on the window for the DayMarkers to use
  useEffect(() => {
    (window as unknown as Record<string, unknown>).__registerMarker = registerMarker;
    return () => {
      delete (window as unknown as Record<string, unknown>).__registerMarker;
    };
  }, [registerMarker]);

  return null;
}

function DayMarkers({ dayNum, useTagColors }: { dayNum: number; useTagColors: boolean }) {
  const d = DAYS[dayNum];
  const coords = d.stops.map((s) => [s.lat, s.lng] as [number, number]);

  return (
    <>
      <Polyline
        positions={coords}
        pathOptions={{
          color: d.color,
          weight: 2.5,
          opacity: 0.45,
          dashArray: "6,9",
        }}
      />
      {d.stops.map((stop, i) => (
        <Marker
          key={`${dayNum}-${i}`}
          position={[stop.lat, stop.lng]}
          icon={createIcon(useTagColors && stop.tag ? (tagColorMap[stop.tag] ?? d.color) : d.color, stop.emoji)}
          ref={(ref) => {
            const register = (window as unknown as Record<string, unknown>)
              .__registerMarker as
              | ((name: string, marker: L.Marker | null) => void)
              | undefined;
            if (register && ref) register(stop.name, ref);
          }}
        >
          <Popup maxWidth={270}>
            <div className="p-3.5 px-4 font-sans">
              <p
                className="text-[9px] tracking-[2px] uppercase font-bold mb-0.5"
                style={{ color: d.color }}
              >
                Day {dayNum}
              </p>
              <p className="text-[10px] tracking-[1px] uppercase text-[#999] mb-0.5">
                {stop.time}
              </p>
              <p className="font-serif text-[19px] font-bold leading-tight mb-1 text-[#111]">
                {stop.name}
              </p>
              <p className="text-[11.5px] leading-relaxed text-[#555]">
                {stop.desc}
              </p>
              {stop.tip && (
                <span className="inline-block mt-2 text-[10.5px] text-[#888] bg-[#f5f0e8] rounded-xl px-2.5 py-0.5">
                  {stop.tip}
                </span>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
      {d.stays.map((stay, i) => (
        <Marker
          key={`stay-${dayNum}-${i}`}
          position={[stay.lat, stay.lng]}
          icon={createStayIcon(d.color)}
        >
          <Popup maxWidth={220}>
            <div className="p-3 px-4 font-sans">
              <p className="text-[9px] tracking-[2px] uppercase font-bold mb-0.5" style={{ color: d.color }}>
                Stay
              </p>
              <p className="font-serif text-[17px] font-bold leading-tight text-[#111]">
                {stay.name}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
      {d.airport && (
        <Marker
          key={`airport-${dayNum}`}
          position={[d.airport.lat, d.airport.lng]}
          icon={createAirportIcon(d.color)}
        >
          <Popup maxWidth={220}>
            <div className="p-3 px-4 font-sans">
              <p className="text-[9px] tracking-[2px] uppercase font-bold mb-0.5" style={{ color: d.color }}>
                Airport
              </p>
              <p className="font-serif text-[17px] font-bold leading-tight text-[#111]">
                {d.airport.name}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="inline-block text-[10.5px] text-[#888] bg-[#f0f0f8] rounded-xl px-2.5 py-0.5">
                  {d.airport.code}
                </span>
                {d.airport.flightNumber && (
                  <span className="inline-block text-[10.5px] font-medium text-[#555] bg-[#e8e8f0] rounded-xl px-2.5 py-0.5">
                    {d.airport.flightNumber}
                  </span>
                )}
              </div>
              {(d.airport.date || d.airport.time) && (
                <p className="mt-1 text-[11px] text-[#888]">
                  {d.airport.date}{d.airport.date && d.airport.time ? " · " : ""}{d.airport.time}
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      )}
    </>
  );
}

export function ItineraryMap({ activeDay, focusedStop }: ItineraryMapProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const allDayNums = Object.keys(DAYS).map(Number).sort((a, b) => a - b);
  const days = activeDay === "all" ? allDayNums : [activeDay as number];

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <MapContainer
        center={[40.724, -73.999]}
        zoom={14}
        zoomControl={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={19}
        />
        <MapController activeDay={activeDay} focusedStop={focusedStop} />
        {days.map((d) => (
          <DayMarkers key={d} dayNum={d} useTagColors={activeDay !== "all"} />
        ))}
      </MapContainer>
      <button
        onClick={toggleFullscreen}
        className="absolute top-3 right-3 z-1000 bg-white rounded-lg shadow-md border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
        title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
      >
        {isFullscreen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 14 10 14 10 20" />
            <polyline points="20 10 14 10 14 4" />
            <line x1="14" y1="10" x2="21" y2="3" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        )}
      </button>
    </div>
  );
}
