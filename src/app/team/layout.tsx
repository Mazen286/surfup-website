import type { Metadata } from "next"
import { COMPANY_NAME, SITE_URL, OG_IMAGE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Meet the Team Behind Automated Surfboard Rentals",
  description:
    "Meet the SurfUp team. Founded in San Diego, we bring expertise in hardware, software, and operations to surfboard rentals.",
  alternates: { canonical: "/team" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY_NAME,
    title: "Meet the SurfUp Team",
    description:
      "The team behind SurfUp, building automated surfboard rental stations in Hawaii and San Diego.",
    url: `${SITE_URL}/team`,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@surfupapp",
    title: "Meet the SurfUp Team",
    description:
      "The team behind SurfUp, building automated surfboard rental stations in Hawaii and San Diego.",
    images: ["/images/og-default.jpg"],
  },
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children
}
