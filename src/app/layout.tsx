import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { COMPANY_NAME, SITE_URL } from "@/lib/constants"
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
    default: `${COMPANY_NAME} | Automated Surfboard & Snowboard Rentals`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Rent a surfboard or snowboard in seconds. Find a SurfPod near you, scan the app, grab your board, and go. No lines, no hassle, available 24/7.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Automated Surfboard & Snowboard Rentals`,
    description:
      "Rent a surfboard or snowboard in seconds. Find a SurfPod near you, scan the app, grab your board, and go.",
  },
  twitter: {
    card: "summary_large_image",
  },
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
