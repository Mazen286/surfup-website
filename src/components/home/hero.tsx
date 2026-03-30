import { APP_STORE_URL } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ocean-950">
      {/* Background image placeholder - replace with lifestyle surf photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/60 via-ocean-950/40 to-ocean-950/80" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/50 via-ocean-950/30 to-ocean-950/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Adventure Starts Here
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          Rent a surfboard or snowboard in seconds. Find a Pod, scan the app,
          grab your board, and go.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-surf-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-surf-600 hover:shadow-xl"
          >
            Download the App
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  )
}
