import type { Metadata } from "next"
import { COMPANY_NAME, SITE_URL } from "@/lib/constants"
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
    title: `${COMPANY_NAME} | Automated Surfboard Rentals in Hawaii & San Diego`,
    description:
      "Rent a surfboard in seconds. Find a SurfPod near you, scan the app, grab your board, and go. Available 24/7.",
    url: SITE_URL,
  },
  twitter: {
    title: `${COMPANY_NAME} | Automated Surfboard Rentals`,
    description:
      "Rent a surfboard in seconds. Find a SurfPod near you, scan the app, grab your board, and go.",
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
