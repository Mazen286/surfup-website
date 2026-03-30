import Image from "next/image"
import { FadeIn } from "@/components/shared/fade-in"

export function WhyItMatters() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-surf-500">
                Why This Matters
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ocean-950 sm:text-4xl">
                Using technology to make it more fun to have fun.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ocean-700">
                The best experiences require you to show up. Technology should
                make that easier, not harder.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ocean-700">
                We&apos;re building tools that remove friction from physical
                experiences. No apps pretending to replace the real thing. Just
                smart systems that get you from &ldquo;maybe&rdquo; to
                &ldquo;send it&rdquo; faster.
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-surf-500">
                  The SurfPod
                </p>
                <p className="mt-2 text-lg leading-relaxed text-ocean-700">
                  Self-service surfboard rental stations at beaches, resorts,
                  and campuses. Available 24/7, no staff required. Customers
                  scan, grab a board, and go.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/surfpod-station.jpg"
                alt="SurfPod automated surfboard rental station at a beach"
                width={800}
                height={500}
                className="h-auto max-h-[500px] w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
