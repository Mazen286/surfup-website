import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date("2026-04-07"), changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/download`, lastModified: new Date("2026-04-07"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/partner`, lastModified: new Date("2026-04-07"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/team`, lastModified: new Date("2026-04-07"), changeFrequency: "monthly", priority: 0.6 },
  ]
}
