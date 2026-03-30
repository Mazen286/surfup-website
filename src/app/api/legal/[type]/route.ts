import { NextRequest } from "next/server"

const VALID_TYPES = ["terms", "privacy-policy", "rider-waiver"] as const

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params

  if (!VALID_TYPES.includes(type as (typeof VALID_TYPES)[number])) {
    return Response.json({ error: "Invalid document type" }, { status: 404 })
  }

  const res = await fetch(
    `https://surfup.azurewebsites.net/api/v1/legal/${type}`,
    { next: { revalidate: 86400 } }
  )

  if (!res.ok) {
    return Response.json({ error: "Failed to fetch" }, { status: 502 })
  }

  const data = await res.json()
  return Response.json(data)
}
