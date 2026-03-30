import { MEDIA } from "@/lib/constants"

export function MediaLogos() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-ocean-700">
          As Featured In
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {MEDIA.map((outlet) => (
            <div
              key={outlet.name}
              className="text-sm font-semibold text-ocean-700/60"
              title={outlet.name}
            >
              {/* Replace with actual logos when available */}
              {outlet.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
