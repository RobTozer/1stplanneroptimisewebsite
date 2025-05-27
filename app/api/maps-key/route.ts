import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Log environment check
    console.log("Checking for Google Maps API key...")

    // Only use the server-side environment variable
    const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY

    if (!mapsApiKey) {
      console.error("GOOGLE_MAPS_API_KEY not found in environment variables")
      return NextResponse.json({ error: "Maps configuration not available" }, { status: 500 })
    }

    console.log("Google Maps API key found, returning to client")

    // Return the API key in the expected format
    return NextResponse.json({
      apiKey: mapsApiKey,
    })
  } catch (error) {
    console.error("Error in maps-key API route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
