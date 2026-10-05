"use client"

import { Suspense, useSyncExternalStore } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants"

type Platform = "ios" | "android"

const QR_CODE_PATTERN = /^[a-z0-9-]{3,32}$/

function getQrCode(value: string | null): string | null {
  return value && QR_CODE_PATTERN.test(value) ? value : null
}

function detectPlatform(): Platform | null {
  const ua = navigator.userAgent
  if (/android/i.test(ua)) return "android"
  if (/iphone|ipad|ipod/i.test(ua)) return "ios"
  // iPadOS reports as Mac; tell it apart by touch support
  if (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return "ios"
  return null
}

const noopSubscribe = () => () => {}

function useVisitorPlatform(): Platform | null {
  return useSyncExternalStore(noopSubscribe, detectPlatform, () => null)
}

function trackStoreClick(code: string, platform: Platform) {
  const payload = JSON.stringify({ code, platform })
  try {
    if (navigator.sendBeacon?.("/api/qr-click", new Blob([payload], { type: "application/json" }))) {
      return
    }
  } catch {
    // fall through to fetch
  }
  fetch("/api/qr-click", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {})
}

function playStoreUrl(code: string | null) {
  if (!code) return PLAY_STORE_URL
  const referrer = `utm_source=qr&utm_medium=print&utm_campaign=${code}`
  return `${PLAY_STORE_URL}&referrer=${encodeURIComponent(referrer)}`
}

function Buttons({ code }: { code: string | null }) {
  const platform = useVisitorPlatform()

  return (
    <div className="mt-10 flex flex-wrap items-center gap-5 justify-center lg:justify-start">
      {/* App Store campaign tokens (pt/ct) need an Apple provider token, so the link stays plain */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-transform hover:scale-105${platform === "android" ? " order-last" : ""}`}
        onClick={code ? () => trackStoreClick(code, "ios") : undefined}
      >
        <Image
          src="/images/app-store.png"
          alt="Download on the App Store"
          width={200}
          height={67}
          sizes="200px"
          className="h-16 w-auto sm:h-[72px]"
        />
      </a>
      <a
        href={playStoreUrl(code)}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
        onClick={code ? () => trackStoreClick(code, "android") : undefined}
      >
        <Image
          src="/images/google-play.png"
          alt="Get it on Google Play"
          width={200}
          height={67}
          sizes="200px"
          className="h-16 w-auto sm:h-[72px]"
        />
      </a>
    </div>
  )
}

function ButtonsWithQr() {
  const code = getQrCode(useSearchParams().get("qr"))
  return <Buttons code={code} />
}

export function StoreButtons() {
  return (
    <Suspense fallback={<Buttons code={null} />}>
      <ButtonsWithQr />
    </Suspense>
  )
}
