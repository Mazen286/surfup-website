"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

import type { Station } from "./types"

const StationMapInner = dynamic(() => import("./station-map-inner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[480px] items-center justify-center rounded-2xl border border-border bg-slate-100">
      <p className="text-ocean-700/40">Loading map...</p>
    </div>
  ),
})

/**
 * Fetches live station data and renders the interactive map. Shared by the
 * home page and the download page; section headings live with the pages.
 */
export function StationMapCanvas() {
  const [stations, setStations] = useState<Station[]>([])

  useEffect(() => {
    fetch("/api/stations")
      .then((r) => r.json())
      .then((data: Station[]) => setStations(data))
      .catch(() => {})
  }, [])

  return <StationMapInner stations={stations} />
}
