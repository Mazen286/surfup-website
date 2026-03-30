import { Smartphone, QrCode, Waves } from "lucide-react"

const STEPS = [
  {
    icon: Smartphone,
    title: "Find a Pod",
    description:
      "Open the SurfUp app and locate the nearest SurfPod or SnowPod on the map.",
  },
  {
    icon: QrCode,
    title: "Scan & Grab",
    description:
      "Scan the QR code, pick your board, and you're checked out in seconds.",
  },
  {
    icon: Waves,
    title: "Ride & Return",
    description:
      "Hit the waves or the slopes. When you're done, return the board to any nearby Pod.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-surf-500">
          How It Works
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-ocean-950 sm:text-4xl">
          Three Steps. Zero Hassle.
        </h2>

        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-surf-500/10">
                <step.icon className="size-8 text-surf-500" />
              </div>
              <p className="mt-2 text-sm font-bold text-surf-500">
                Step {i + 1}
              </p>
              <h3 className="mt-3 text-xl font-bold text-ocean-950">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ocean-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
