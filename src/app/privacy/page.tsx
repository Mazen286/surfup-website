import type { Metadata } from "next"
import { LegalPage } from "@/components/shared/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" type="privacy-policy" />
}
