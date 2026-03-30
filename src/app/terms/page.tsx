import type { Metadata } from "next"
import { LegalPage } from "@/components/shared/legal-page"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" type="terms" />
}
