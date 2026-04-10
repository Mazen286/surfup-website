"use client"

import { useState } from "react"

export function DeleteAccountForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl border border-surf-400/30 bg-surf-500/5 p-6 text-center">
        <p className="text-lg font-bold text-ocean-950">
          Check Your Email
        </p>
        <p className="mt-2 text-sm text-ocean-700">
          If an account exists for{" "}
          <span className="font-medium">{email}</span>, we&apos;ve sent a
          confirmation email. Please check your inbox and follow the link to
          complete the deletion.
        </p>
      </div>
    )
  }

  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={async (e) => {
        e.preventDefault()
        setError("")
        setSubmitting(true)

        try {
          const res = await fetch("/api/delete-account", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          })

          if (!res.ok) {
            throw new Error("Something went wrong. Please try again.")
          }

          setSubmitted(true)
        } catch {
          setError("Something went wrong. Please try again.")
        } finally {
          setSubmitting(false)
        }
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

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-red-500 py-3 text-base font-semibold text-white transition-colors hover:bg-red-600 disabled:opacity-50"
      >
        {submitting ? "Submitting\u2026" : "Request Account Deletion"}
      </button>
    </form>
  )
}
