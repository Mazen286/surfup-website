"use client"

import { useEffect } from "react"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"

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

const surfUpIcon = L.icon({
  iconUrl: "/images/surfup-marker.svg",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
})

function FitBounds({ stations }: { stations: Station[] }) {
  const map = useMap()

  useEffect(() => {
    if (stations.length === 0) return

    if (stations.length === 1) {
      map.setView([stations[0].latitude, stations[0].longitude], 16)
    } else {
      const bounds = L.latLngBounds(
        stations.map((s) => [s.latitude, s.longitude])
      )
      map.fitBounds(bounds, { padding: [60, 60], maxZoom: 10 })
    }
  }, [map, stations])

  return null
}

export default function StationMapInner({
  stations,
}: {
  stations: Station[]
}) {
  return (
    <MapContainer
      center={[25, -140]}
      zoom={3}
      scrollWheelZoom={false}
      className="relative z-0 h-[480px] w-full overflow-hidden rounded-2xl border border-border"
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {stations.map((station) => {
        const available = station.boards.filter(
          (b) => b.status === "available"
        ).length

        return (
          <Marker
            key={station.id}
            position={[station.latitude, station.longitude]}
            icon={surfUpIcon}
          >
            <Popup>
              <div className="font-sans">
                <p className="text-sm font-bold text-ocean-950">
                  {station.name}
                </p>
                <p className="text-xs text-ocean-700">
                  {available} board{available !== 1 ? "s" : ""} available
                </p>
                {station.address && (
                  <p className="mt-1 text-xs text-gray-500">
                    {station.address}
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        )
      })}
      <FitBounds stations={stations} />
    </MapContainer>
  )
}
