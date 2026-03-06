import * as fs from "fs";
import * as path from "path";

const CONTENT_DIR = path.join(__dirname, "..", "content", "trips");
const OUTPUT_FILE = path.join(__dirname, "..", "src", "lib", "generated-trips.ts");

interface Todo {
  note: string;
  link?: string;
  done: boolean;
}

interface Stop {
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

interface Stay {
  name: string;
  lat: number;
  lng: number;
}

interface Airport {
  name: string;
  code: string;
  lat: number;
  lng: number;
  date?: string;
  time?: string;
  flightNumber?: string;
}

interface DayData {
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

interface TripMeta {
  id: string;
  city: string;
  subtitle: string;
  emoji: string;
  highlights: string;
}

interface Trip {
  meta: TripMeta;
  days: Record<number, DayData>;
}

function parseFrontmatter(content: string): { meta: Record<string, string>; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("Invalid frontmatter");

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    // Strip quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }

  return { meta, body: match[2] };
}

function parseComment(line: string): { key: string; value: string } | null {
  const match = line.match(/^<!--\s*(\w+):\s*(.+?)\s*-->$/);
  if (!match) return null;
  return { key: match[1], value: match[2] };
}

function parseTrip(filePath: string): Trip {
  const content = fs.readFileSync(filePath, "utf-8");
  const { meta, body } = parseFrontmatter(content);

  const tripMeta: TripMeta = {
    id: meta.id,
    city: meta.city,
    subtitle: meta.subtitle,
    emoji: meta.emoji,
    highlights: meta.highlights,
  };

  const days: Record<number, DayData> = {};
  let currentDay = 0;
  let currentStop: Partial<Stop> | null = null;
  let descLines: string[] = [];

  const lines = body.split("\n");

  function flushStop() {
    if (currentStop && currentDay > 0) {
      currentStop.desc = descLines.join(" ").trim();
      days[currentDay].stops.push(currentStop as Stop);
    }
    currentStop = null;
    descLines = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();

    // Day header: ## Day N: Title
    const dayMatch = trimmed.match(/^## Day (\d+):\s*(.+)$/);
    if (dayMatch) {
      flushStop();
      currentDay = parseInt(dayMatch[1]);
      days[currentDay] = {
        label: `Day ${currentDay}`,
        title: dayMatch[2],
        subtitle: "",
        color: "#666",
        center: [0, 0],
        zoom: 12,
        stops: [],
        stays: [],
      };
      continue;
    }

    // Day metadata comments
    const comment = parseComment(trimmed);
    if (comment && currentDay > 0 && !currentStop) {
      const day = days[currentDay];
      switch (comment.key) {
        case "label":
          day.label = comment.value;
          break;
        case "subtitle":
          day.subtitle = comment.value;
          break;
        case "color":
          day.color = comment.value;
          break;
        case "center": {
          const [lat, lng] = comment.value.split(",").map((s) => parseFloat(s.trim()));
          day.center = [lat, lng];
          break;
        }
        case "zoom":
          day.zoom = parseInt(comment.value);
          break;
        case "stay": {
          const [name, coords] = comment.value.split("|").map((s) => s.trim());
          const [lat, lng] = coords.split(",").map((s) => parseFloat(s.trim()));
          day.stays.push({ name, lat, lng });
          break;
        }
        case "airport": {
          const parts = comment.value.split("|").map((s) => s.trim());
          const [name, code, coords] = parts;
          const [lat, lng] = coords.split(",").map((s) => parseFloat(s.trim()));
          const airport: Airport = { name, code, lat, lng };
          if (parts[3]) airport.date = parts[3];
          if (parts[4]) airport.time = parts[4];
          if (parts[5]) airport.flightNumber = parts[5];
          day.airport = airport;
          break;
        }
      }
      continue;
    }

    // Stop header: ### TIME | EMOJI | NAME
    const stopMatch = trimmed.match(/^### (.+?) \| (.+?) \| (.+)$/);
    if (stopMatch) {
      flushStop();
      currentStop = {
        time: stopMatch[1],
        emoji: stopMatch[2].trim(),
        name: stopMatch[3],
      };
      descLines = [];
      continue;
    }

    // Stop location comment
    if (comment && comment.key === "location" && currentStop) {
      const [lat, lng] = comment.value.split(",").map((s) => parseFloat(s.trim()));
      currentStop.lat = lat;
      currentStop.lng = lng;
      continue;
    }

    // suggestedBy comment
    if (comment && comment.key === "suggestedBy" && currentStop) {
      currentStop.suggestedBy = comment.value;
      continue;
    }

    // tag comment
    if (comment && comment.key === "tag" && currentStop) {
      currentStop.tag = comment.value;
      continue;
    }

    // Tip line
    if (trimmed.startsWith("> Tip:") && currentStop) {
      currentStop.tip = trimmed.replace(/^> Tip:\s*/, "");
      continue;
    }

    // Todo item: - [ ] note | link  or  - [x] note | link
    const todoMatch = trimmed.match(/^- \[([ x])\]\s*(.+)$/);
    if (todoMatch && currentStop) {
      const done = todoMatch[1] === "x";
      const parts = todoMatch[2].split("|").map((s) => s.trim());
      const todo: Todo = { note: parts[0], done };
      if (parts[1]) todo.link = parts[1];
      if (!currentStop.todos) currentStop.todos = [];
      currentStop.todos.push(todo);
      continue;
    }

    // Description text (non-empty lines that aren't comments)
    if (trimmed && currentStop && !trimmed.startsWith("<!--")) {
      descLines.push(trimmed);
    }
  }

  flushStop();

  return { meta: tripMeta, days };
}

function generate() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`Content directory not found: ${CONTENT_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  const trips: Trip[] = files.map((f) => parseTrip(path.join(CONTENT_DIR, f)));

  const output = `// Auto-generated from content/trips/*.md — do not edit manually
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
  color: string;
  days: number;
  stops: number;
}

export interface TripData {
  meta: TripMeta;
  days: Record<number, DayData>;
}

export const TRIPS: TripData[] = ${JSON.stringify(
    trips.map((t) => ({
      meta: {
        ...t.meta,
        color: t.days[1]?.color ?? "#666",
        days: Object.keys(t.days).length,
        stops: Object.values(t.days).reduce((sum, d) => sum + d.stops.length, 0),
      },
      days: t.days,
    })),
    null,
    2
  )};

export function getTripById(id: string): TripData | undefined {
  return TRIPS.find((t) => t.meta.id === id);
}

export function getAllTrips(): TripMeta[] {
  return TRIPS.map((t) => t.meta);
}
`;

  fs.writeFileSync(OUTPUT_FILE, output, "utf-8");
  console.log(`Generated ${OUTPUT_FILE} with ${trips.length} trip(s)`);
}

generate();
