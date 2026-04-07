import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind SurfUp. Founded in San Diego, our leadership team brings expertise in hardware, software, data, and operations to automated surfboard rentals.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Meet the SurfUp Team",
    description:
      "The team behind SurfUp — building automated surfboard rental stations in Hawaii and San Diego.",
    url: "/team",
  },
  twitter: {
    title: "Meet the SurfUp Team",
    description:
      "The team behind SurfUp — building automated surfboard rental stations in Hawaii and San Diego.",
  },
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children
}
