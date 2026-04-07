import type { Metadata } from "next"
import { LegalPage } from "@/components/shared/legal-page"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "SurfUp terms and conditions. Review the rules and guidelines for using our app and rental stations.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" type="terms" />
}
