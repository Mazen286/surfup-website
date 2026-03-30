export async function GET() {
  const res = await fetch(
    "https://surfup.azurewebsites.net/api/v1/station/list",
    { next: { revalidate: 900 } }
  )

  if (!res.ok) {
    return Response.json([], { status: 200 })
  }

  const data = await res.json()
  return Response.json(data)
}
