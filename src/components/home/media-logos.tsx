"use client"

import Image from "next/image"
import { MEDIA } from "@/lib/constants"
import { FadeIn } from "@/components/shared/fade-in"

function LogoSet() {
  return (
    <>
      {MEDIA.map((outlet, i) => (
        <div key={`${outlet.name}-${i}`} className="mx-10 shrink-0 sm:mx-14">
          <Image
            src={outlet.logo}
            alt={outlet.name}
            width={160}
            height={64}
            className="h-12 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:h-16"
          />
        </div>
      ))}
    </>
  )
}

export function MediaLogos() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-ocean-700">
            As Featured In
          </p>
        </FadeIn>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <div className="animate-marquee flex shrink-0">
          <LogoSet />
          <LogoSet />
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  )
}
