import Image from "next/image";
import Link from "next/link";
import { getAllTrips } from "@/lib/generated-trips";

const trips = getAllTrips();

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <header className="h-12 bg-neutral-950 flex items-center px-5 shrink-0">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image src="/PRO-trip-logo-light.svg" alt="PRO trip" width={137} height={41} />
        </Link>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground mb-1">
            Promads'
          </p>
          <h1 className="font-serif text-4xl font-bold">All Trips</h1>
        </div>

        <div className="space-y-4">
          {trips.map((trip) => (
            <Link
              key={trip.id}
              href={`/trips/${trip.id}`}
              className="block group"
            >
              <div className="border border-line rounded-lg p-6 hover:bg-cream transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0"
                    style={{ backgroundColor: `${trip.color}15` }}
                  >
                    {trip.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h2 className="font-serif text-2xl font-bold group-hover:underline">
                        {trip.city}
                      </h2>
                      <span className="text-xs text-subtle">{trip.subtitle}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {trip.highlights}
                    </p>
                    <div className="flex gap-3 mt-3">
                      <span className="text-[10.5px] bg-warm rounded-full px-2.5 py-0.5 text-muted-foreground">
                        {trip.days} days
                      </span>
                      <span className="text-[10.5px] bg-warm rounded-full px-2.5 py-0.5 text-muted-foreground">
                        {trip.stops} stops
                      </span>
                    </div>
                  </div>
                  <span className="text-subtle group-hover:text-ink transition-colors text-lg mt-2">
                    &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
