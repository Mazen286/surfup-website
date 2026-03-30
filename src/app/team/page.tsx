import type { Metadata } from "next"
import Image from "next/image"
import { TEAM, ADVISORS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind SurfUp.",
}

function PersonCard({ person }: { person: (typeof TEAM)[number] }) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm">
      <div className="relative size-28 overflow-hidden rounded-full bg-slate-100">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-bold text-ocean-950">{person.name}</h3>
      <p className="text-sm font-medium text-surf-500">{person.role}</p>
      {person.bio && (
        <p className="mt-3 text-sm leading-relaxed text-ocean-700">
          {person.bio}
        </p>
      )}
    </div>
  )
}

export default function TeamPage() {
  return (
    <>
      <section className="bg-ocean-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Our Team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            The people building the future of board sport rentals.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-2xl font-bold text-ocean-950">
            Leadership
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <PersonCard key={member.name} person={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-2xl font-bold text-ocean-950">
            Advisors
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ADVISORS.map((member) => (
              <PersonCard key={member.name} person={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
