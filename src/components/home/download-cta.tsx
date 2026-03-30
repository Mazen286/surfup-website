"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants"
import { CursorGlow } from "@/components/shared/cursor-glow"

const SCREENSHOTS = [
  { src: "/images/app-scan.png", alt: "SurfUp app 3D map view", rotate: "-8deg", x: "-110%", delay: 200 },
  { src: "/images/app-surf.png", alt: "SurfUp active rental screen", rotate: "0deg", x: "0", delay: 0 },
  { src: "/images/app-shaka.png", alt: "SurfUp rewards and badges", rotate: "8deg", x: "110%", delay: 200 },
]

export function DownloadCta() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <CursorGlow className="noise-overlay bg-ocean-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Ready to Ride?
            </h2>
            <p className="mt-6 max-w-xl text-xl text-white/90">
              Download the SurfUp app, find a SurfPod near you, and get on the
              water in minutes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5 justify-center lg:justify-start">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <Image
                  src="/images/app-store.png"
                  alt="Download on the App Store"
                  width={200}
                  height={67}
                  className="h-16 w-auto sm:h-[72px]"
                />
              </a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <Image
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={67}
                  className="h-16 w-auto sm:h-[72px]"
                />
              </a>
            </div>
          </div>
          <div ref={ref} className="relative mx-auto h-[400px] w-full max-w-md sm:h-[480px]">
            {SCREENSHOTS.map((shot) => (
              <div
                key={shot.src}
                className="absolute left-1/2 top-1/2 w-32 rounded-2xl shadow-2xl sm:w-40 lg:w-44"
                style={{
                  transform: visible
                    ? `translate(-50%, -50%) translateX(${shot.x}) rotate(${shot.rotate})`
                    : "translate(-50%, 20%) translateX(0) rotate(0deg)",
                  opacity: visible ? 1 : 0,
                  transition: `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${shot.delay}ms, opacity 0.6s ease-out ${shot.delay}ms`,
                }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={300}
                  height={600}
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </CursorGlow>
  )
}
