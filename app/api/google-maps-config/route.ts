import { NextResponse } from "next/server"

export async function GET() {
  // Use only the server-side environment variable
  const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!mapsApiKey) {
    return NextResponse.json({ error: "Maps configuration not available" }, { status: 500 })
  }

  return NextResponse.json({
    apiKey: mapsApiKey,
  })
}
