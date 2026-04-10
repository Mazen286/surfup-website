import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { token } = await request.json()

    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { error: "Token is required" },
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

    const res = await fetch(`${apiUrl}/api/v1/account/delete-confirm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })

    const data = await res.json()

    if (!res.ok || !data.success) {
      return NextResponse.json(
        { error: data.error || "Invalid or expired token" },
        { status: 400 },
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
