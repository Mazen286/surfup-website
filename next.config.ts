import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "surfupapp.com" }],
        destination: "https://www.surfupapp.com/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
