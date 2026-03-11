// Auto-generated dashboard widget data — do not edit manually
// Run "npm run generate" to regenerate

export interface TripSummary {
  id: string;
  city: string;
  emoji: string;
  subtitle: string;
  highlights: string;
  color: string;
  days: number;
  stops: number;
  startDate?: string;
  endDate?: string;
  mapCenter: [number, number];
}

export const TRIP_SUMMARIES: TripSummary[] = [
  {
    "id": "austin",
    "city": "Austin",
    "emoji": "🤠",
    "subtitle": "5 Day Itinerary",
    "highlights": "SXSW EDU · South Congress · Lady Bird Lake · Zilker Park · 6th Street",
    "color": "#e85d26",
    "days": 5,
    "stops": 17,
    "startDate": "2026-03-08",
    "endDate": "2026-03-12",
    "mapCenter": [
      30.264,
      -97.74
    ]
  },
  {
    "id": "new-york",
    "city": "New York",
    "emoji": "🗽",
    "subtitle": "3 Day Itinerary",
    "highlights": "NoHo · Greenwich Village · Brooklyn Bridge · Central Park",
    "color": "#c94f2c",
    "days": 4,
    "stops": 41,
    "startDate": "2026-03-12",
    "endDate": "2026-03-15",
    "mapCenter": [
      40.724,
      -73.999
    ]
  }
];

export const CALENDAR_RANGE: { start: string; end: string } | null = {"start":"2026-03-08","end":"2026-03-15"};

export const MAP_BOUNDS: { sw: [number, number]; ne: [number, number] } | null = {"sw":[30.264,-97.74],"ne":[40.724,-73.999]};

export const STATS = {
  totalTrips: 2,
  totalDays: 9,
  totalStops: 58,
};
