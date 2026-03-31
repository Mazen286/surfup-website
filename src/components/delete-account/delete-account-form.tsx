"use client"

import { useState } from "react"
import { COMPANY_EMAIL } from "@/lib/constants"

export function DeleteAccountForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl border border-surf-400/30 bg-surf-500/5 p-6 text-center">
        <p className="text-lg font-bold text-ocean-950">
          Request Received
        </p>
        <p className="mt-2 text-sm text-ocean-700">
          We&apos;ve received your request. For your security, we&apos;ll
          send a verification email to{" "}
          <span className="font-medium">{email}</span> to confirm you own this
          account before processing the deletion.
        </p>
      </div>
    )
  }

  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault()
        window.location.href = `mailto:${COMPANY_EMAIL}?subject=Account Deletion Request&body=Please delete the SurfUp account associated with this email: ${encodeURIComponent(email)}`
        setSubmitted(true)
      }}
    >
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ocean-950">
          Email address associated with your account
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-ocean-950 outline-none transition-colors focus:border-surf-500"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-red-500 py-3 text-base font-semibold text-white transition-colors hover:bg-red-600"
      >
        Request Account Deletion
      </button>
    </form>
  )
}
