import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage } from "@/components/shared/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <>
      <LegalPage title="Privacy Policy" type="privacy-policy" />
      <section className="border-t border-border pb-20">
        <div className="mx-auto max-w-3xl px-6 pt-8">
          <h2 className="text-lg font-bold text-ocean-950">
            Account Deletion
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ocean-700">
            You can request deletion of your SurfUp account and all associated
            personal data at any time.{" "}
            <Link
              href="/delete-account"
              className="font-medium text-surf-500 hover:text-surf-600"
            >
              Request account deletion
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
