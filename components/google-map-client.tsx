"use client"

import { useEffect, useRef, useState } from "react"

interface GoogleMapClientProps {
  apiKey: string
}

export function GoogleMapClient({ apiKey }: GoogleMapClientProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapError, setMapError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!mapRef.current || !apiKey) return

    let isMounted = true

    const loadMap = async () => {
      try {
        // Check if script already exists
        if (!document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')) {
          // Create and load script
          const script = document.createElement("script")
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
          script.async = true
          script.defer = true

          await new Promise((resolve, reject) => {
            script.onload = resolve
            script.onerror = reject
            document.head.appendChild(script)
          })
        }

        // Wait for Google Maps to be available
        let attempts = 0
        while (!window.google?.maps && attempts < 50) {
          await new Promise((resolve) => setTimeout(resolve, 100))
          attempts++
        }

        if (!window.google?.maps) {
          throw new Error("Google Maps failed to load")
        }

        if (!isMounted || !mapRef.current) return

        // Create the map
        const officeLocation = { lat: 53.123139, lng: -1.558836 }

        const map = new window.google.maps.Map(mapRef.current, {
          center: officeLocation,
          zoom: 18,
          mapTypeId: "hybrid",
          mapTypeControl: true,
        })

        // Add marker
        const marker = new window.google.maps.Marker({
          position: officeLocation,
          map: map,
          title: "1st Planner Ltd",
        })

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; max-width: 200px;">
              <h3 style="font-weight: bold; margin-bottom: 5px;">1st Planner Ltd</h3>
              <p style="margin: 0; font-size: 12px;">18 Brunswood Road<br>Matlock Bath<br>Derbyshire<br>DE4 3PA</p>
              <p style="margin-top: 5px; font-size: 10px; color: #666;">53° 7'23.30"N, 1°33'31.81"W</p>
            </div>
          `,
        })

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })

        infoWindow.open(map, marker)
        setIsLoading(false)
      } catch (error) {
        console.error("Error loading map:", error)
        if (isMounted) {
          setMapError(error.message || "Failed to load map")
          setIsLoading(false)
        }
      }
    }

    loadMap()

    return () => {
      isMounted = false
    }
  }, [apiKey])

  if (mapError) {
    return (
      <div className="w-full h-[400px] rounded-lg border border-gray-300 bg-gray-100 flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-500 mb-2">{mapError}</p>
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

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] rounded-lg border border-gray-300 bg-gray-100 flex items-center justify-center"
    >
      {isLoading && <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>}
    </div>
  )
}

// Add TypeScript declarations
declare global {
  interface Window {
    google?: any
  }
}
