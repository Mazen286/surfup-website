import type { Metadata } from "next"
import { DeleteAccountForm } from "@/components/delete-account/delete-account-form"

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: "Request deletion of your SurfUp account and personal data.",
  alternates: { canonical: "/delete-account" },
  robots: { index: false, follow: false },
}

export default function DeleteAccountPage() {
  return (
    <section className="py-32 sm:py-40">
      <div className="mx-auto max-w-xl px-6">
        <h1 className="text-3xl font-bold text-ocean-950 sm:text-4xl">
          Delete Your Account
        </h1>
        <p className="mt-4 leading-relaxed text-ocean-700">
          If you&apos;d like to delete your SurfUp account, please provide the
          email address associated with your account below.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-slate-50 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-ocean-950">
            What happens when you delete your account
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-ocean-700">
            <li className="flex gap-2">
              <span className="text-destructive">&#x2022;</span>
              Your profile and personal data will be permanently removed
            </li>
            <li className="flex gap-2">
              <span className="text-destructive">&#x2022;</span>
              Your rental history will be deleted
            </li>
            <li className="flex gap-2">
              <span className="text-destructive">&#x2022;</span>
              Any active rentals must be completed before deletion
            </li>
            <li className="flex gap-2">
              <span className="text-destructive">&#x2022;</span>
              This action cannot be undone
            </li>
          </ul>
        </div>

        <DeleteAccountForm />

        <p className="mt-6 text-xs text-ocean-700/60">
          For your security, all deletion requests are verified via email
          before being processed. No account will be deleted without
          confirmation from the account owner.
        </p>

        <p className="mt-8 text-sm text-ocean-700">
          You can also delete your account directly in the SurfUp app under{" "}
          <span className="font-medium text-ocean-950">
            Settings &gt; Delete Account
          </span>.
        </p>
      </div>
    </section>
  )
}
