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
  date?: string;
  time?: string;
  flightNumber?: string;
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
      "stops": 27
    },
    "days": {
      "1": {
        "label": "Day 1 · Arrival",
        "title": "Downtown Initiation",
        "subtitle": "NoHo · Greenwich Village · Eataly · Tribeca",
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
            "suggestedBy": "Suprabho",
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
            "suggestedBy": "Suprabho, Srayana",
            "desc": "NYC's most human-scaled neighbourhood — brownstones, indie bookshops, jazz bars. Just walk."
          },
          {
            "time": "5:30 PM",
            "emoji": "🌳",
            "name": "Washington Square Park",
            "tip": "10-min walk from your hotel",
            "lat": 40.7309,
            "lng": -73.9973,
            "suggestedBy": "Srayana",
            "desc": "The iconic arch, the fountain, NYU students everywhere. Golden hour hits the arch beautifully."
          },
          {
            "time": "6:30 PM",
            "emoji": "🎪",
            "name": "Union Square Holiday Market",
            "tip": "🎄 Seasonal · Open Nov–Dec only",
            "lat": 40.7359,
            "lng": -73.9911,
            "suggestedBy": "Ritwik",
            "desc": "Seasonal outdoor market with crafts, food, and gifts. 15-min walk north from Washington Sq."
          },
          {
            "time": "7:00 PM",
            "emoji": "🍕",
            "name": "Joe's Pizza, Carmine St",
            "tip": "💵 Cash only · ATM right outside",
            "lat": 40.7307,
            "lng": -74.0022,
            "suggestedBy": "Srayana",
            "todos": [
              {
                "note": "Withdraw cash from ATM before going",
                "done": false
              }
            ],
            "desc": "The NYC slice. Thin, foldable, perfectly charred. Cash only. Alternates: Prince St, Bleecker St Pizza."
          },
          {
            "time": "8:00 PM",
            "emoji": "🍝",
            "name": "Eataly Flatiron",
            "tip": "📍 Right next to the Flatiron Building",
            "lat": 40.7425,
            "lng": -73.9896,
            "suggestedBy": "Ritwik",
            "desc": "Italian food hall near the iconic triangular Flatiron Building. Great for dessert, gelato, or a browse after pizza."
          },
          {
            "time": "9:00 PM",
            "emoji": "🌙",
            "name": "Tribeca at Night",
            "tip": "Walk south from your hotel",
            "lat": 40.7163,
            "lng": -74.0086,
            "suggestedBy": "Suprabho, Srayana",
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
          "lng": -73.874,
          "date": "Mar 12, 2026",
          "time": "2:50 PM",
          "flightNumber": "WN3149"
        }
      },
      "2": {
        "label": "Day 2 · Full Day",
        "title": "Lower Manhattan & Brooklyn",
        "subtitle": "9/11 Memorial · One World · Statue of Liberty · Brooklyn Bridge · DUMBO",
        "color": "#2c6bc9",
        "center": [
          40.706,
          -74.006
        ],
        "zoom": 12,
        "stops": [
          {
            "time": "8:30 AM",
            "emoji": "🗽",
            "name": "Statue of Liberty Ferry",
            "tip": "🎟 Book ferry + pedestal tickets in advance — sell out fast",
            "lat": 40.7014,
            "lng": -74.0154,
            "suggestedBy": "Suprabho, Ritwik",
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
            "time": "12:30 PM",
            "emoji": "🕊",
            "name": "9/11 Memorial & Museum",
            "tip": "🎟 Pre-book online · Closed Tuesdays · 10-min walk from Battery Park",
            "lat": 40.7116,
            "lng": -74.0133,
            "suggestedBy": "Suprabho, Ritwik",
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
            "time": "2:30 PM",
            "emoji": "🌐",
            "name": "One World Observatory",
            "tip": "🎟 Book online · Can skip if saving The Edge for Day 3",
            "lat": 40.7127,
            "lng": -74.0134,
            "suggestedBy": "Ritwik",
            "desc": "102nd floor of One World Trade Center. Panoramic views of NYC. Right next to the 9/11 Memorial."
          },
          {
            "time": "4:00 PM",
            "emoji": "🌉",
            "name": "Walk the Brooklyn Bridge",
            "tip": "📍 Start from City Hall Park side · 20-min walk from One World",
            "lat": 40.7061,
            "lng": -73.9969,
            "suggestedBy": "Aarav, Srayana",
            "desc": "From City Hall Park, walk across to DUMBO. Gothic towers and steel cables are incredible up close."
          },
          {
            "time": "5:00 PM",
            "emoji": "🌆",
            "name": "DUMBO Piers — Manhattan Skyline",
            "tip": "📸 Washington St for the iconic bridge shot",
            "lat": 40.703,
            "lng": -73.9956,
            "suggestedBy": "Suprabho, Srayana",
            "desc": "Best view of Manhattan anywhere — the skyline framed by bridge cables. Grab food with this view."
          },
          {
            "time": "5:30 PM",
            "emoji": "🥊",
            "name": "Gleasons Gym",
            "tip": "Drop-in sessions available · 15-min walk from the bridge",
            "lat": 40.6945,
            "lng": -73.9787,
            "suggestedBy": "Ritwik",
            "desc": "Legendary Brooklyn boxing gym — Muhammad Ali, Mike Tyson trained here. Quick visit while in DUMBO."
          },
          {
            "time": "7:00 PM",
            "emoji": "🌃",
            "name": "Back to Manhattan — Evening in NoHo",
            "tip": "Walk back over the bridge at dusk for the reverse skyline view",
            "lat": 40.7261,
            "lng": -73.9923,
            "desc": "Head back over the bridge or grab the A/C/F subway. Easy evening near the hotel — explore a bar or jazz spot in the Village."
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
        "label": "Day 3 · Full Day",
        "title": "West Side Midtown → Uptown Museums",
        "subtitle": "High Line · The Edge · Halal Guys · Central Park · MET · Guggenheim · Times Square · MoMA",
        "color": "#2ca068",
        "center": [
          40.76,
          -73.982
        ],
        "zoom": 12,
        "stops": [
          {
            "time": "10:00 AM",
            "emoji": "🛤",
            "name": "The High Line",
            "tip": "Open until 8 PM · Great coffee carts along the way",
            "lat": 40.748,
            "lng": -74.0048,
            "suggestedBy": "Suprabho",
            "desc": "Elevated rail converted to a linear park. Walk from Meatpacking north to Hudson Yards. ~1.5 miles."
          },
          {
            "time": "11:30 AM",
            "emoji": "☁️",
            "name": "The Edge, Hudson Yards",
            "tip": "🎟 Book ahead · Midmorning light is excellent, sunset slot is best if you prefer it later",
            "lat": 40.7534,
            "lng": -74.0011,
            "suggestedBy": "Suprabho, Srayana",
            "todos": [
              {
                "note": "Book Edge tickets",
                "done": false,
                "link": "https://www.edgenyc.com/en/tickets"
              }
            ],
            "desc": "100 floors up, glass-floored outdoor deck. Better than One World Trade — you see all the iconic buildings."
          },
          {
            "time": "1:00 PM",
            "emoji": "🥙",
            "name": "The Halal Guys, 53rd & 6th",
            "tip": "🌶 Ask for extra white sauce · 10-min walk from Hudson Yards",
            "lat": 40.7618,
            "lng": -73.9794,
            "suggestedBy": "Aarav, Ritwik",
            "desc": "The OG halal cart — gyro over rice with white sauce. $13 for a massive bowl."
          },
          {
            "time": "2:00 PM",
            "emoji": "🛍",
            "name": "5th Avenue Shops",
            "tip": "Window shopping is free · You're already walking uptown toward the museums",
            "lat": 40.7564,
            "lng": -73.9782,
            "suggestedBy": "Ritwik",
            "desc": "Iconic shopping strip — Saks, Tiffany's, Bergdorf Goodman, Apple Store. Walk north toward midtown."
          },
          {
            "time": "2:30 PM",
            "emoji": "🏙",
            "name": "Rockefeller Center",
            "tip": "Combine with 5th Ave — all walkable",
            "lat": 40.7587,
            "lng": -73.9787,
            "suggestedBy": "Ritwik",
            "desc": "Art Deco complex with Top of the Rock observation deck. Ice skating rink in winter, NBC Studios."
          },
          {
            "time": "3:30 PM",
            "emoji": "🌿",
            "name": "Central Park",
            "tip": "👟 Enter at 59th St, walk north — naturally routes you toward the museums",
            "lat": 40.7826,
            "lng": -73.9656,
            "suggestedBy": "Aarav, Srayana, Ritwik",
            "desc": "843 acres of green in the most vertical city. Bethesda Terrace, the Reservoir, Strawberry Fields."
          },
          {
            "time": "4:30 PM",
            "emoji": "🎨",
            "name": "The Metropolitan Museum of Art",
            "tip": "🗺 Grab a floor map · Closed Wednesdays",
            "lat": 40.7794,
            "lng": -73.9632,
            "suggestedBy": "Suprabho, Srayana",
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
            "desc": "Plan 2 hours. Egyptian wing, European paintings, Greek sculpture. Pick 2–3 sections and go deep."
          },
          {
            "time": "6:00 PM",
            "emoji": "🖼",
            "name": "Guggenheim Museum",
            "tip": "Walk the spiral from top down · 5-min walk from MET",
            "lat": 40.783,
            "lng": -73.959,
            "suggestedBy": "Ritwik",
            "desc": "Frank Lloyd Wright's spiral masterpiece. Right next to the MET on the Upper East Side."
          },
          {
            "time": "7:00 PM",
            "emoji": "☕",
            "name": "Coffee — Upper East Side",
            "tip": "Lots of great spots nearby",
            "lat": 40.7771,
            "lng": -73.959,
            "suggestedBy": "Suprabho",
            "desc": "Rest your feet after the museums. Great cafés on Madison Ave around 82nd–86th before heading downtown."
          },
          {
            "time": "7:30 PM",
            "emoji": "🏛",
            "name": "Empire State Building",
            "tip": "🎟 Book skip-the-line tickets · 15-min subway ride from the Guggenheim",
            "lat": 40.7484,
            "lng": -73.9857,
            "suggestedBy": "Ritwik",
            "desc": "Classic Art Deco skyscraper — 86th floor observatory for 360° views. Stunning at night when lit up."
          },
          {
            "time": "9:00 PM",
            "emoji": "🎨",
            "name": "Museum of Modern Art (MoMA)",
            "tip": "Free on Friday evenings · Right next to Rockefeller Center",
            "lat": 40.7614,
            "lng": -73.9776,
            "suggestedBy": "Ritwik",
            "desc": "Starry Night, Warhols, Picasso. One of the world's greatest modern art collections."
          },
          {
            "time": "9:30 PM",
            "emoji": "🌃",
            "name": "Times Square at Night",
            "tip": "Best at night for the full effect · 5-min walk from MoMA",
            "lat": 40.758,
            "lng": -73.9855,
            "suggestedBy": "Ritwik",
            "desc": "NYC's most iconic intersection — bright lights, billboards, pure chaos. Best experienced after dark."
          },
          {
            "time": "10:30 PM",
            "emoji": "🪄",
            "name": "Museum of Illusions",
            "tip": "📸 Great for photos · Open until 10 PM · Skip if energy is low after a big day",
            "lat": 40.7397,
            "lng": -74.0029,
            "suggestedBy": "Aarav, Ritwik",
            "todos": [
              {
                "note": "Book tickets online",
                "done": false,
                "link": "https://museumofillusions.com/new-york"
              }
            ],
            "desc": "Fun, photo-rich hour in Chelsea — Vortex Tunnel, Ames Room, Infinity Mirrors. ## Bonus Suggestions"
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
      "4": {
        "label": "Day 4 · Departure",
        "title": "Departure",
        "subtitle": "JFK Airport",
        "color": "#666",
        "center": [
          40.6449,
          -73.7807
        ],
        "zoom": 12,
        "stops": [],
        "stays": [],
        "airport": {
          "name": "JFK Airport",
          "code": "JFK",
          "lat": 40.6449,
          "lng": -73.7807,
          "date": "Mar 15, 2026",
          "time": "3:45 PM",
          "flightNumber": "EY 2"
        }
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
