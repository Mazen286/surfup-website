import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { WhyItMatters } from "@/components/home/why-it-matters"
import { Stats } from "@/components/home/stats"
import { StationMap } from "@/components/home/station-map"
import { MediaLogos } from "@/components/home/media-logos"
import { DownloadCta } from "@/components/home/download-cta"

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
