import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Marketing QR codes are printed as www.surfupapp.com/q/{code}; this hops
      // to the SurfUp API, which logs the scan and redirects to the code's
      // editable destination URL. Temporary (307) so the hop is never cached.
      {
        source: "/q/:code",
        destination: "https://surfup.azurewebsites.net/q/:code",
        permanent: false,
      },
      // Released app builds link to these older paths for the legal pages.
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
    ]
  },
}

export default nextConfig
