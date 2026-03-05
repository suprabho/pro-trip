// Auto-generated from content/trips/*.md — do not edit manually
// Run "npm run generate" to regenerate

export interface Todo {
  note: string;
  link?: string;
  done: boolean;
}

export interface Stop {
  time: string;
  emoji: string;
  name: string;
  desc: string;
  tip?: string;
  lat: number;
  lng: number;
  suggestedBy?: string;
  todos?: Todo[];
}

export interface Stay {
  name: string;
  lat: number;
  lng: number;
}

export interface Airport {
  name: string;
  code: string;
  lat: number;
  lng: number;
}

export interface DayData {
  label: string;
  title: string;
  subtitle: string;
  color: string;
  center: [number, number];
  zoom: number;
  stops: Stop[];
  stays: Stay[];
  airport?: Airport;
}

export interface TripMeta {
  id: string;
  city: string;
  subtitle: string;
  emoji: string;
  highlights: string;
  color: string;
  days: number;
  stops: number;
}

export interface TripData {
  meta: TripMeta;
  days: Record<number, DayData>;
}

export const TRIPS: TripData[] = [
  {
    "meta": {
      "id": "new-york",
      "city": "New York",
      "subtitle": "3 Day Itinerary",
      "emoji": "🗽",
      "highlights": "NoHo · Greenwich Village · Brooklyn Bridge · Central Park",
      "color": "#c94f2c",
      "days": 4,
      "stops": 16
    },
    "days": {
      "1": {
        "label": "Day 1 · Arrival",
        "title": "Downtown Initiation",
        "subtitle": "NoHo · Greenwich Village · Tribeca",
        "color": "#c94f2c",
        "center": [
          40.724,
          -73.999
        ],
        "zoom": 14,
        "stops": [
          {
            "time": "4:00 PM",
            "emoji": "🏨",
            "name": "Now Now NoHo — Check In",
            "tip": "Uber from LGA ~40 min",
            "lat": 40.7261,
            "lng": -73.9923,
            "suggestedBy": "Suprabh",
            "todos": [
              {
                "note": "Confirm hotel reservation",
                "done": false,
                "link": "https://nownownoho.com"
              },
              {
                "note": "Book Uber from LGA",
                "done": true
              }
            ],
            "desc": "338 Bowery, NoHo. Drop your bags, freshen up. You're 10 mins walk from everything."
          },
          {
            "time": "4:30 PM",
            "emoji": "🚶",
            "name": "Greenwich Village",
            "tip": "No agenda needed. Just wander.",
            "lat": 40.7336,
            "lng": -74.0027,
            "suggestedBy": "Suprabh",
            "desc": "NYC's most human-scaled neighbourhood — brownstones, indie bookshops, jazz bars. Just walk."
          },
          {
            "time": "5:30 PM",
            "emoji": "🌳",
            "name": "Washington Square Park",
            "tip": "10-min walk from your hotel",
            "lat": 40.7309,
            "lng": -73.9973,
            "suggestedBy": "Suprabh",
            "desc": "The iconic arch, the fountain, NYU students everywhere. Golden hour hits the arch beautifully."
          },
          {
            "time": "7:00 PM",
            "emoji": "🍕",
            "name": "Joe's Pizza, Carmine St",
            "tip": "💵 Cash only · ATM right outside",
            "lat": 40.7307,
            "lng": -74.0022,
            "suggestedBy": "Aarav",
            "todos": [
              {
                "note": "Withdraw cash from ATM before going",
                "done": false
              }
            ],
            "desc": "The NYC slice. Thin, foldable, perfectly charred. Cash only. Alternates: Prince St, Bleecker St Pizza."
          },
          {
            "time": "8:30 PM",
            "emoji": "🌙",
            "name": "Tribeca at Night",
            "tip": "Walk south from your hotel",
            "lat": 40.7163,
            "lng": -74.0086,
            "suggestedBy": "Suprabh",
            "desc": "Cobblestone streets, cast-iron warehouses, gallery fronts. Artsy, old-money downtown energy."
          }
        ],
        "stays": [
          {
            "name": "Now Now NoHo",
            "lat": 40.7261,
            "lng": -73.9923
          }
        ],
        "airport": {
          "name": "LaGuardia Airport",
          "code": "LGA",
          "lat": 40.7769,
          "lng": -73.874
        }
      },
      "2": {
        "label": "Day 2 · Full Day",
        "title": "Icons, Sky & Meatpacking Mile",
        "subtitle": "9/11 Memorial · Brooklyn Bridge · DUMBO · High Line · The Edge",
        "color": "#2c6bc9",
        "center": [
          40.73,
          -73.998
        ],
        "zoom": 12,
        "stops": [
          {
            "time": "9:00 AM",
            "emoji": "🕊",
            "name": "9/11 Memorial & Museum",
            "tip": "🎟 Pre-book online · Closed Tuesdays",
            "lat": 40.7116,
            "lng": -74.0133,
            "suggestedBy": "Suprabh",
            "todos": [
              {
                "note": "Book museum tickets online",
                "done": false,
                "link": "https://www.911memorial.org/visit/museum/tickets"
              },
              {
                "note": "Check if open on our travel day (closed Tuesdays)",
                "done": false
              }
            ],
            "desc": "Two massive reflecting pools where the towers stood. Book tickets in advance. ~2 hours inside."
          },
          {
            "time": "11:30 AM",
            "emoji": "🌉",
            "name": "Walk the Brooklyn Bridge",
            "tip": "📍 Start from City Hall Park side",
            "lat": 40.7061,
            "lng": -73.9969,
            "suggestedBy": "Aarav",
            "desc": "From City Hall Park, walk across to DUMBO. Gothic towers and steel cables are incredible up close."
          },
          {
            "time": "12:30 PM",
            "emoji": "🌆",
            "name": "DUMBO Piers — Manhattan Skyline",
            "tip": "📸 Washington St for the iconic bridge shot",
            "lat": 40.703,
            "lng": -73.9956,
            "suggestedBy": "Suprabh",
            "desc": "Best view of Manhattan anywhere — the skyline framed by bridge cables. Grab food with this view."
          },
          {
            "time": "2:00 PM",
            "emoji": "🥙",
            "name": "The Halal Guys, 53rd & 6th",
            "tip": "🌶 Ask for extra white sauce",
            "lat": 40.7618,
            "lng": -73.9794,
            "suggestedBy": "Aarav",
            "desc": "The OG halal cart — gyro over rice with white sauce. $13 for a massive bowl."
          },
          {
            "time": "3:30 PM",
            "emoji": "🛤",
            "name": "The High Line",
            "tip": "Open until 8 PM",
            "lat": 40.748,
            "lng": -74.0048,
            "suggestedBy": "Suprabh",
            "desc": "Elevated rail converted to a linear park. Walk from Meatpacking north to Hudson Yards. ~1.5 miles."
          },
          {
            "time": "5:30 PM",
            "emoji": "☁️",
            "name": "The Edge, Hudson Yards",
            "tip": "🎟 Book ahead · Sunset slot is best",
            "lat": 40.7534,
            "lng": -74.0011,
            "suggestedBy": "Suprabh",
            "todos": [
              {
                "note": "Book Edge tickets for sunset slot",
                "done": false,
                "link": "https://www.edgenyc.com/en/tickets"
              },
              {
                "note": "Check sunset time for our travel date",
                "done": true
              }
            ],
            "desc": "100 floors up, glass-floored outdoor deck. Better than One World Trade — you see all the iconic buildings."
          }
        ],
        "stays": [
          {
            "name": "Now Now NoHo",
            "lat": 40.7261,
            "lng": -73.9923
          }
        ]
      },
      "3": {
        "label": "Day 3 · Uptown",
        "title": "Art, Green & Illusions",
        "subtitle": "Statue of Liberty · Central Park · The MET · Museum of Illusions",
        "color": "#2ca068",
        "center": [
          40.748,
          -73.978
        ],
        "zoom": 12,
        "stops": [
          {
            "time": "8:30 AM",
            "emoji": "🗽",
            "name": "Statue of Liberty Ferry",
            "tip": "🎟 Book ferry + pedestal tickets in advance",
            "lat": 40.7014,
            "lng": -74.0154,
            "suggestedBy": "Suprabh",
            "todos": [
              {
                "note": "Book ferry + pedestal tickets",
                "done": false,
                "link": "https://www.statuecruises.com"
              },
              {
                "note": "Check ferry schedule",
                "done": false
              }
            ],
            "desc": "Battery Park ferry to Liberty Island + Ellis Island. ~4 hours total. Incredible skyline views from the ferry."
          },
          {
            "time": "11:00 AM",
            "emoji": "🌿",
            "name": "Central Park",
            "tip": "👟 Wear your most comfortable shoes",
            "lat": 40.7826,
            "lng": -73.9656,
            "suggestedBy": "Aarav",
            "desc": "843 acres of green in the most vertical city. Bethesda Terrace, the Reservoir, Strawberry Fields."
          },
          {
            "time": "1:30 PM",
            "emoji": "🎨",
            "name": "The Metropolitan Museum of Art",
            "tip": "🗺 Grab a floor map · Closed Wednesdays",
            "lat": 40.7794,
            "lng": -73.9632,
            "suggestedBy": "Suprabh",
            "todos": [
              {
                "note": "Buy MET tickets",
                "done": false,
                "link": "https://www.metmuseum.org/visit/tickets"
              },
              {
                "note": "Check if open on our day (closed Wednesdays)",
                "done": false
              }
            ],
            "desc": "Plan 2–3 hours. Egyptian wing, European paintings, Greek sculpture. Pick 2–3 sections and go deep."
          },
          {
            "time": "4:30 PM",
            "emoji": "☕",
            "name": "Coffee — Upper East Side",
            "tip": "Lots of great spots nearby",
            "lat": 40.7771,
            "lng": -73.959,
            "suggestedBy": "Suprabh",
            "desc": "Rest your feet after the MET. Great cafés on Madison Ave around 82nd–86th before heading back downtown."
          },
          {
            "time": "6:00 PM",
            "emoji": "🪄",
            "name": "Museum of Illusions",
            "tip": "📸 Great for photos · Open until 10 PM",
            "lat": 40.7397,
            "lng": -74.0029,
            "suggestedBy": "Aarav",
            "todos": [
              {
                "note": "Book tickets online",
                "done": false,
                "link": "https://museumofillusions.com/new-york"
              }
            ],
            "desc": "Fun, photo-rich hour in Chelsea — Vortex Tunnel, Ames Room, Infinity Mirrors."
          }
        ],
        "stays": [
          {
            "name": "Now Now NoHo",
            "lat": 40.7261,
            "lng": -73.9923
          }
        ],
        "airport": {
          "name": "LaGuardia Airport",
          "code": "LGA",
          "lat": 40.7769,
          "lng": -73.874
        }
      },
      "4": {
        "label": "Day 4",
        "title": "Departure",
        "subtitle": "",
        "color": "#666",
        "center": [
          0,
          0
        ],
        "zoom": 12,
        "stops": [],
        "stays": []
      }
    }
  }
];

export function getTripById(id: string): TripData | undefined {
  return TRIPS.find((t) => t.meta.id === id);
}

export function getAllTrips(): TripMeta[] {
  return TRIPS.map((t) => t.meta);
}
