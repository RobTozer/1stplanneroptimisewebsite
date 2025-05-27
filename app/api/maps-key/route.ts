import { NextResponse } from "next/server"

export async function GET() {
  // Only use the server-side environment variable
  const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!mapsApiKey) {
    console.error("Google Maps API key not found in environment variables")
    return NextResponse.json({ error: "Maps configuration not available" }, { status: 500 })
  }

  // Return the API key in the expected format
  return NextResponse.json({
    apiKey: mapsApiKey,
  })
}
