import Link from "next/link"
import Image from "next/image"
import { RotatingText } from "@/components/shared/rotating-text"

export function Hero() {
  return (
    <section className="noise-overlay relative flex min-h-screen items-center justify-center overflow-hidden bg-ocean-950">
      <Image
        src="/images/hero.jpg"
        alt="Surfer walking toward the ocean at sunset"
        fill
        priority
        className="animate-slow-zoom object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/50 via-ocean-950/30 to-ocean-950/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-gradient-hero text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
          Drop in.
        </h1>
        <p className="mt-4 h-8 text-xl text-white/90 sm:text-2xl">
          <RotatingText />
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/download"
            className="rounded-full bg-surf-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-surf-600 hover:shadow-xl"
          >
            Get the App
          </Link>
          <Link
            href="/partner"
            className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  )
}
