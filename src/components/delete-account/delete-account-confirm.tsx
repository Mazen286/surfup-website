"use client"

import { useEffect, useState } from "react"

type Status = "loading" | "success" | "error" | "invalid"

export function DeleteAccountConfirm({ token }: { token: string | null }) {
  const [status, setStatus] = useState<Status>(token ? "loading" : "invalid")

  useEffect(() => {
    if (!token) return

    async function confirmDeletion() {
      try {
        const res = await fetch("/api/delete-account/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        })

        if (res.ok) {
          setStatus("success")
        } else {
          setStatus("error")
        }
      } catch {
        setStatus("error")
      }
    }

    confirmDeletion()
  }, [token])

  if (status === "loading") {
    return (
      <div>
        <p className="text-lg font-bold text-ocean-950">
          Processing your request&hellip;
        </p>
        <p className="mt-2 text-sm text-ocean-700">
          Please wait while we confirm your account deletion.
        </p>
      </div>
    )
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-surf-400/30 bg-surf-500/5 p-6">
        <p className="text-lg font-bold text-ocean-950">
          Account Deleted
        </p>
        <p className="mt-2 text-sm text-ocean-700">
          Your SurfUp account has been successfully deleted and your personal
          data has been anonymized.
        </p>
      </div>
    )
  }

  if (status === "invalid") {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
        <p className="text-lg font-bold text-ocean-950">
          Invalid Link
        </p>
        <p className="mt-2 text-sm text-ocean-700">
          This link is missing a confirmation token. Please use the link from
          your email.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
      <p className="text-lg font-bold text-ocean-950">
        Link Expired or Invalid
      </p>
      <p className="mt-2 text-sm text-ocean-700">
        This link is invalid or has expired. Please submit a new deletion
        request.
      </p>
    </div>
  )
}
