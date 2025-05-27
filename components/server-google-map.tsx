import { GoogleMapClient } from "./google-map-client"

export async function ServerGoogleMap() {
  // Get the API key on the server side
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    return (
      <div className="w-full h-[400px] rounded-lg border border-gray-300 bg-gray-100 flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-500 mb-2">Google Maps configuration not available</p>
          <a
            href="https://maps.google.com/?q=53.123139,-1.558836"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    )
  }

  return <GoogleMapClient apiKey={apiKey} />
}
