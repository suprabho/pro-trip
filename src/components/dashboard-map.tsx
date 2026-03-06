"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import type { TripData } from "@/lib/generated-trips";

function createTripIcon(emoji: string, color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="width:42px;height:42px;border-radius:50%;background:${color};
      border:3px solid white;box-shadow:0 3px 12px rgba(0,0,0,0.28);
      display:flex;align-items:center;justify-content:center;">
      <span style="font-size:18px;line-height:1;">${emoji}</span>
    </div>`,
    iconSize: [42, 42],
    iconAnchor: [21, 21],
    popupAnchor: [0, -24],
  });
}

interface DashboardMapProps {
  trips: TripData[];
}

export function DashboardMap({ trips }: DashboardMapProps) {
  const firstTrip = trips[0];
  const firstDayNum = Object.keys(firstTrip.days).map(Number).sort((a, b) => a - b)[0];
  const defaultCenter = firstTrip.days[firstDayNum].center;

  // Collect all stop coordinates to fit bounds
  const allCoords: [number, number][] = trips.map((t) => {
    const dayNums = Object.keys(t.days).map(Number).sort((a, b) => a - b);
    return t.days[dayNums[0]].center;
  });

  return (
    <div className="w-full h-full rounded-lg overflow-hidden border border-line">
      <MapContainer
        center={defaultCenter}
        zoom={4}
        zoomControl={true}
        className="w-full h-full"
        bounds={allCoords.length > 1 ? L.latLngBounds(allCoords.map(c => L.latLng(c[0], c[1]))).pad(0.3) : undefined}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={19}
        />
        {trips.map((trip) => {
          const dayNums = Object.keys(trip.days).map(Number).sort((a, b) => a - b);
          const center = trip.days[dayNums[0]].center;
          return (
            <Marker
              key={trip.meta.id}
              position={center}
              icon={createTripIcon(trip.meta.emoji, trip.meta.color)}
            >
              <Popup maxWidth={240}>
                <div className="p-3 px-4 font-sans">
                  <p className="font-serif text-lg font-bold leading-tight text-[#111] mb-1">
                    {trip.meta.emoji} {trip.meta.city}
                  </p>
                  <p className="text-[11px] text-[#888] mb-1">{trip.meta.subtitle}</p>
                  <p className="text-[11px] text-[#666] mb-2">{trip.meta.highlights}</p>
                  <div className="flex gap-2 mb-2">
                    <span className="text-[10px] bg-[#f5f0e8] rounded-full px-2 py-0.5 text-[#888]">
                      {trip.meta.days} days
                    </span>
                    <span className="text-[10px] bg-[#f5f0e8] rounded-full px-2 py-0.5 text-[#888]">
                      {trip.meta.stops} stops
                    </span>
                  </div>
                  <Link
                    href={`/trips/${trip.meta.id}`}
                    className="text-[11px] font-medium underline"
                    style={{ color: trip.meta.color }}
                  >
                    View itinerary &rarr;
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
