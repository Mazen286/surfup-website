const QR_CODE_PATTERN = /^[a-z0-9]{4,32}$/
const PLATFORMS = ["ios", "android"]

interface QrClick {
  code?: unknown
  platform?: unknown
}

function noContent() {
  return new Response(null, { status: 204 })
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")
  const first = forwarded?.split(",")[0]?.trim()
  return first || request.headers.get("x-real-ip") || ""
}

// Records which marketing QR code led to an App Store / Google Play tap.
// Always answers 204 so tracking never affects the visitor.
export async function POST(request: Request) {
  let body: QrClick
  try {
    // sendBeacon payloads may arrive as text/plain, so parse the raw text
    body = JSON.parse(await request.text())
  } catch {
    return noContent()
  }

  const code = typeof body?.code === "string" ? body.code : ""
  const platform = typeof body?.platform === "string" ? body.platform : ""
  if (!QR_CODE_PATTERN.test(code) || !PLATFORMS.includes(platform)) {
    return noContent()
  }

  const headers: Record<string, string> = { "Content-Type": "application/json" }
  const userAgent = request.headers.get("user-agent")
  if (userAgent) headers["User-Agent"] = userAgent
  const ip = clientIp(request)
  if (ip) headers["X-Forwarded-For"] = ip

  try {
    await fetch(
      `https://surfup.azurewebsites.net/api/v1/qr/${code}/store-click`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ platform }),
        signal: AbortSignal.timeout(3000),
        cache: "no-store",
      }
    )
  } catch {
    // Tracking is best effort
  }

  return noContent()
}
