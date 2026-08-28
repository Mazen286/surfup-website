import Link from "next/link"

import { StationMapCanvas } from "@/components/station-map/station-map-canvas"

export function StationMap() {
  return (
    <section id="find-us" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-surf-500">
          Find Us
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-ocean-950 sm:text-4xl">
          Find a SurfPod Station Near You
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-ocean-700">
          Surfboard rental stations across Hawaii and San Diego. Tap a station
          to see live board availability and prices.
        </p>

        <div className="mt-12">
          <StationMapCanvas />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/download"
            className="inline-block rounded-full bg-surf-500 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-surf-600"
          >
            Download App for Live Availability
          </Link>
        </div>
      </div>
    </section>
  )
}
