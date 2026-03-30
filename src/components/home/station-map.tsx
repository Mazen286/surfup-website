"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"

interface Board {
  id: string
  status: string
  boardType: {
    brand: string
    model: string
    sport: string
    image: string
  }
}

interface Station {
  id: string
  name: string
  beach: string
  latitude: number
  longitude: number
  businessName: string
  address: string
  boards: Board[]
}

const StationMapInner = dynamic(() => import("./station-map-inner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[480px] items-center justify-center rounded-2xl border border-border bg-slate-100">
      <p className="text-ocean-700/40">Loading map...</p>
    </div>
  ),
})

export function StationMap() {
  const [stations, setStations] = useState<Station[]>([])

  useEffect(() => {
    fetch("/api/stations")
      .then((r) => r.json())
      .then((data: Station[]) => setStations(data))
      .catch(() => {})
  }, [])

  return (
    <section id="find-us" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-surf-500">
          Find Us
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-ocean-950 sm:text-4xl">
          X marks the spot.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-ocean-700">
          SurfPod stations are live and growing. Download the app for
          real-time board availability.
        </p>

        <div className="mt-12">
          <StationMapInner stations={stations} />
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
