import type { Metadata } from "next"
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download the SurfUp app for iPhone or Android. Rent surfboards and snowboards effortlessly.",
}

export default function DownloadPage() {
  return (
    <section className="flex min-h-screen items-center bg-ocean-950">
      <div className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          Ride with Ease
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
          Rent surfboards and snowboards effortlessly with SurfUp. Contactless,
          self-service, and available 24/7 through our innovative Pods.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-surf-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-surf-600 hover:shadow-xl"
          >
            Download for iPhone
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            Download for Android
          </a>
        </div>
      </div>
    </section>
  )
}
