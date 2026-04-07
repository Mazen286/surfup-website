import type { Metadata } from "next"
import { LegalPage } from "@/components/shared/legal-page"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read SurfUp's terms and conditions covering your rights and responsibilities when using our app and SurfPod surfboard rental stations.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" type="terms" />
}
