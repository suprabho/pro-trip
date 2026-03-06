# Pro-Trip: Claude Code Instructions

## Project Overview

Markdown-driven travel itinerary app. Trip data lives in `content/trips/*.md` and gets compiled to TypeScript via a generate script that powers the Next.js UI.

## Data Flow

```
content/trips/*.md → npm run generate → src/lib/generated-trips.ts → UI
```

**Never edit `src/lib/generated-trips.ts` by hand** — it is auto-generated.

## Quick Trip Update Workflow

1. **Edit** the markdown file in `content/trips/` (e.g. `content/trips/new-york.md`)
2. **Run** `npm run generate` to regenerate the TypeScript data
3. **Commit and push** the changes (both the `.md` file and `src/lib/generated-trips.ts`)

## Markdown Format Reference

### Frontmatter

```yaml
---
id: city-slug
city: City Name
subtitle: N Day Itinerary
emoji: "🏙️"
highlights: Area 1 · Area 2 · Landmark
---
```

### Day Header

```markdown
## Day 1: Day Title
<!-- label: Day 1 · Theme -->
<!-- subtitle: Stop1 · Stop2 · Stop3 -->
<!-- color: #c94f2c -->
<!-- center: 40.724, -73.999 -->
<!-- zoom: 14 -->
<!-- stay: Hotel Name | lat, lng -->
<!-- airport: Airport Name | CODE | lat, lng | Date | Time | FlightNo -->
```

### Stop

```markdown
### 10:00 AM | ☕ | Café Name
Description text here.
> Tip: optional tip
<!-- location: lat, lng -->
<!-- suggestedBy: Name -->
<!-- tag: TagName -->
- [ ] Task description | https://optional-link.com
- [x] Completed task
```

## Common Phone App Prompts

**Add a stop:**
> "Add a stop to Day 2 of new-york.md at 2:00 PM: coffee at Blue Bottle Coffee, 76 Bond St (40.7261, -73.9935), tagged Coffee, suggested by Suprabho. Then run npm run generate, commit, and push."

**Reorder/edit stops:**
> "In new-york.md, move the Central Park stop to 9:00 AM on Day 3 and update its description. Run generate, commit, push."

**Add a new day:**
> "Add Day 4 to new-york.md with color #2d8a6e, centered on 40.758, -73.985, zoom 13. Add 3 stops: Times Square at 10 AM, MoMA at 1 PM, Broadway show at 7 PM. Include coordinates for each. Run generate, commit, push."

**Create a new trip:**
> "Create content/trips/tokyo.md with a 5-day Tokyo itinerary. Use the same format as new-york.md. Include frontmatter, day headers with real coordinates, and at least 3 stops per day with real locations. Run generate, commit, push."

## Important Notes

- Coordinates must be real lat/lng values for map markers to work
- Each day needs `<!-- center: lat, lng -->` and `<!-- zoom: N -->` for the map view
- The `<!-- color: #hex -->` comment sets the day's accent color in the UI
- Todos use GitHub-flavored checkbox syntax: `- [ ]` or `- [x]`
- The `|` in stop headers separates: `### TIME | EMOJI | NAME`
