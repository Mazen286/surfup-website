import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/shared/fade-in"

const STEPS = [
  {
    title: "Scan",
    description: "Find a station. Scan a board to start.",
    image: "/images/app-scan.png",
  },
  {
    title: "Surf",
    description: "Stash your stuff, grab your board, go.",
    image: "/images/app-surf.png",
  },
  {
    title: "Shaka",
    description: "Bring it back and share the stoke.",
    image: "/images/app-shaka.png",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-surf-500">
            How It Works
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold text-ocean-950 sm:text-4xl">
            No reservations. No paperwork. No changing your plans.
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <FadeIn key={step.title} delay={i * 150}>
              <div className="text-center">
                <div className="mx-auto w-56 overflow-hidden rounded-3xl shadow-lg">
                  <Image
                    src={step.image}
                    alt={`${step.title} step`}
                    width={400}
                    height={800}
                    className="h-auto w-full"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold text-ocean-950">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ocean-700">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={450}>
          <div className="mt-12 text-center">
            <Link
              href="/download"
              className="inline-block text-base font-semibold text-surf-500 transition-colors hover:text-surf-600"
            >
              Download the app &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
