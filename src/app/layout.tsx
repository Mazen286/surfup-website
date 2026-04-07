import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { COMPANY_NAME, SITE_URL, COMPANY_EMAIL, OG_IMAGE } from "@/lib/constants"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | Automated Surfboard Rentals in Hawaii & San Diego`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Rent a surfboard in seconds with SurfUp. Find a SurfPod near you in Hawaii or San Diego, scan, and go. Available 24/7.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY_NAME,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@surfupapp",
    images: ["/images/og-default.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-white.png`,
      email: COMPANY_EMAIL,
      description:
        "Automated surfboard rental stations in Hawaii and San Diego. Rent a board 24/7 with the SurfUp app.",
      foundingDate: "2023",
      areaServed: [
        { "@type": "State", name: "Hawaii" },
        { "@type": "City", name: "San Diego", containedInPlace: { "@type": "State", name: "California" } },
      ],
      sameAs: [
        "https://www.instagram.com/surfupapp",
        "https://www.facebook.com/surfupapp",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: COMPANY_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/images/og-default.jpg`,
      email: COMPANY_EMAIL,
      description:
        "Self-service surfboard rental stations available 24/7 at beaches, resorts, and campuses in Hawaii and San Diego.",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: ["Hawaii", "San Diego, CA"],
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Surfboard Rental",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "Surfboard Rental",
      description:
        "Automated self-service surfboard rentals from SurfPod stations. Scan the app, grab a board, and surf. Available 24/7 with no reservations needed.",
      areaServed: ["Hawaii", "San Diego, CA"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: COMPANY_NAME,
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "MobileApplication",
      name: "SurfUp",
      operatingSystem: "iOS, Android",
      applicationCategory: "LifestyleApplication",
      description:
        "Rent surfboards instantly from automated SurfPod stations. Find a station, scan, and go.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      installUrl: [
        "https://apps.apple.com/us/app/surfup/id1525152192",
        "https://play.google.com/store/apps/details?id=com.surfup.aloha",
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-surf-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
