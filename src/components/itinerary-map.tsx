"use client";

import { useEffect, useRef, useCallback } from "react";
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

function createStayIcon() {
  return L.divIcon({
    className: "",
    html: `<div style="width:34px;height:34px;border-radius:50%;background:#f59e0b;
      border:2.5px solid white;box-shadow:0 3px 12px rgba(0,0,0,0.28);
      display:flex;align-items:center;justify-content:center;">
      <span style="font-size:14px;line-height:1;">🏨</span>
    </div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -20],
  });
}

function createAirportIcon() {
  return L.divIcon({
    className: "",
    html: `<div style="width:34px;height:34px;border-radius:50%;background:#6366f1;
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

function DayMarkers({ dayNum }: { dayNum: number }) {
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
          icon={createIcon(d.color, stop.emoji)}
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
          icon={createStayIcon()}
        >
          <Popup maxWidth={220}>
            <div className="p-3 px-4 font-sans">
              <p className="text-[9px] tracking-[2px] uppercase font-bold mb-0.5 text-[#f59e0b]">
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
          icon={createAirportIcon()}
        >
          <Popup maxWidth={220}>
            <div className="p-3 px-4 font-sans">
              <p className="text-[9px] tracking-[2px] uppercase font-bold mb-0.5 text-[#6366f1]">
                Airport
              </p>
              <p className="font-serif text-[17px] font-bold leading-tight text-[#111]">
                {d.airport.name}
              </p>
              <span className="inline-block mt-1 text-[10.5px] text-[#888] bg-[#f0f0f8] rounded-xl px-2.5 py-0.5">
                {d.airport.code}
              </span>
            </div>
          </Popup>
        </Marker>
      )}
    </>
  );
}

export function ItineraryMap({ activeDay, focusedStop }: ItineraryMapProps) {
  const days = activeDay === "all" ? [1, 2, 3] : [activeDay as number];

  return (
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
        <DayMarkers key={d} dayNum={d} />
      ))}
    </MapContainer>
  );
}
