"use client"

import { useEffect, useMemo } from "react"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"

import type { Board, Station } from "./types"

const MAX_POPUP_BOARDS = 5

// The marker SVG is 1:2 (the SurfUp Dude on his board); size it like the app
// does instead of forcing it square.
function markerIcon(offline: boolean) {
  return L.divIcon({
    className: "sup-marker-icon",
    html: `
      <div class="sup-marker${offline ? " sup-marker--offline" : ""}">
        <img src="/images/surfup-marker.svg" alt="" />
        ${offline ? '<span class="sup-marker__dot"></span>' : ""}
      </div>
    `,
    iconSize: [24, 48],
    iconAnchor: [12, 48],
    popupAnchor: [0, -52],
  })
}

function boardName(board: Board) {
  const name = [board.boardType?.brand, board.boardType?.model]
    .filter(Boolean)
    .join(" ")
  return name || "Surfboard"
}

/**
 * Popup content mirroring the app's map tooltip + station details sheet:
 * business logo and name, availability/offline badge, then each board with
 * its price ($/min), available boards first.
 */
function StationPopup({ station }: { station: Station }) {
  const boards = station.boards ?? []
  const available = boards.filter((b) => b.status === "available").length
  const offline = station.isOnline === false

  const sorted = [...boards].sort((a, b) => {
    const aAvail = a.status === "available" ? 0 : 1
    const bAvail = b.status === "available" ? 0 : 1
    return aAvail - bAvail
  })
  const shown = sorted.slice(0, MAX_POPUP_BOARDS)
  const hidden = sorted.length - shown.length

  return (
    <div className="w-[272px] font-sans">
      {/* Header - matches the app's compact tooltip */}
      <div className="flex items-center gap-2.5 p-3">
        <div className="size-10 shrink-0 overflow-hidden rounded-lg bg-slate-100">
          {station.businessImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={station.businessImage}
              alt=""
              className="size-10 object-cover"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/surfup-marker.svg"
              alt=""
              className="size-10 object-contain p-1.5"
            />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-semibold text-[#1a1a1a]">
            {station.businessName || station.beach || station.name}
          </p>
          {offline ? (
            <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
              <span className="size-1.5 rounded-full bg-red-500" />
              Temporarily unavailable
            </p>
          ) : boards.length > 0 ? (
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-[#666]">
              <span className="size-1.5 rounded-full bg-[#4caf50]" />
              {available} board{available !== 1 ? "s" : ""} available
            </p>
          ) : (
            <p className="mt-0.5 text-xs text-[#999]">{station.beach}</p>
          )}
        </div>
      </div>

      {/* Boards with prices - matches the app's station details sheet */}
      {!offline && boards.length > 0 && (
        <>
          <div className="border-t border-slate-100" />
          <div className="max-h-56 overflow-y-auto px-3 py-2">
            {shown.map((board) => {
              const isAvailable = board.status === "available"
              return (
                <div
                  key={board.id}
                  className={`flex items-center gap-2.5 py-1.5 ${
                    isAvailable ? "" : "opacity-45"
                  }`}
                >
                  <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-slate-100">
                    {board.image || board.boardType?.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={board.image || board.boardType?.image}
                        alt=""
                        className="size-8 object-contain"
                      />
                    ) : (
                      <span className="text-sm">🏄</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium text-[#1a1a1a]">
                      {boardName(board)}
                    </p>
                    {!isAvailable && (
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#999]">
                        In use
                      </p>
                    )}
                  </div>
                  {typeof board.ratePerMinute === "number" && (
                    <p className="shrink-0 text-[13px] font-semibold text-ocean-950">
                      ${board.ratePerMinute.toFixed(2)}
                      <span className="text-[11px] font-normal text-[#999]">
                        /min
                      </span>
                    </p>
                  )}
                </div>
              )
            })}
            {hidden > 0 && (
              <p className="py-1 text-center text-[11px] text-[#999]">
                +{hidden} more in the app
              </p>
            )}
          </div>
          {typeof station.freeMinutes === "number" &&
            station.freeMinutes > 0 && (
              <p className="border-t border-slate-100 px-3 py-2 text-center text-[11px] font-medium text-surf-600">
                First {station.freeMinutes} minutes free
              </p>
            )}
        </>
      )}
    </div>
  )
}

function StationMarkers({ stations }: { stations: Station[] }) {
  return (
    <>
      {stations.map((station) => {
        const offline = station.isOnline === false
        const icon = markerIcon(offline)

        return (
          <Marker
            key={station.id}
            position={[station.latitude, station.longitude]}
            icon={icon}
          >
            {/* Leaflet auto-pans so the whole popup fits - the web equivalent
                of the app centering the station before its tooltip opens */}
            <Popup
              closeButton={false}
              maxWidth={280}
              autoPanPadding={[24, 24]}
            >
              <StationPopup station={station} />
            </Popup>
          </Marker>
        )
      })}
    </>
  )
}

function FitBounds({ stations }: { stations: Station[] }) {
  const map = useMap()

  useEffect(() => {
    if (stations.length === 0) return

    if (stations.length === 1) {
      map.setView([stations[0].latitude, stations[0].longitude], 16)
    } else {
      const bounds = L.latLngBounds(
        stations.map((s) => [s.latitude, s.longitude] as [number, number])
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
  const validStations = useMemo(
    () =>
      stations.filter(
        (s) =>
          typeof s.latitude === "number" && typeof s.longitude === "number"
      ),
    [stations]
  )

  return (
    <MapContainer
      center={[25, -140]}
      zoom={3}
      scrollWheelZoom={false}
      className="relative z-0 h-[480px] w-full overflow-hidden rounded-2xl border border-border"
      attributionControl={true}
    >
      {/* CARTO raster tiles started watermarking "API KEY REQUIRED"; standard OSM needs no key. */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <StationMarkers stations={validStations} />
      <FitBounds stations={validStations} />
    </MapContainer>
  )
}
