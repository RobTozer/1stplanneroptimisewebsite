import { NextResponse } from "next/server"

export async function GET() {
  // Only use the server-side environment variable
  // Make sure there's no reference to NEXT_PUBLIC_GOOGLE_MAPS_API_KEY anywhere
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || ""

  if (!apiKey) {
    console.warn("Google Maps API key is not set in environment variables")
  }

  return NextResponse.json({
    key: apiKey,
  })
}
