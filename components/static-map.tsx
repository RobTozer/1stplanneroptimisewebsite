"use client"

import { Button } from "@/components/ui/button"
import { Navigation, ExternalLink } from "lucide-react"

export function StaticMap() {
  // Office location coordinates
  const officeLocation = {
    lat: 53.123139,
    lng: -1.558836,
    address: "18 Brunswood Road, Matlock Bath, Derbyshire, DE4 3PA",
  }

  // Function to open directions in Google Maps
  const openDirections = () => {
    // Format the destination for Google Maps
    const destination = encodeURIComponent(`${officeLocation.lat},${officeLocation.lng}`)
    const destinationName = encodeURIComponent(officeLocation.address)

    // Create the Google Maps directions URL
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=${destinationName}`

    // Open in a new tab
    window.open(directionsUrl, "_blank")
  }

  return (
    <div className="w-full h-[400px] rounded-lg border border-gray-300 bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-4">
        <h3 className="font-bold text-lg">1st Planner Ltd</h3>
        <p className="text-gray-600">
          18 Brunswood Road
          <br />
          Matlock Bath
          <br />
          Derbyshire
          <br />
          DE4 3PA
        </p>
        <p className="text-sm text-gray-500 mt-2">53° 7'23.30"N, 1°33'31.81"W</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <Button onClick={openDirections} className="bg-[#0a0a5e] hover:bg-[#0a0a7e] text-white">
          <Navigation className="h-4 w-4 mr-2" />
          Get Directions
        </Button>

        <a
          href={`https://www.openstreetmap.org/?mlat=${officeLocation.lat}&mlon=${officeLocation.lng}&zoom=18`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          View on Map
          <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </div>
    </div>
  )
}
