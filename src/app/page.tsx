import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { Products } from "@/components/home/products"
import { MediaLogos } from "@/components/home/media-logos"
import { Testimonial } from "@/components/home/testimonial"
import { DownloadCta } from "@/components/home/download-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Products />
      <MediaLogos />
      <Testimonial />
      <DownloadCta />
    </>
  )
}
