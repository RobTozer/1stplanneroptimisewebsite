"use client"

import { useEffect, useRef, useState } from "react"
import { loadGoogleMapsScript, isGoogleMapsLoaded } from "@/utils/google-maps-loader"

export function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapError, setMapError] = useState<string | null>(null)

  useEffect(() => {
    // Skip if we're not in the browser or the ref isn't attached
    if (typeof window === "undefined" || !mapRef.current) return

    let isMounted = true

    const initMap = async () => {
      try {
        // Load Google Maps script if not already loaded
        console.log("Loading Google Maps script...")
        await loadGoogleMapsScript()

        // Check if component is still mounted
        if (!isMounted || !mapRef.current) return

        // Check if Google Maps loaded successfully
        if (!isGoogleMapsLoaded()) {
          console.error("Google Maps failed to load")
          setMapError("Failed to load Google Maps")
          return
        }

        console.log("Google Maps script loaded successfully")

        // Exact coordinates provided: 53° 7'23.30"N, 1°33'31.81"W
        // Converted to decimal: 53.123139, -1.558836
        const officeLocation = { lat: 53.123139, lng: -1.558836 }

        // Create the map
        const map = new window.google.maps.Map(mapRef.current, {
          center: officeLocation,
          zoom: 18, // High zoom level for precise location
          mapTypeId: "hybrid", // Set initial map type to hybrid (satellite with labels)
          mapTypeControl: true, // Enable map type control to switch between views
        })

        console.log("Map created successfully")

        // Add a marker
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

        // Open info window when marker is clicked
        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })

        // Open info window by default
        infoWindow.open(map, marker)
      } catch (error) {
        console.error("Error initializing map:", error)
        if (isMounted) {
          setMapError(`Failed to initialize map: ${error.message}`)
        }
      }
    }

    initMap()

    // Cleanup function
    return () => {
      isMounted = false
    }
  }, [])

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
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  )
}

// Add TypeScript declarations
declare global {
  interface Window {
    google?: any
  }
}
