import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
}

export default function TermsPage() {
  return (
    <section className="py-32 sm:py-40">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold text-ocean-950 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-ocean-700">
          Version 1.0 &middot; Effective January 1, 2026
        </p>
        <div className="mt-8 text-ocean-700 leading-relaxed">
          <p>
            Terms of service content will be migrated from the current
            surfupapp.com site.
          </p>
        </div>
      </div>
    </section>
  )
}
