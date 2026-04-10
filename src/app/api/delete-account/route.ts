import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 },
      )
    }

    const apiUrl = process.env.SURFUP_API_URL
    if (!apiUrl) {
      console.error("SURFUP_API_URL is not configured")
      return NextResponse.json(
        { error: "Service unavailable" },
        { status: 503 },
      )
    }

    const res = await fetch(`${apiUrl}/api/v1/account/delete-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })

    if (!res.ok) {
      console.error("API delete-request failed:", res.status)
      return NextResponse.json(
        { error: "Service unavailable" },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    )
  }
}
