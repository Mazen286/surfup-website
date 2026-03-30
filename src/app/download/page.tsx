import type { Metadata } from "next"
import Image from "next/image"
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Download the SurfUp App",
  description:
    "Download the SurfUp app for iPhone or Android. Rent surfboards from automated SurfPod stations in Hawaii and San Diego. Contactless, self-service, available 24/7.",
  alternates: { canonical: "/download" },
}

const STEPS = [
  {
    title: "Download",
    description: "Get the free SurfUp app from the App Store or Google Play.",
  },
  {
    title: "Find a SurfPod",
    description:
      "Open the map and locate the nearest station at your beach, resort, or campus.",
  },
  {
    title: "Scan & Surf",
    description:
      "Scan a board, grab it, and go. Return it to any SurfPod when you're done.",
  },
]

export default function DownloadPage() {
  return (
    <>
      <section className="bg-ocean-950 pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Get the SurfUp App
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/90">
                Rent surfboards in seconds. Find a SurfPod near you, scan your
                board, and hit the water. Available 24/7, no reservations needed.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5 justify-center lg:justify-start">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/app-store.png"
                    alt="Download on the App Store"
                    width={200}
                    height={67}
                    className="h-16 w-auto sm:h-[72px]"
                  />
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/google-play.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={67}
                    className="h-16 w-auto sm:h-[72px]"
                  />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/app-scan.png"
                alt="SurfUp app showing 3D map of SurfPod station"
                width={400}
                height={800}
                className="h-auto w-56 rounded-3xl drop-shadow-2xl sm:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold text-ocean-950 sm:text-3xl">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-surf-500 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-3 text-lg font-bold text-ocean-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ocean-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
