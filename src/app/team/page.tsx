"use client"

import Image from "next/image"
import { useState } from "react"
import { Linkedin } from "lucide-react"
import { TEAM, ADVISORS } from "@/lib/constants"
import type { TeamMember } from "@/lib/constants"
import { CursorGlow } from "@/components/shared/cursor-glow"
import { FadeIn } from "@/components/shared/fade-in"

function PersonCard({ person, index }: { person: TeamMember; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeIn delay={index * 100}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative overflow-hidden rounded-2xl bg-ocean-900 transition-all duration-500 hover:shadow-xl hover:shadow-surf-500/10"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={person.image}
            alt={`${person.name}, ${person.role} at SurfUp`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-surf-400">
            {person.role}
          </p>
          <h3 className="mt-1 text-xl font-bold text-white">
            {person.name}
          </h3>
          {person.bio && (
            <p
              className="mt-3 text-sm leading-relaxed text-white/70 transition-all duration-500"
              style={{
                maxHeight: hovered ? "200px" : "0",
                opacity: hovered ? 1 : 0,
              }}
            >
              {person.bio}
            </p>
          )}
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-surf-400 transition-colors hover:text-surf-300"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  )
}

function AdvisorCard({ person, index }: { person: TeamMember; index: number }) {
  return (
    <FadeIn delay={index * 100}>
      <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-ocean-900/50 p-5 transition-all hover:border-surf-500/30 hover:bg-ocean-900">
        <div className="relative size-16 shrink-0 overflow-hidden rounded-full">
          <Image
            src={person.image}
            alt={`${person.name}, ${person.role}`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-white">{person.name}</h3>
          <p className="text-sm text-surf-400">{person.role}</p>
        </div>
      </div>
    </FadeIn>
  )
}

export default function TeamPage() {
  return (
    <>
      <CursorGlow className="bg-ocean-950 pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-surf-400">
              The Team
            </p>
            <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Built by people who&apos;d rather be surfing.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              A small team of builders, operators, and wave-chasers making it
              easier to get on the water.
            </p>
          </FadeIn>
        </div>
      </CursorGlow>

      <section className="bg-ocean-950 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <PersonCard key={member.name} person={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean-950 pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="text-center text-2xl font-bold text-white">
              Advisors
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ADVISORS.map((member, i) => (
              <AdvisorCard key={member.name} person={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
