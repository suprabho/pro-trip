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
  tag?: string;
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
  startDate?: string;
  endDate?: string;
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
      "id": "austin",
      "city": "Austin",
      "subtitle": "5 Day Itinerary",
      "emoji": "🤠",
      "highlights": "SXSW EDU · South Congress · Lady Bird Lake · Zilker Park · 6th Street",
      "startDate": "2026-03-08",
      "endDate": "2026-03-12",
      "color": "#e85d26",
      "days": 5,
      "stops": 17
    },
    "days": {
      "1": {
        "label": "Day 1 · Arrival",
        "title": "Arrival & Downtown",
        "subtitle": "Check In · Rest",
        "color": "#e85d26",
        "center": [
          30.264,
          -97.74
        ],
        "zoom": 14,
        "stops": [
          {
            "time": "5:00 PM",
            "emoji": "🏨",
            "name": "Hilton Garden Inn Austin Downtown — Check In",
            "tip": "Uber from AUS ~20 min · Hotel is steps from the convention center",
            "lat": 30.2652,
            "lng": -97.7358,
            "suggestedBy": "Suprabho",
            "tag": "Arrive",
            "todos": [
              {
                "note": "Confirm hotel reservation",
                "done": false,
                "link": "https://www.hilton.com/en/hotels/auscogi-hilton-garden-inn-austin-downtown-convention-center/"
              },
              {
                "note": "Book Uber from AUS",
                "done": true
              }
            ],
            "desc": "500 N Interstate 35, right near the convention center. Drop bags and freshen up before heading out for the evening."
          }
        ],
        "stays": [
          {
            "name": "Hilton Garden Inn Austin Downtown",
            "lat": 30.2652,
            "lng": -97.7358
          }
        ],
        "airport": {
          "name": "Austin-Bergstrom International",
          "code": "AUS",
          "lat": 30.1975,
          "lng": -97.6664,
          "date": "Mar 8, 2026",
          "time": "3:15 PM",
          "flightNumber": "LH468"
        }
      },
      "2": {
        "label": "Day 2 · SXSW EDU",
        "title": "SXSW EDU Day 1",
        "subtitle": "Convention Center · Keynotes · Capitol · Bat Bridge · Elephant Room",
        "color": "#2c7fb8",
        "center": [
          30.263,
          -97.739
        ],
        "zoom": 14,
        "stops": [
          {
            "time": "10:00 AM",
            "emoji": "🎓",
            "name": "SXSW EDU — Morning Keynotes",
            "tip": "Keynotes fill up fast · Grab coffee from the convention center if Fleet is too far",
            "lat": 30.2631,
            "lng": -97.7394,
            "suggestedBy": "Suprabho",
            "tag": "Conference",
            "todos": [
              {
                "note": "Register badge pickup",
                "done": false,
                "link": "https://www.sxswedu.com"
              },
              {
                "note": "Download SXSW EDU scheduling app",
                "done": false
              },
              {
                "note": "Review session schedule and bookmark must-attend talks",
                "done": false
              },
              {
                "note": "Check keynote speaker schedule",
                "done": false
              }
            ],
            "desc": "Morning keynotes and featured sessions at the convention center. Arrive early for good seats."
          },
          {
            "time": "1:00 PM",
            "emoji": "🎓",
            "name": "SXSW EDU — Afternoon Workshops",
            "tip": "Pre-register for workshops — they cap attendance",
            "lat": 30.2631,
            "lng": -97.7394,
            "suggestedBy": "Suprabho",
            "tag": "Conference",
            "desc": "Deep-dive workshops and interactive sessions. These are smaller and more hands-on than the keynotes. Sessions wrap up at 3 PM."
          },
          {
            "time": "3:30 PM",
            "emoji": "🏛",
            "name": "Texas State Capitol",
            "tip": "Free tours every 30 min · 15-min walk north from downtown",
            "lat": 30.2747,
            "lng": -97.7403,
            "suggestedBy": "Suprabho",
            "tag": "Landmark",
            "desc": "Taller than the US Capitol. Free guided tours of the stunning pink granite building. Beautiful grounds for an afternoon walk."
          },
          {
            "time": "5:30 PM",
            "emoji": "🦇",
            "name": "Congress Ave Bridge — Bat Watching",
            "tip": "🦇 Best viewed from the south side of the bridge · Arrive 30 min before sunset · Peak bat season is summer but March works too",
            "lat": 30.2621,
            "lng": -97.7454,
            "suggestedBy": "Suprabho",
            "tag": "Experience",
            "desc": "1.5 million Mexican free-tailed bats emerge at dusk from under the bridge (March–October). One of Austin's most unique experiences."
          },
          {
            "time": "9:00 PM",
            "emoji": "🎷",
            "name": "Elephant Room — Jazz Night",
            "tip": "🎷 315 Congress Ave · Small cover charge · Shows nightly",
            "lat": 30.266,
            "lng": -97.7432,
            "suggestedBy": "Suprabho",
            "tag": "Evening",
            "desc": "Basement jazz club on Congress Ave. Intimate, low-key, and a true Austin institution for live jazz right in the heart of downtown."
          }
        ],
        "stays": [
          {
            "name": "Hilton Garden Inn Austin Downtown",
            "lat": 30.2652,
            "lng": -97.7358
          }
        ]
      },
      "3": {
        "label": "Day 3 · SXSW EDU",
        "title": "SXSW EDU Day 2",
        "subtitle": "SXSW EDU · Launch Spotlight · 6th Street",
        "color": "#2d8a6e",
        "center": [
          30.26,
          -97.74
        ],
        "zoom": 14,
        "stops": [
          {
            "time": "10:00 AM",
            "emoji": "🎓",
            "name": "SXSW EDU — Morning Sessions",
            "tip": "Day 2 is usually less crowded — great for deeper conversations",
            "lat": 30.2631,
            "lng": -97.7394,
            "suggestedBy": "Suprabho",
            "tag": "Conference",
            "todos": [
              {
                "note": "Plan which breakout sessions to attend",
                "done": false
              }
            ],
            "desc": "Day 2 at the convention center. Catch sessions you missed yesterday and revisit the expo hall."
          },
          {
            "time": "1:00 PM",
            "emoji": "🎓",
            "name": "SXSW EDU — Afternoon Sessions",
            "tip": "Exchange contacts with people you met · Grab any last swag from the expo",
            "lat": 30.2631,
            "lng": -97.7394,
            "suggestedBy": "Suprabho",
            "tag": "Conference",
            "desc": "Final panels, networking, and closing remarks. Sessions wrap up at 3 PM."
          },
          {
            "time": "5:30 PM",
            "emoji": "🚀",
            "name": "Launch Spotlight — Antone's",
            "tip": "305 E 5th St · 10-min walk from the convention center · Wraps at 7 PM sharp",
            "lat": 30.2661,
            "lng": -97.7404,
            "suggestedBy": "Suprabho",
            "tag": "Event",
            "desc": "Launch Spotlight event at Antone's Nightclub on E 5th St. Runs 5:30–7:00 PM CT."
          },
          {
            "time": "8:00 PM",
            "emoji": "🎵",
            "name": "6th Street — Live Music",
            "tip": "🎸 Free entry to most bars · East 6th has the cooler, less touristy spots",
            "lat": 30.2672,
            "lng": -97.7396,
            "suggestedBy": "Suprabho",
            "tag": "Evening",
            "desc": "Dirty Sixth is Austin's legendary bar strip — live music pouring out of every door. Walk the strip, duck into whatever sounds good."
          }
        ],
        "stays": [
          {
            "name": "Hilton Garden Inn Austin Downtown",
            "lat": 30.2652,
            "lng": -97.7358
          }
        ]
      },
      "4": {
        "label": "Day 4 · SXSW EDU",
        "title": "SXSW EDU Day 3 & Lady Bird Lake",
        "subtitle": "SXSW EDU · Zilker Park · Lady Bird Lake · SoCo · West 6th",
        "color": "#bf5700",
        "center": [
          30.27,
          -97.748
        ],
        "zoom": 14,
        "stops": [
          {
            "time": "10:00 AM",
            "emoji": "🎓",
            "name": "SXSW EDU — Morning Sessions",
            "tip": "Last chance for expo hall and swag · Focus on must-see sessions",
            "lat": 30.2631,
            "lng": -97.7394,
            "suggestedBy": "Suprabho",
            "tag": "Conference",
            "desc": "Day 3 at the convention center. Final day of sessions — catch anything you missed and wrap up networking."
          },
          {
            "time": "1:00 PM",
            "emoji": "🎓",
            "name": "SXSW EDU — Afternoon Sessions",
            "tip": "Exchange contacts · Grab any last swag from the expo",
            "lat": 30.2631,
            "lng": -97.7394,
            "suggestedBy": "Suprabho",
            "tag": "Conference",
            "desc": "Final afternoon of panels and workshops. Sessions wrap up at 3 PM."
          },
          {
            "time": "3:30 PM",
            "emoji": "🌳",
            "name": "Zilker Park & Lady Bird Lake",
            "tip": "👟 Park at Zilker and walk north along the lake trail · Barton Springs is $5",
            "lat": 30.2669,
            "lng": -97.7729,
            "suggestedBy": "Suprabho",
            "tag": "Walk",
            "desc": "351-acre park right on Lady Bird Lake — Austin's backyard. Walk the Hike & Bike Trail along the water or relax on the great lawn."
          },
          {
            "time": "5:00 PM",
            "emoji": "🚶",
            "name": "South Congress Avenue (SoCo) — Optional",
            "tip": "📸 Mural wall at Jo's Coffee · Walk from Congress Ave Bridge south · Great people watching",
            "lat": 30.2496,
            "lng": -97.7494,
            "suggestedBy": "Suprabho",
            "tag": "Walk",
            "todos": [
              {
                "note": "Photo at \"I love you so much\" mural",
                "done": false
              },
              {
                "note": "Photo at \"Greetings from Austin\" mural",
                "done": false
              }
            ],
            "desc": "Austin's most iconic street — vintage shops, murals, boutiques. Don't miss the \"I love you so much\" mural on the side of Jo's Coffee and the \"Greetings from Austin\" postcard mural."
          },
          {
            "time": "6:00 PM",
            "emoji": "🍻",
            "name": "West 6th Street",
            "tip": "Between Lamar Blvd and West Ave · Rooftop bars are the move · Happy hour specials start at 5 PM",
            "lat": 30.271,
            "lng": -97.752,
            "suggestedBy": "Suprabho",
            "tag": "Evening",
            "desc": "Austin's upscale bar district — rooftop patios, craft cocktails, and a more chill vibe than Dirty Sixth. Try spots like Irene's, Handlebar, or The Dogwood for great outdoor decks."
          },
          {
            "time": "9:30 PM",
            "emoji": "🎶",
            "name": "The Continental Club — Live Music",
            "tip": "🎸 1315 S Congress Ave · No cover most nights · Shows start around 9:30",
            "lat": 30.2488,
            "lng": -97.7497,
            "suggestedBy": "Suprabho",
            "tag": "Evening",
            "desc": "South Congress institution since 1955. Rockabilly, country, blues — the real Austin music scene, not the tourist version. Pairs perfectly with the SoCo afternoon."
          }
        ],
        "stays": [
          {
            "name": "Hilton Garden Inn Austin Downtown",
            "lat": 30.2652,
            "lng": -97.7358
          }
        ]
      },
      "5": {
        "label": "Day 5 · Departure",
        "title": "Departure",
        "subtitle": "Farewell Brunch · Austin-Bergstrom",
        "color": "#8c5e3c",
        "center": [
          30.26,
          -97.74
        ],
        "zoom": 13,
        "stops": [
          {
            "time": "4:00 AM",
            "emoji": "✈️",
            "name": "Head to AUS",
            "tip": "Uber recommended · ~$15–25 · AUS is a small, easy airport",
            "lat": 30.1975,
            "lng": -97.6664,
            "suggestedBy": "Suprabho",
            "tag": "Depart",
            "todos": [
              {
                "note": "Book Uber to AUS",
                "done": false
              }
            ],
            "desc": "Allow ~30 min to Austin-Bergstrom. For a 6:00 AM flight, aim to be at the airport by 4:30 AM."
          }
        ],
        "stays": [
          {
            "name": "Hilton Garden Inn Austin Downtown",
            "lat": 30.2652,
            "lng": -97.7358
          }
        ],
        "airport": {
          "name": "Austin-Bergstrom International",
          "code": "AUS",
          "lat": 30.1975,
          "lng": -97.6664,
          "date": "Mar 12, 2026",
          "time": "6:00 AM",
          "flightNumber": "WN2091"
        }
      }
    }
  },
  {
    "meta": {
      "id": "new-york",
      "city": "New York",
      "subtitle": "4 Day Itinerary",
      "emoji": "🗽",
      "highlights": "NoHo · Greenwich Village · Brooklyn Bridge · Central Park",
      "startDate": "2026-03-12",
      "endDate": "2026-03-15",
      "color": "#c94f2c",
      "days": 4,
      "stops": 36
    },
    "days": {
      "1": {
        "label": "Day 1 · Arrival",
        "title": "Downtown Initiation",
        "subtitle": "Washington Square",
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
            "tag": "Arrive",
            "todos": [
              {
                "note": "Confirm hotel reservation",
                "done": true,
                "link": "https://nownownoho.com"
              },
              {
                "note": "Book Uber from LGA",
                "done": false
              }
            ],
            "desc": "338 Bowery, NoHo. Drop your bags, freshen up. You're 10 mins walk from everything."
          },
          {
            "time": "4:30 PM",
            "emoji": "⛲",
            "name": "Washington Square Fountain",
            "tip": "10-min walk from your hotel",
            "lat": 40.7309,
            "lng": -73.9973,
            "suggestedBy": "Srayana",
            "tag": "Park",
            "desc": "The iconic arch and fountain at the heart of NYU's campus. Golden hour hits the arch beautifully — worth lingering."
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
        "subtitle": "Ghostbusters Firehouse · Think Coffee · 9/11 Memorial · Flatiron Building · Tappo · Empire State Building · Madison Square Garden",
        "color": "#2c6bc9",
        "center": [
          40.706,
          -74.006
        ],
        "zoom": 12,
        "stops": [
          {
            "time": "8:00 AM",
            "emoji": "📺",
            "name": "Ghostbusters Firehouse — Hook & Ladder 8",
            "tip": "Quick photo op · Head back to NoHo after for the meeting · Still an active FDNY station",
            "lat": 40.719,
            "lng": -74.0066,
            "tag": "TV Spot",
            "desc": "The firehouse from *Ghostbusters*! 14 N Moore St in Tribeca. Still a working firehouse — the Ghostbusters logo mural is often on display inside."
          },
          {
            "time": "11:00 AM",
            "emoji": "💻",
            "name": "Think Coffee — Work Session",
            "tip": "🕐 11 AM – 1 PM · 3-min walk from Now Now NoHo · Grab lunch at one of the many spots on Bleecker after",
            "lat": 40.7271,
            "lng": -73.9974,
            "tag": "Work",
            "desc": "Popular NoHo café at 248 Mercer St. Spacious seating, reliable WiFi, great coffee — perfect for a meeting. Steps from your hotel."
          },
          {
            "time": "1:30 PM",
            "emoji": "🕊",
            "name": "9/11 Memorial & Museum",
            "tip": "🎟 Pre-book online · Closed Tuesdays · Short walk from Battery Park",
            "lat": 40.7116,
            "lng": -74.0133,
            "suggestedBy": "Suprabho, Ritwik",
            "tag": "Memorial",
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
            "desc": "Two massive reflecting pools where the towers stood. Walk through the memorial and take in the reflecting pools."
          },
          {
            "time": "6:30 PM",
            "emoji": "🏛",
            "name": "Flatiron Building & Madison Square Park",
            "tip": "Quick 10-min stop · Right next to Tappo · Great photo ops at sunset",
            "lat": 40.7411,
            "lng": -73.9897,
            "tag": "Icon",
            "desc": "The iconic triangular Flatiron Building at 175 5th Ave — one of NYC's most photographed landmarks. Stroll through Madison Square Park right next door before dinner."
          },
          {
            "time": "7:00 PM",
            "emoji": "🍕",
            "name": "Tappo — Thin Crust Pizza",
            "tip": "🕐 7 – 8 PM · 15-min walk from your hotel · Reservations recommended",
            "lat": 40.7398,
            "lng": -73.9884,
            "tag": "Food",
            "todos": [
              {
                "note": "Book Tappo reservation",
                "done": false,
                "link": "https://resy.com/cities/new-york-ny/venues/tappo"
              }
            ],
            "desc": "NYC Thin Crust Pizza at 32 E 21st St in the Flatiron District. Impossibly thin, crispy crust — a local favourite."
          },
          {
            "time": "8:30 PM",
            "emoji": "🏛",
            "name": "Empire State Building",
            "tip": "🎟 Book skip-the-line tickets · 10-min walk from Tappo · Night views are the best",
            "lat": 40.7484,
            "lng": -73.9857,
            "suggestedBy": "Ritwik",
            "tag": "Viewpoint",
            "desc": "Classic Art Deco skyscraper — 86th floor observatory for 360° views. Stunning at night when lit up. A short walk from Tappo."
          },
          {
            "time": "9:30 PM",
            "emoji": "🏟",
            "name": "Madison Square Garden",
            "tip": "5-min walk from Empire State Building · Check if there's an event on",
            "lat": 40.7505,
            "lng": -73.9934,
            "tag": "Landmark",
            "desc": "The world's most famous arena — home of the Knicks and Rangers. Even if there's no game, the exterior and surrounding Penn Station area buzz with energy at night."
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
        "title": "Brooklyn Morning → West Side Midtown → Uptown Museums",
        "subtitle": "Brooklyn Bridge · DUMBO · Gleasons Gym · Katz's Deli · High Line · The Edge · MoMA · Rockefeller · LEGO Store · Grand Central · MET · Guggenheim · Gossip Girl · Central Park · McGee's Pub (HIMYM) · 5th Ave · Times Square · Greenwich Village · Friends Apartment · Comedy Cellar",
        "color": "#2ca068",
        "center": [
          40.76,
          -73.982
        ],
        "zoom": 12,
        "stops": [
          {
            "time": "7:00 AM",
            "emoji": "🌉",
            "name": "Walk the Brooklyn Bridge",
            "tip": "📍 Subway from NoHo (Broadway-Lafayette → Chambers St) · Start from City Hall Park side",
            "lat": 40.7061,
            "lng": -73.9969,
            "suggestedBy": "Srayana",
            "tag": "Walk",
            "desc": "Early morning walk across the bridge — peaceful before the crowds. Gothic towers and steel cables are incredible in the morning light."
          },
          {
            "time": "7:45 AM",
            "emoji": "🌆",
            "name": "DUMBO Piers — Manhattan Skyline",
            "tip": "📸 Washington St for the iconic bridge shot",
            "lat": 40.703,
            "lng": -73.9956,
            "suggestedBy": "Suprabho, Srayana",
            "tag": "Views",
            "desc": "Best view of Manhattan anywhere — the skyline framed by bridge cables. Beautiful in the early morning light."
          },
          {
            "time": "8:15 AM",
            "emoji": "🥊",
            "name": "Gleasons Gym",
            "tip": "Opens early · 15-min walk from the bridge",
            "lat": 40.6945,
            "lng": -73.9787,
            "suggestedBy": "Ritwik",
            "tag": "Experience",
            "desc": "Legendary Brooklyn boxing gym — Muhammad Ali, Mike Tyson trained here. Quick visit while in DUMBO."
          },
          {
            "time": "9:00 AM",
            "emoji": "🥪",
            "name": "Katz's Delicatessen",
            "tip": "5-min walk from your hotel · Split a sandwich — they're massive · Cash or card",
            "lat": 40.7223,
            "lng": -73.9874,
            "suggestedBy": "Suprabho",
            "tag": "Food",
            "desc": "The most famous deli in New York — pastrami on rye, towering sandwiches, and a room that hasn't changed in decades. The \"I'll have what she's having\" spot from When Harry Met Sally."
          },
          {
            "time": "10:00 AM",
            "emoji": "🛤",
            "name": "The High Line",
            "tip": "Open until 8 PM · Great coffee carts along the way",
            "lat": 40.748,
            "lng": -74.0048,
            "suggestedBy": "Suprabho",
            "tag": "Walk",
            "desc": "Elevated rail converted to a linear park. Walk from Meatpacking north to Hudson Yards. ~1.5 miles."
          },
          {
            "time": "10:30 AM",
            "emoji": "☁️",
            "name": "The Edge, Hudson Yards",
            "tip": "🎟 Book ahead · Midday light is excellent",
            "lat": 40.7534,
            "lng": -74.0011,
            "suggestedBy": "Suprabho, Srayana",
            "tag": "Viewpoint",
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
            "time": "11:00 AM",
            "emoji": "🎨",
            "name": "Museum of Modern Art (MoMA)",
            "tip": "Free on Friday evenings · Right next to Rockefeller Center",
            "lat": 40.7614,
            "lng": -73.9776,
            "suggestedBy": "Ritwik",
            "tag": "Museum",
            "desc": "Starry Night, Warhols, Picasso. One of the world's greatest modern art collections."
          },
          {
            "time": "12:15 PM",
            "emoji": "🏙",
            "name": "Rockefeller Center & LEGO Store",
            "tip": "Great for souvenirs · All walkable from MoMA",
            "lat": 40.7587,
            "lng": -73.9787,
            "suggestedBy": "Ritwik, Suprabho",
            "tag": "Landmark",
            "desc": "Art Deco complex with Top of the Rock observation deck. The flagship LEGO Store at 30 Rockefeller Plaza — massive NYC-themed LEGO builds, Build-a-Minifigure, Pick-a-Brick wall, and Mosaic Maker."
          },
          {
            "time": "1:15 PM",
            "emoji": "🚂",
            "name": "Grand Central Terminal",
            "tip": "📍 5-min walk from Rockefeller Center · Free to enter · Look up at the celestial ceiling mural",
            "lat": 40.7527,
            "lng": -73.9772,
            "suggestedBy": "Suprabho",
            "tag": "Landmark",
            "desc": "Beaux-Arts masterpiece — the main concourse ceiling is one of NYC's great interiors. The Whispering Gallery and the Oyster Bar downstairs are worth a detour."
          },
          {
            "time": "2:30 PM",
            "emoji": "🎨",
            "name": "The Metropolitan Museum of Art",
            "tip": "🗺 Grab a floor map · Closed Wednesdays",
            "lat": 40.7794,
            "lng": -73.9632,
            "suggestedBy": "Suprabho, Srayana",
            "tag": "Museum",
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
            "time": "4:30 PM",
            "emoji": "🖼",
            "name": "Guggenheim Museum",
            "tip": "Walk the spiral from top down · 5-min walk from MET",
            "lat": 40.783,
            "lng": -73.959,
            "suggestedBy": "Ritwik",
            "tag": "Museum",
            "desc": "Frank Lloyd Wright's spiral masterpiece. Right next to the MET on the Upper East Side."
          },
          {
            "time": "5:00 PM",
            "emoji": "📺",
            "name": "Gossip Girl — Blair Waldorf's Building",
            "tip": "Just the exterior · Steps from the MET entrance · Photo op only",
            "lat": 40.7838,
            "lng": -73.9613,
            "tag": "TV Spot",
            "desc": "The iconic Upper East Side building used as Blair Waldorf's residence in *Gossip Girl*. 1136 5th Ave, right by the MET. XOXO."
          },
          {
            "time": "5:15 PM",
            "emoji": "☕",
            "name": "Coffee — Upper East Side",
            "tip": "Lots of great spots nearby",
            "lat": 40.7771,
            "lng": -73.959,
            "suggestedBy": "Suprabho",
            "tag": "Break",
            "desc": "Rest your feet after the museums. Great cafés on Madison Ave around 82nd–86th before heading downtown."
          },
          {
            "time": "5:45 PM",
            "emoji": "🌿",
            "name": "Central Park",
            "tip": "👟 Walk south through the park toward Midtown",
            "lat": 40.7826,
            "lng": -73.9656,
            "suggestedBy": "Srayana, Ritwik",
            "tag": "Park",
            "desc": "843 acres of green in the most vertical city. Bethesda Terrace, the Reservoir, Strawberry Fields."
          },
          {
            "time": "6:30 PM",
            "emoji": "📺",
            "name": "How I Met Your Mother — McGee's Pub",
            "tip": "Quick drink or photo · Right in Midtown",
            "lat": 40.7642,
            "lng": -73.9814,
            "tag": "TV Spot",
            "desc": "The real-life bar that inspired MacLaren's Pub. 240 W 55th St in Midtown. The interior is decorated with HIMYM memorabilia — booth seating, show posters, and themed cocktails."
          },
          {
            "time": "7:00 PM",
            "emoji": "🛍",
            "name": "5th Avenue Shops",
            "tip": "Window shopping is free · Beautiful at dusk",
            "lat": 40.7564,
            "lng": -73.9782,
            "suggestedBy": "Ritwik",
            "tag": "Shopping",
            "desc": "Iconic shopping strip — Saks, Tiffany's, Bergdorf Goodman, Apple Store. Walk south through Midtown."
          },
          {
            "time": "8:00 PM",
            "emoji": "🌃",
            "name": "Times Square at Night",
            "tip": "🌙 Night only — don't bother during the day · Don't linger too long",
            "lat": 40.758,
            "lng": -73.9855,
            "suggestedBy": "Ritwik",
            "tag": "Evening",
            "desc": "NYC's most iconic intersection — bright lights, billboards, pure chaos. Can be overwhelming, but at night the energy is genuinely something. Quick walk-through is enough."
          },
          {
            "time": "9:00 PM",
            "emoji": "🚶",
            "name": "Greenwich Village Walk",
            "tip": "Subway from Times Square to W 4th St · No agenda needed, just wander",
            "lat": 40.7336,
            "lng": -74.0027,
            "suggestedBy": "Suprabho, Srayana",
            "tag": "Neighbourhood",
            "desc": "NYC's most human-scaled neighbourhood — brownstones, indie bookshops, jazz bars. Just walk and soak it in."
          },
          {
            "time": "9:30 PM",
            "emoji": "📺",
            "name": "Friends Apartment — 90 Bedford St",
            "tip": "Just the exterior — it's a private residence · 5-min walk from Greenwich Village",
            "lat": 40.7324,
            "lng": -74.0036,
            "tag": "TV Spot",
            "desc": "The exterior of Monica and Rachel's apartment from *Friends*. The iconic building at 90 Bedford St, corner of Grove St in the West Village. Snap a photo — everyone does."
          },
          {
            "time": "10:00 PM",
            "emoji": "🎤",
            "name": "Comedy Cellar (Optional)",
            "tip": "🎟 Reserve online in advance · 117 MacDougal St · Drinks required (2-item min) · ~90 min show · Check late show availability",
            "lat": 40.73,
            "lng": -74.0005,
            "suggestedBy": "Suprabho",
            "tag": "Entertainment",
            "todos": [
              {
                "note": "Book Comedy Cellar tickets",
                "done": false,
                "link": "https://www.comedycellar.com"
              }
            ],
            "desc": "One of NYC's most legendary comedy clubs, right in the Village. Saturday nights are prime — regulars and surprise drop-ins from big names. Book ahead, it fills fast. ## Bonus Suggestions"
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
        "subtitle": "Brunch · Magnolia Bakery (SATC) · Mrs. Maisel's Gaslight · West Village · Joe's Pizza · Tribeca · Newark",
        "color": "#666",
        "center": [
          40.724,
          -73.999
        ],
        "zoom": 13,
        "stops": [
          {
            "time": "9:00 AM",
            "emoji": "☕",
            "name": "Slow Brunch — NoHo / SoHo",
            "tip": "No rush · Balthazar (80 Spring St) is a 10-min walk · Great people-watching on a Sunday morning",
            "lat": 40.7228,
            "lng": -73.9985,
            "suggestedBy": "Suprabho",
            "desc": "Take it easy on the last morning. The neighbourhood has great brunch spots — Balthazar on Spring St is a classic, or just grab a coffee and pastry from a local café."
          },
          {
            "time": "10:00 AM",
            "emoji": "📺",
            "name": "Magnolia Bakery — Sex and the City",
            "tip": "Try the banana pudding, not just cupcakes · Right in the West Village wander route",
            "lat": 40.7359,
            "lng": -74.0044,
            "tag": "TV Spot",
            "desc": "The bakery made famous by Carrie and Miranda's cupcake scene in *Sex and the City*. 401 Bleecker St in the West Village. The banana pudding is actually the must-try."
          },
          {
            "time": "10:15 AM",
            "emoji": "📺",
            "name": "The Marvelous Mrs. Maisel — Gaslight Cafe",
            "tip": "The Gaslight no longer exists, but the block is a comedy landmark · Grab a coffee at Café Reggio next door",
            "lat": 40.7303,
            "lng": -74.0003,
            "tag": "TV Spot",
            "desc": "The legendary Greenwich Village comedy club where Midge Maisel launched her stand-up career. The original Gaslight at 116 MacDougal St is gone, but the block still radiates that Village comedy-club energy — Café Wha? and Comedy Cellar are steps away."
          },
          {
            "time": "10:30 AM",
            "emoji": "🚶",
            "name": "West Village Wander",
            "tip": "Wander Hudson St and Jane St · No destination needed · Pick up any last-minute souvenirs",
            "lat": 40.7337,
            "lng": -74.007,
            "suggestedBy": "Suprabho",
            "desc": "The quietest, most charming corner of downtown Manhattan — tree-lined streets, old townhouses, great independent shops. Perfect for a last slow walk before flying out."
          },
          {
            "time": "12:30 PM",
            "emoji": "🍕",
            "name": "Joe's Pizza, Carmine St",
            "tip": "💵 Cash only · ATM right outside · 5-min walk from West Village",
            "lat": 40.7307,
            "lng": -74.0022,
            "suggestedBy": "Srayana",
            "tag": "Food",
            "todos": [
              {
                "note": "Withdraw cash from ATM before going",
                "done": false
              }
            ],
            "desc": "The NYC slice. Thin, foldable, perfectly charred. Cash only. Alternates: Prince St, Bleecker St Pizza."
          },
          {
            "time": "1:30 PM",
            "emoji": "🌙",
            "name": "Tribeca Walk",
            "tip": "Walk south from the Village · 10-min from NoHo",
            "lat": 40.7163,
            "lng": -74.0086,
            "suggestedBy": "Suprabho, Srayana",
            "tag": "Neighbourhood",
            "desc": "Cobblestone streets, cast-iron warehouses, gallery fronts. Artsy, old-money downtown energy — a completely different vibe from Midtown. Best experienced on foot during golden afternoon light."
          },
          {
            "time": "7:00 PM",
            "emoji": "🚕",
            "name": "Head to Newark",
            "tip": "Uber recommended · ~$50–70 · Or NJ Transit from Penn Station",
            "lat": 40.6895,
            "lng": -74.1745,
            "desc": "Allow ~1–1.5 hours to Newark Liberty Airport from NoHo. For a 9:50 PM international flight, aim to be at the airport by 7:30–8:00 PM."
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
          "name": "Newark Liberty Airport",
          "code": "EWR",
          "lat": 40.6895,
          "lng": -74.1745,
          "date": "Mar 15, 2026",
          "time": "9:50 PM",
          "flightNumber": "LH 413"
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
