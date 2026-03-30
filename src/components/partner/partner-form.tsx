"use client"

import { useState } from "react"
import { COMPANY_EMAIL } from "@/lib/constants"

const LOCATION_TYPES = [
  "Hotel / Resort",
  "College Campus",
  "Retail / Shop",
  "Beach Park",
  "Event Space",
  "Other",
]

export function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-2xl font-bold text-white">We&apos;ll be in touch.</p>
        <p className="mt-2 text-white/70">
          Thanks for your interest. Our team will reach out within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form
      className="mt-10 space-y-5"
      action={`mailto:${COMPANY_EMAIL}?subject=Partnership Inquiry`}
      method="POST"
      encType="text/plain"
      onSubmit={() => setSubmitted(true)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-surf-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white/80">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-surf-500"
            placeholder="Company name"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-surf-500"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="location-type" className="block text-sm font-medium text-white/80">
            Location Type
          </label>
          <select
            id="location-type"
            name="location-type"
            required
            className="mt-1.5 w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-surf-500"
          >
            <option value="" className="bg-ocean-950">Select type...</option>
            {LOCATION_TYPES.map((type) => (
              <option key={type} value={type} className="bg-ocean-950">
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80">
          Tell us about your location
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-surf-500"
          placeholder="Where are you located? How many visitors do you get? Anything else we should know."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-surf-500 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-surf-600 hover:shadow-xl sm:w-auto sm:px-10"
      >
        Submit Inquiry
      </button>
    </form>
  )
}
