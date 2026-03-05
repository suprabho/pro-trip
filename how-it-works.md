# How It Works

protrip is a markdown-driven travel itinerary app. Trip data lives in plain markdown files, and the app is generated from them at build time.

## Architecture

```
content/trips/*.md  -->  scripts/generate-trips.ts  -->  src/lib/generated-trips.ts  -->  Next.js app
    (source of truth)       (build-time parser)            (auto-generated, gitignored)
```

## Adding a New Trip

1. Create a new `.md` file in `content/trips/` (e.g. `content/trips/tokyo.md`)
2. Run `npm run generate` (or just `npm run dev` / `npm run build` — generation runs automatically)
3. The trip appears in the app

## Markdown Format

Each trip file has two parts: **frontmatter** (trip metadata) and **body** (days and stops).

### Frontmatter

```yaml
---
id: new-york          # URL slug (/trips/new-york)
city: New York        # Display name
subtitle: 3 Day Itinerary
emoji: "🗽"           # Shown in trip listings
highlights: NoHo · Greenwich Village · Brooklyn Bridge · Central Park
---
```

### Days

Days are `##` headers with HTML comment metadata:

```markdown
## Day 1: Downtown Initiation
<!-- label: Day 1 · Arrival -->
<!-- subtitle: NoHo · Greenwich Village · Tribeca -->
<!-- color: #c94f2c -->
<!-- center: 40.724, -73.999 -->
<!-- zoom: 14 -->
```

| Comment    | Purpose                                    |
|------------|--------------------------------------------|
| `label`    | Short label shown in sidebar header        |
| `subtitle` | Neighborhoods/areas listed under day title |
| `color`    | Hex color for markers, lines, and UI       |
| `center`   | Map center coordinates (lat, lng)          |
| `zoom`     | Default map zoom level                     |

### Stops

Stops are `###` headers with a `TIME | EMOJI | NAME` format:

```markdown
### 4:00 PM | 🏨 | Now Now NoHo — Check In
338 Bowery, NoHo. Drop your bags, freshen up.
> Tip: Uber from LGA ~40 min
<!-- location: 40.7261, -73.9923 -->
```

| Part                     | Purpose                           |
|--------------------------|-----------------------------------|
| `### TIME \| EMOJI \| NAME` | Stop header (time, icon, name) |
| Plain text after header  | Description (can be multi-line)   |
| `> Tip: ...`             | Optional tip shown as a badge     |
| `<!-- location: lat, lng -->` | Map pin coordinates          |

## Build Pipeline

| Script             | What it does                                             |
|--------------------|----------------------------------------------------------|
| `npm run generate` | Parses `content/trips/*.md` into `src/lib/generated-trips.ts` |
| `npm run dev`      | Runs `generate` first (via `predev`), then starts dev server  |
| `npm run build`    | Runs `generate` first (via `prebuild`), then builds for production |

## Generated Output

`src/lib/generated-trips.ts` is auto-generated and gitignored. It exports:

- `TRIPS` — array of all trip data (metadata + days + stops)
- `getTripById(id)` — find a single trip by its URL slug
- `getAllTrips()` — get metadata for all trips (used in listings)
- Type interfaces: `Stop`, `DayData`, `TripMeta`, `TripData`

## Project Structure

```
nyc-itinerary/
  content/
    trips/
      new-york.md          # Trip source files (add more here)
  scripts/
    generate-trips.ts      # Markdown parser / code generator
  src/
    app/
      page.tsx             # Dashboard (reads from generated data)
      trips/
        page.tsx           # Trip listing (reads from generated data)
        new-york/
          page.tsx         # Trip detail view
    components/
      top-bar.tsx          # Day tab navigation
      sidebar.tsx          # Stop list sidebar
      itinerary-map.tsx    # Leaflet map with markers
    lib/
      generated-trips.ts   # Auto-generated (do not edit)
      utils.ts             # Tailwind merge utility
```
