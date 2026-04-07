import type { Metadata } from "next"
import { COMPANY_NAME, SITE_URL, OG_IMAGE } from "@/lib/constants"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { WhyItMatters } from "@/components/home/why-it-matters"
import { Stats } from "@/components/home/stats"
import { StationMap } from "@/components/home/station-map"
import { MediaLogos } from "@/components/home/media-logos"
import { DownloadCta } from "@/components/home/download-cta"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Automated Surfboard Rentals in Hawaii & San Diego`,
    description:
      "Rent a surfboard in seconds. Find a SurfPod near you, scan the app, and go. Available 24/7.",
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@surfupapp",
    title: `${COMPANY_NAME} | Automated Surfboard Rentals`,
    description:
      "Rent a surfboard in seconds. Find a SurfPod near you, scan the app, and go.",
    images: ["/images/og-default.jpg"],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyItMatters />
      <Stats />
      <StationMap />
      <MediaLogos />
      <DownloadCta />
    </>
  )
}
