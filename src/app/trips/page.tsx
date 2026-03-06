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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {trips.map((trip) => (
            <Link
              key={trip.id}
              href={`/trips/${trip.id}`}
              className="block group"
            >
              <div className="border border-line rounded-lg overflow-hidden hover:bg-cream transition-colors cursor-pointer h-full flex flex-col">
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: trip.color }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0"
                      style={{ backgroundColor: `${trip.color}15` }}
                    >
                      {trip.emoji}
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-bold group-hover:underline leading-tight">
                        {trip.city}
                      </h2>
                      <span className="text-xs text-subtle">{trip.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground flex-1">
                    {trip.highlights}
                  </p>
                  <div className="flex gap-3 mt-4 pt-4 border-t border-line">
                    <span className="text-[10.5px] bg-warm rounded-full px-2.5 py-0.5 text-muted-foreground">
                      {trip.days} days
                    </span>
                    <span className="text-[10.5px] bg-warm rounded-full px-2.5 py-0.5 text-muted-foreground">
                      {trip.stops} stops
                    </span>
                    <span className="ml-auto text-subtle group-hover:text-ink transition-colors text-sm">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
