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
      "highlights": "SXSW EDU · Rainey St · South Congress · Lady Bird Lake · Zilker Park",
      "startDate": "2026-03-08",
      "endDate": "2026-03-12",
      "color": "#e85d26",
      "days": 5,
      "stops": 28
    },
    "days": {
      "1": {
        "label": "Day 1 · Arrival",
        "title": "Arrival & Downtown",
        "subtitle": "Austin-Bergstrom · Rainey St · Congress Ave Bridge",
        "color": "#e85d26",
        "center": [
          30.264,
          -97.74
        ],
        "zoom": 14,
        "stops": [
          {
            "time": "12:00 PM",
            "emoji": "🏨",
            "name": "Hilton Garden Inn Austin Downtown — Check In",
            "tip": "Uber from AUS ~15 min · Hotel is steps from the convention center",
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
                "done": false
              }
            ],
            "desc": "500 N Interstate 35, right near the convention center. Drop bags and head straight to SXSW EDU."
          },
          {
            "time": "5:00 PM",
            "emoji": "🍻",
            "name": "Rainey Street Historic District",
            "tip": "5-min walk from the convention center · Bangers is the go-to · Outdoor seating everywhere",
            "lat": 30.2567,
            "lng": -97.739,
            "suggestedBy": "Suprabho",
            "tag": "Food",
            "desc": "A block of old bungalows converted into bars and food trucks. The best spot in Austin for a casual post-flight drink. Try Bangers for sausages and craft beer."
          },
          {
            "time": "7:00 PM",
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
            "time": "8:00 PM",
            "emoji": "🌮",
            "name": "Torchy's Tacos — South Congress",
            "tip": "1311 S 1st St location or the S Congress one · Expect a short wait",
            "lat": 30.2508,
            "lng": -97.753,
            "suggestedBy": "Suprabho",
            "tag": "Food",
            "desc": "Austin's beloved taco chain. Try the Trailer Park (trashy style) and the Democrat. Loud, fun, and delicious."
          },
          {
            "time": "9:30 PM",
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
        "subtitle": "Convention Center · Keynotes · Panels · Expo Hall",
        "color": "#2c7fb8",
        "center": [
          30.263,
          -97.739
        ],
        "zoom": 14,
        "stops": [
          {
            "time": "8:30 AM",
            "emoji": "☕",
            "name": "Fleet Coffee — Morning Fuel",
            "tip": "5-min walk from Fairmont · Opens early · Quick in-and-out",
            "lat": 30.2656,
            "lng": -97.7335,
            "suggestedBy": "Suprabho",
            "tag": "Coffee",
            "desc": "Small specialty coffee shop on E 5th St. Great pour-overs and pastries before a long conference day."
          },
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
            "time": "12:00 PM",
            "emoji": "🍔",
            "name": "SXSW EDU Lunch & Networking",
            "tip": "Food trucks cluster on Trinity St · Bring business cards",
            "lat": 30.2625,
            "lng": -97.738,
            "suggestedBy": "Suprabho",
            "tag": "Food",
            "desc": "Hit the food trucks around the convention center or walk to nearby spots on E Cesar Chavez. Great networking opportunity over lunch."
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
            "emoji": "🚶",
            "name": "South Congress Avenue (SoCo)",
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
            "time": "7:30 PM",
            "emoji": "🍖",
            "name": "la Barbecue — Dinner",
            "tip": "🔥 la Barbecue is the practical dinner choice · Franklin requires a morning commitment",
            "lat": 30.2594,
            "lng": -97.7311,
            "suggestedBy": "Suprabho",
            "tag": "Food",
            "todos": [
              {
                "note": "Check la Barbecue wait times",
                "done": false
              }
            ],
            "desc": "On E Cesar Chavez, nearly as good as Franklin with a shorter wait. Brisket, ribs, sausage — the real Texas BBQ experience."
          },
          {
            "time": "9:00 PM",
            "emoji": "🎶",
            "name": "The Continental Club — Live Music",
            "tip": "🎸 1315 S Congress Ave · No cover most nights · Shows start around 9:30",
            "lat": 30.2488,
            "lng": -97.7497,
            "suggestedBy": "Suprabho",
            "tag": "Evening",
            "desc": "South Congress institution since 1955. Rockabilly, country, blues — the real Austin music scene, not the tourist version."
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
        "title": "SXSW EDU Day 2 & Lady Bird Lake",
        "subtitle": "SXSW EDU · Lady Bird Lake · East Austin",
        "color": "#2d8a6e",
        "center": [
          30.26,
          -97.74
        ],
        "zoom": 14,
        "stops": [
          {
            "time": "8:30 AM",
            "emoji": "☕",
            "name": "Jo's Coffee — South Congress",
            "tip": "Outdoor patio is the move · 1300 S Congress Ave",
            "lat": 30.2494,
            "lng": -97.7497,
            "suggestedBy": "Suprabho",
            "tag": "Coffee",
            "desc": "The original Jo's on South Congress. Good coffee, great vibes, and the famous \"I love you so much\" mural if you missed it yesterday."
          },
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
            "time": "12:00 PM",
            "emoji": "🌮",
            "name": "Veracruz All Natural — Lunch",
            "tip": "Cash and card · Order migas and the green salsa",
            "lat": 30.2594,
            "lng": -97.7258,
            "suggestedBy": "Suprabho",
            "tag": "Food",
            "desc": "Best breakfast tacos in Austin. The migas taco is legendary. The location on E Cesar Chavez is closest to the convention center."
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
            "time": "3:30 PM",
            "emoji": "🌳",
            "name": "Zilker Park & Lady Bird Lake",
            "tip": "👟 Park at Zilker and walk north along the lake trail · Barton Springs is $5 · Kayak rentals at the boathouse",
            "lat": 30.2669,
            "lng": -97.7729,
            "suggestedBy": "Suprabho",
            "tag": "Walk",
            "desc": "351-acre park right on Lady Bird Lake — Austin's backyard. Walk the Hike & Bike Trail along the water, relax on the great lawn, or rent a kayak. Barton Springs Pool is here too if it's warm enough for a dip."
          },
          {
            "time": "7:00 PM",
            "emoji": "🍕",
            "name": "East Austin Dinner — Odd Duck",
            "tip": "Reservations recommended · Share multiple plates · Great craft cocktails",
            "lat": 30.2528,
            "lng": -97.7637,
            "suggestedBy": "Suprabho",
            "tag": "Food",
            "desc": "Farm-to-table small plates on South Lamar. Creative Texas cuisine — one of the best restaurants in Austin."
          },
          {
            "time": "9:00 PM",
            "emoji": "🎵",
            "name": "East 6th Street — Bar Hop",
            "tip": "East 6th between I-35 and Chicon St is the sweet spot",
            "lat": 30.2665,
            "lng": -97.731,
            "suggestedBy": "Suprabho",
            "tag": "Evening",
            "desc": "The cooler, less touristy side of 6th Street. Craft cocktail bars, dive bars, and live music venues. Try Whisler's or Hotel Vegas."
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
        "title": "SXSW EDU Day 3, Capitol & West 6th",
        "subtitle": "SXSW EDU · Texas State Capitol · West 6th Street · Farewell Dinner",
        "color": "#bf5700",
        "center": [
          30.27,
          -97.748
        ],
        "zoom": 14,
        "stops": [
          {
            "time": "9:00 AM",
            "emoji": "☕",
            "name": "Houndstooth Coffee",
            "tip": "401 Congress Ave · Excellent cold brew",
            "lat": 30.2688,
            "lng": -97.7432,
            "suggestedBy": "Suprabho",
            "tag": "Coffee",
            "desc": "Specialty coffee on North Congress. A favorite of Austin locals with a great minimalist vibe."
          },
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
            "time": "12:00 PM",
            "emoji": "🍔",
            "name": "Lunch Break",
            "tip": "Food trucks on Trinity St · Hopdoddy is a 10-min walk south",
            "lat": 30.2625,
            "lng": -97.738,
            "suggestedBy": "Suprabho",
            "tag": "Food",
            "desc": "Grab a quick bite from the food trucks near the convention center or walk to Hopdoddy on South Congress for craft burgers."
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
            "time": "5:00 PM",
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
            "time": "7:00 PM",
            "emoji": "🥩",
            "name": "Uchi — Farewell Dinner",
            "tip": "Reservations essential · Omakase or the tasting menu recommended · 801 S Lamar Blvd",
            "lat": 30.2547,
            "lng": -97.764,
            "suggestedBy": "Suprabho",
            "tag": "Food",
            "desc": "James Beard Award-winning Japanese farmhouse dining. One of Austin's finest restaurants — a perfect farewell dinner."
          },
          {
            "time": "9:30 PM",
            "emoji": "🎵",
            "name": "Elephant Room — Jazz Night",
            "tip": "🎷 315 Congress Ave · Small cover charge · Shows nightly",
            "lat": 30.266,
            "lng": -97.7432,
            "suggestedBy": "Suprabho",
            "tag": "Evening",
            "desc": "Basement jazz club on Congress Ave. Intimate, low-key, and the perfect way to close out an Austin trip."
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
      "subtitle": "3 Day Itinerary",
      "emoji": "🗽",
      "highlights": "NoHo · Greenwich Village · Brooklyn Bridge · Central Park",
      "startDate": "2026-03-12",
      "endDate": "2026-03-15",
      "color": "#c94f2c",
      "days": 4,
      "stops": 41
    },
    "days": {
      "1": {
        "label": "Day 1 · Arrival",
        "title": "Downtown Initiation",
        "subtitle": "Washington Square · West Village · Greenwich Village · Friends Apartment · Carrie's Stoop · Madison Square · Union Square",
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
          },
          {
            "time": "5:30 PM",
            "emoji": "🍕",
            "name": "Joe's Pizza, Carmine St",
            "tip": "💵 Cash only · ATM right outside · 5-min walk from Washington Square",
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
            "time": "6:30 PM",
            "emoji": "🚶",
            "name": "Greenwich Village",
            "tip": "No agenda needed. Just wander.",
            "lat": 40.7336,
            "lng": -74.0027,
            "suggestedBy": "Suprabho, Srayana",
            "tag": "Neighbourhood",
            "desc": "NYC's most human-scaled neighbourhood — brownstones, indie bookshops, jazz bars. Just walk."
          },
          {
            "time": "7:00 PM",
            "emoji": "📺",
            "name": "Friends Apartment — 90 Bedford St",
            "tip": "Just the exterior — it's a private residence · 5-min walk from Greenwich Village",
            "lat": 40.7324,
            "lng": -74.0036,
            "tag": "TV Spot",
            "desc": "The exterior of Monica and Rachel's apartment from *Friends*. The iconic building at 90 Bedford St, corner of Grove St in the West Village. Snap a photo — everyone does."
          },
          {
            "time": "7:15 PM",
            "emoji": "📺",
            "name": "Carrie Bradshaw's Stoop — Sex and the City",
            "tip": "Quick photo stop · It's a private home, be respectful · 3-min walk from the Friends building",
            "lat": 40.735,
            "lng": -74.0029,
            "tag": "TV Spot",
            "desc": "The brownstone stoop where Carrie sat in the opening credits. 66 Perry St in the West Village — instantly recognizable."
          },
          {
            "time": "7:30 PM",
            "emoji": "🌿",
            "name": "Madison Square Park",
            "tip": "📸 Best Flatiron angle from the park's south end · 15-min walk north from Greenwich Village",
            "lat": 40.7425,
            "lng": -73.9878,
            "suggestedBy": "Suprabho",
            "tag": "Park",
            "desc": "Leafy park at the base of the Flatiron Building — one of NYC's most photogenic spots at dusk. The original Shake Shack is right here if you need dessert."
          },
          {
            "time": "8:00 PM",
            "emoji": "🧱",
            "name": "The LEGO Store — Flatiron District",
            "tip": "🕐 Check hours before going · Less crowded than the 5th Ave Midtown store",
            "lat": 40.7419,
            "lng": -73.9898,
            "suggestedBy": "Suprabho",
            "tag": "Shopping",
            "desc": "Right at 200 5th Ave, steps from the Flatiron. One of the best LEGO stores in NYC — less chaotic than the Midtown one. Build-a-Minifigure, Pick-a-Brick wall, and a Mosaic Maker that turns your photo into a LEGO portrait."
          },
          {
            "time": "8:30 PM",
            "emoji": "🛍",
            "name": "Union Square",
            "tip": "10-min walk south from Madison Square Park",
            "lat": 40.7359,
            "lng": -73.9911,
            "suggestedBy": "Ritwik",
            "tag": "Evening",
            "desc": "Buzzing plaza surrounded by great restaurants, bookshops (Strand is nearby), and night energy. The Greenmarket runs here on select days."
          },
          {
            "time": "9:30 PM",
            "emoji": "🌙",
            "name": "Tribeca at Night",
            "tip": "Walk south from your hotel · 10-min from NoHo",
            "lat": 40.7163,
            "lng": -74.0086,
            "suggestedBy": "Suprabho, Srayana",
            "tag": "Evening",
            "desc": "Cobblestone streets, cast-iron warehouses, gallery fronts. Artsy, old-money downtown energy — a completely different vibe from Midtown. Best experienced on foot."
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
        "subtitle": "Ghostbusters Firehouse · Statue of Liberty · 9/11 Memorial · Law & Order Courthouse · Brooklyn Bridge · DUMBO",
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
            "tip": "Quick photo op · On the way to Battery Park · Still an active FDNY station",
            "lat": 40.719,
            "lng": -74.0066,
            "tag": "TV Spot",
            "desc": "The firehouse from *Ghostbusters*! 14 N Moore St in Tribeca. Still a working firehouse — the Ghostbusters logo mural is often on display inside."
          },
          {
            "time": "8:30 AM",
            "emoji": "🗽",
            "name": "Statue of Liberty Ferry",
            "tip": "🎟 Book ferry + pedestal tickets in advance — sell out fast",
            "lat": 40.7014,
            "lng": -74.0154,
            "suggestedBy": "Suprabho, Ritwik",
            "tag": "Icon",
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
            "desc": "Two massive reflecting pools where the towers stood. Book tickets in advance. ~2 hours inside."
          },
          {
            "time": "2:30 PM",
            "emoji": "🌐",
            "name": "One World Observatory *Optional*",
            "tip": "⚡ Low priority · Save time and money for The Edge instead · Only do this if you want the 9/11 connection",
            "lat": 40.7127,
            "lng": -74.0134,
            "suggestedBy": "Ritwik",
            "tag": "Viewpoint",
            "desc": "102nd floor of One World Trade Center. Panoramic views of NYC. Skip this if you're doing The Edge on Day 3 — no need to do both."
          },
          {
            "time": "3:30 PM",
            "emoji": "📺",
            "name": "Law & Order Courthouse — NY Supreme Court",
            "tip": "Just the exterior · 5-min walk from the 9/11 Memorial · On the way to Brooklyn Bridge",
            "lat": 40.7143,
            "lng": -74.0018,
            "tag": "TV Spot",
            "desc": "The most filmed courthouse in television history — the exterior steps of 60 Centre St have appeared in every *Law & Order* series. \"In the criminal justice system...\""
          },
          {
            "time": "4:00 PM",
            "emoji": "🌉",
            "name": "Walk the Brooklyn Bridge",
            "tip": "📍 Start from City Hall Park side · 20-min walk from One World",
            "lat": 40.7061,
            "lng": -73.9969,
            "suggestedBy": "Srayana",
            "tag": "Walk",
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
            "tag": "Views",
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
            "tag": "Experience",
            "desc": "Legendary Brooklyn boxing gym — Muhammad Ali, Mike Tyson trained here. Quick visit while in DUMBO."
          },
          {
            "time": "7:00 PM",
            "emoji": "🌃",
            "name": "Back to Manhattan — Evening in NoHo",
            "tip": "Walk back over the bridge at dusk for the reverse skyline view",
            "lat": 40.7261,
            "lng": -73.9923,
            "tag": "Evening",
            "desc": "Head back over the bridge or grab the A/C/F subway. Easy evening near the hotel — explore a bar or jazz spot in the Village."
          },
          {
            "time": "7:30 PM",
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
            "time": "9:30 PM",
            "emoji": "🎤",
            "name": "Comedy Cellar — Friday Night",
            "tip": "🎟 Reserve online in advance · 117 MacDougal St · Drinks required (2-item min) · ~90 min show",
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
            "desc": "One of NYC's most legendary comedy clubs, right in the Village. Friday nights are prime — regulars and surprise drop-ins from big names. Book ahead, it fills fast."
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
        "subtitle": "High Line · The Edge · McGee's Pub (HIMYM) · Grand Central · Central Park · MET · Gossip Girl · Guggenheim · Times Square",
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
            "tag": "Walk",
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
            "time": "12:15 PM",
            "emoji": "📺",
            "name": "How I Met Your Mother — McGee's Pub",
            "tip": "Quick drink or photo · 10-min walk to the Hamilton theatre · Great pre-show spot",
            "lat": 40.7642,
            "lng": -73.9814,
            "tag": "TV Spot",
            "desc": "The real-life bar that inspired MacLaren's Pub. 240 W 55th St in Midtown. The interior is decorated with HIMYM memorabilia — booth seating, show posters, and themed cocktails."
          },
          {
            "time": "1:00 PM",
            "emoji": "🎭",
            "name": "Hamilton — Broadway Matinée",
            "tip": "🎟 Book tickets in advance — sells out fast · 226 W 46th St · Arrive 30 min early",
            "lat": 40.759,
            "lng": -73.9871,
            "suggestedBy": "Suprabho",
            "tag": "Entertainment",
            "todos": [
              {
                "note": "Book Hamilton tickets",
                "done": false,
                "link": "https://hamiltonmusical.com/new-york/"
              }
            ],
            "desc": "The show. Richard Rodgers Theatre on 46th St. ~2h45m including intermission, ends around 3:45 PM."
          },
          {
            "time": "4:00 PM",
            "emoji": "🛍",
            "name": "5th Avenue Shops",
            "tip": "Window shopping is free · 2-min walk from the theatre",
            "lat": 40.7564,
            "lng": -73.9782,
            "suggestedBy": "Ritwik",
            "tag": "Shopping",
            "desc": "Iconic shopping strip — Saks, Tiffany's, Bergdorf Goodman, Apple Store. Walk north toward midtown."
          },
          {
            "time": "4:30 PM",
            "emoji": "🏙",
            "name": "Rockefeller Center",
            "tip": "Combine with 5th Ave — all walkable",
            "lat": 40.7587,
            "lng": -73.9787,
            "suggestedBy": "Ritwik",
            "tag": "Landmark",
            "desc": "Art Deco complex with Top of the Rock observation deck. Ice skating rink in winter, NBC Studios."
          },
          {
            "time": "5:00 PM",
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
            "time": "5:30 PM",
            "emoji": "🌿",
            "name": "Central Park",
            "tip": "👟 Enter at 59th St, walk north — naturally routes you toward the museums",
            "lat": 40.7826,
            "lng": -73.9656,
            "suggestedBy": "Srayana, Ritwik",
            "tag": "Park",
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
            "time": "6:00 PM",
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
            "time": "6:30 PM",
            "emoji": "📺",
            "name": "Gossip Girl — Blair Waldorf's Building",
            "tip": "Just the exterior · Steps from the MET entrance · Photo op only",
            "lat": 40.7838,
            "lng": -73.9613,
            "tag": "TV Spot",
            "desc": "The iconic Upper East Side building used as Blair Waldorf's residence in *Gossip Girl*. 1136 5th Ave, right by the MET. XOXO."
          },
          {
            "time": "7:00 PM",
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
            "time": "7:30 PM",
            "emoji": "🏛",
            "name": "Empire State Building",
            "tip": "🎟 Book skip-the-line tickets · 15-min subway ride from the Guggenheim",
            "lat": 40.7484,
            "lng": -73.9857,
            "suggestedBy": "Ritwik",
            "tag": "Viewpoint",
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
            "tag": "Museum",
            "desc": "Starry Night, Warhols, Picasso. One of the world's greatest modern art collections."
          },
          {
            "time": "9:30 PM",
            "emoji": "🌃",
            "name": "Times Square at Night",
            "tip": "🌙 Night only — don't bother during the day · 5-min walk from MoMA · Don't linger too long",
            "lat": 40.758,
            "lng": -73.9855,
            "suggestedBy": "Ritwik",
            "tag": "Evening",
            "desc": "NYC's most iconic intersection — bright lights, billboards, pure chaos. Can be overwhelming, but at night the energy is genuinely something. Quick walk-through is enough. ## Bonus Suggestions"
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
        "subtitle": "Brunch · Magnolia Bakery (SATC) · Mrs. Maisel's Gaslight · West Village · JFK",
        "color": "#666",
        "center": [
          40.6449,
          -73.7807
        ],
        "zoom": 12,
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
            "emoji": "🚕",
            "name": "Head to JFK",
            "tip": "Uber recommended · ~$45–60 · Or AirTrain from Jamaica Station",
            "lat": 40.6449,
            "lng": -73.7807,
            "desc": "Allow ~1 hour to JFK from NoHo. For a 3:45 PM international flight, aim to be at the airport by 1:30–1:45 PM."
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
