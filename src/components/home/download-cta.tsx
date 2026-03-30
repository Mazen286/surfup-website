import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants"

export function DownloadCta() {
  return (
    <section className="bg-surf-500 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Ride?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
          Download the SurfUp app, find a Pod near you, and get on the water in
          minutes.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-surf-600 shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
          >
            Download for iPhone
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/70 hover:bg-white/10"
          >
            Download for Android
          </a>
        </div>
      </div>
    </section>
  )
}
