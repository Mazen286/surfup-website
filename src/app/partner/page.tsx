import type { Metadata } from "next"
import Image from "next/image"
import { Building2, GraduationCap, Hotel, Palmtree, Clock, Wrench, DollarSign, Users } from "lucide-react"
import { FadeIn } from "@/components/shared/fade-in"
import { PartnerForm } from "@/components/partner/partner-form"

export const metadata: Metadata = {
  title: "Partner With SurfUp",
  description:
    "Bring automated surfboard rentals to your hotel, resort, or campus. SurfPod stations require no staffing, no scheduling, and work 24/7. Contact us to get started.",
  alternates: { canonical: "/partner" },
}

const VENUE_TYPES = [
  { icon: Hotel, label: "Hotels & Resorts", description: "Give guests an instant surf experience without adding staff." },
  { icon: GraduationCap, label: "College Campuses", description: "Bring board sports to students steps from the coast." },
  { icon: Building2, label: "Retail & Shops", description: "Drive foot traffic with a rental station outside your door." },
  { icon: Palmtree, label: "Beach Parks & Events", description: "Temporary or permanent stations for high-traffic locations." },
]

const VALUE_PROPS = [
  { icon: Clock, title: "24/7 Availability", description: "Stations operate around the clock. No opening hours, no closing time." },
  { icon: Users, title: "Zero Staffing", description: "Fully automated. No employees needed to manage rentals." },
  { icon: DollarSign, title: "New Revenue Stream", description: "Earn from every rental at your location with no upfront cost." },
  { icon: Wrench, title: "We Handle Everything", description: "Installation, maintenance, software updates, and customer support." },
]

const STEPS = [
  { number: "01", title: "We Install", description: "A SurfPod station gets placed at your location. We handle the hardware, setup, and connectivity." },
  { number: "02", title: "Customers Rent", description: "Visitors download the app, scan a board, and go. The entire rental takes under 30 seconds." },
  { number: "03", title: "You Earn", description: "Every rental generates revenue for your location. We handle payments, support, and maintenance." },
]

export default function PartnerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ocean-950 pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Every wave starts somewhere.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
                Your customers are steps from the water. We build the technology
                that turns &ldquo;maybe&rdquo; into &ldquo;send it&rdquo; and
                brings them back through your door with a story to tell.
              </p>
              <a
                href="#partner-form"
                className="mt-8 inline-block rounded-full bg-surf-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-surf-600 hover:shadow-xl"
              >
                Get Started
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/surfpod-station.jpg"
                alt="SurfPod automated surfboard rental station"
                width={600}
                height={400}
                className="h-auto max-h-[400px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-ocean-700">
            Trusted By
          </p>
          <div className="mt-6 flex items-center justify-center">
            <Image
              src="/images/partners/moniz-family-surf.png"
              alt="Moniz Family Surf"
              width={180}
              height={180}
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-surf-500">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ocean-950 sm:text-4xl">
              We make it easy.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <FadeIn key={step.number} delay={i * 150}>
                <div>
                  <p className="text-4xl font-extrabold text-surf-500/20">
                    {step.number}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-ocean-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ocean-700">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Types */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-surf-500">
              Who We Work With
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ocean-950 sm:text-4xl">
              A station fits wherever your customers are.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VENUE_TYPES.map((venue, i) => (
              <FadeIn key={venue.label} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-white p-6 transition-all hover:border-surf-400 hover:shadow-md">
                  <venue.icon className="size-8 text-surf-500" />
                  <h3 className="mt-4 text-lg font-bold text-ocean-950">
                    {venue.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ocean-700">
                    {venue.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-surf-500">
              Why Partner
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ocean-950 sm:text-4xl">
              No staffing. No scheduling. No friction.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {VALUE_PROPS.map((prop, i) => (
              <FadeIn key={prop.title} delay={i * 100}>
                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-surf-500/10">
                    <prop.icon className="size-6 text-surf-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ocean-950">
                      {prop.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-ocean-700">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={400}>
            <div className="mt-12 rounded-2xl bg-sand-50 border border-sand-100 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-ocean-950">
                Already have boards?
              </h3>
              <p className="mt-2 leading-relaxed text-ocean-700">
                We can work with what you&apos;ve got. Our stations are
                designed to accommodate existing inventory alongside our fleet.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form */}
      <section id="partner-form" className="bg-ocean-950 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Put your spot on the map.
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Tell us about your location and we&apos;ll be in touch.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <PartnerForm />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
