"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import Link from "next/link";
import type { TripSummary } from "@/lib/generated-dashboard";
import { getBoundsFromCoords, getZoomForBounds, getCenterOfBounds } from "@/lib/map-utils";

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
  trips: TripSummary[];
  preview?: boolean;
}

export function DashboardMap({ trips, preview }: DashboardMapProps) {
  const allCoords = trips.map((t) => t.mapCenter);
  const bounds = getBoundsFromCoords(allCoords);
  const center = bounds ? getCenterOfBounds(bounds) : trips[0].mapCenter;
  const zoom = bounds ? getZoomForBounds(bounds) : 4;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden border border-line">
      <MapContainer
        center={center}
        zoom={zoom}
        zoomControl={!preview}
        scrollWheelZoom={!preview}
        dragging={!preview}
        doubleClickZoom={!preview}
        attributionControl={!preview}
        className="w-full h-full"
      >
        <TileLayer
          attribution={preview ? "" : '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'}
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={19}
        />
        {trips.map((trip) => (
          <Marker
            key={trip.id}
            position={trip.mapCenter}
            icon={createTripIcon(trip.emoji, trip.color)}
          >
            <Popup maxWidth={240}>
              <div className="p-3 px-4 font-sans">
                <p className="font-serif text-lg font-bold leading-tight text-[#111] mb-1">
                  {trip.emoji} {trip.city}
                </p>
                <p className="text-[11px] text-[#888] mb-1">{trip.subtitle}</p>
                <p className="text-[11px] text-[#666] mb-2">{trip.highlights}</p>
                <div className="flex gap-2 mb-2">
                  <span className="text-[10px] bg-[#f5f0e8] rounded-full px-2 py-0.5 text-[#888]">
                    {trip.days} days
                  </span>
                  <span className="text-[10px] bg-[#f5f0e8] rounded-full px-2 py-0.5 text-[#888]">
                    {trip.stops} stops
                  </span>
                </div>
                <Link
                  href={`/trips/${trip.id}`}
                  className="text-[11px] font-medium underline"
                  style={{ color: trip.color }}
                >
                  View itinerary &rarr;
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
