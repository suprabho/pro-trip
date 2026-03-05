import Link from "next/link";
import { getAllTrips } from "@/lib/generated-trips";

const trips = getAllTrips();

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <header className="h-[54px] bg-ink flex items-center justify-between px-5 shrink-0">
        <h1 className="font-serif text-xl font-semibold text-paper">
          pro<span className="text-day1 italic">trip</span>
        </h1>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground mb-2">
            Dashboard
          </p>
          <h2 className="font-serif text-5xl font-bold leading-tight">
            Your Travel Plans
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Plan, organize, and explore your upcoming trips.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/trips" className="group">
            <div className="border border-line rounded-lg p-8 hover:bg-cream transition-colors cursor-pointer h-full">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="font-serif text-2xl font-bold group-hover:underline">
                My Trips
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                View and manage all your trip itineraries.
              </p>
              <div className="mt-4">
                <span className="text-[10.5px] bg-warm rounded-full px-2.5 py-0.5 text-muted-foreground">
                  {trips.length} trip{trips.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </Link>

          <div className="border border-line border-dashed rounded-lg p-8 opacity-50">
            <div className="text-3xl mb-4">✈️</div>
            <h3 className="font-serif text-2xl font-bold">New Trip</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Plan a new adventure from scratch.
            </p>
            <div className="mt-4">
              <span className="text-[10.5px] bg-warm rounded-full px-2.5 py-0.5 text-muted-foreground">
                Coming soon
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border border-line rounded-lg p-6">
          <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground mb-3">
            Recent
          </p>
          {trips.map((trip) => (
            <Link
              key={trip.id}
              href={`/trips/${trip.id}`}
              className="flex items-center gap-3 group hover:bg-cream -mx-3 px-3 py-2 rounded-md transition-colors"
            >
              <span className="text-lg">{trip.emoji}</span>
              <div>
                <p className="font-serif text-lg font-semibold group-hover:underline">
                  {trip.city}
                </p>
                <p className="text-xs text-muted-foreground">
                  {trip.days} days · {trip.stops} stops
                </p>
              </div>
              <span className="ml-auto text-subtle group-hover:text-ink transition-colors">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
