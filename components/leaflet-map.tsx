"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LeafletMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [mapError, setMapError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  // Office location coordinates
  const officeLocation = {
    lat: 53.123139,
    lng: -1.558836,
    address: "18 Brunswood Road, Matlock Bath, Derbyshire, DE4 3PA",
  }

  // Function to open directions in Google Maps
  const openDirections = () => {
    const destination = encodeURIComponent(`${officeLocation.lat},${officeLocation.lng}`)
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`
    window.open(directionsUrl, "_blank")
  }

  useEffect(() => {
    if (!mapRef.current || typeof window === "undefined" || isInitialized) return

    let isMounted = true

    const loadLeafletAndInitMap = async () => {
      try {
        // Ensure the container is ready
        if (!mapRef.current) {
          throw new Error("Map container not available")
        }

        // Clear any existing Leaflet instance on this container
        if (mapRef.current._leaflet_id) {
          delete mapRef.current._leaflet_id
        }

        // Load Leaflet CSS
        if (!document.querySelector('link[href*="leaflet"]')) {
          const link = document.createElement("link")
          link.rel = "stylesheet"
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          document.head.appendChild(link)
        }

        // Load Leaflet JS if not already loaded
        if (!window.L) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script")
            script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            script.onload = resolve
            script.onerror = reject
            document.head.appendChild(script)
          })
        }

        if (!isMounted || !mapRef.current) return

        const L = window.L
        if (!L) throw new Error("Leaflet failed to load")

        // Fix icon paths
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        })

        // Double-check container is still available and clean
        if (!mapRef.current || mapRef.current._leaflet_id) {
          throw new Error("Map container is not ready for initialization")
        }

        // Create map with error handling
        const officeCoords: [number, number] = [officeLocation.lat, officeLocation.lng]

        try {
          const map = L.map(mapRef.current, {
            center: officeCoords,
            zoom: 16,
            zoomControl: true,
            attributionControl: true,
          })

          mapInstanceRef.current = map

          // Add tile layer
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
          }).addTo(map)

          // Add marker
          const marker = L.marker(officeCoords).addTo(map)
          marker
            .bindPopup(`
            <div style="padding: 8px; max-width: 200px;">
              <h3 style="font-weight: bold; margin-bottom: 5px;">1st Planner Ltd</h3>
              <p style="margin: 0; font-size: 12px;">${officeLocation.address}</p>
            </div>
          `)
            .openPopup()

          if (isMounted) {
            setIsInitialized(true)
            setIsLoading(false)
          }
        } catch (mapCreationError) {
          console.error("Error creating map:", mapCreationError)
          throw new Error("Failed to create map instance")
        }
      } catch (error) {
        console.error("Error loading map:", error)
        if (isMounted) {
          setMapError("Unable to load map. Please try refreshing the page.")
          setIsLoading(false)
        }
      }
    }

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      loadLeafletAndInitMap()
    }, 100)

    return () => {
      isMounted = false
      clearTimeout(timeoutId)

      // Clean up map instance
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove()
          mapInstanceRef.current = null
        } catch (e) {
          console.warn("Error removing map:", e)
        }
      }

      // Clean up container
      if (mapRef.current && mapRef.current._leaflet_id) {
        try {
          delete mapRef.current._leaflet_id
        } catch (e) {
          console.warn("Error cleaning container:", e)
        }
      }

      setIsInitialized(false)
    }
  }, []) // Empty dependency array to run only once

  if (mapError) {
    return (
      <div className="w-full h-[400px] rounded-lg border border-gray-300 bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="text-center mb-4">
          <h3 className="font-bold text-lg mb-2">1st Planner Ltd</h3>
          <p className="text-gray-600 mb-2">{officeLocation.address}</p>
          <p className="text-sm text-gray-500">53° 7'23.30"N, 1°33'31.81"W</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
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

  return (
    <div className="relative">
      <div
        ref={mapRef}
        className="w-full h-[400px] rounded-lg border border-gray-300 bg-gray-100"
        style={{ position: "relative" }}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Loading map...</p>
            </div>
          </div>
        )}
      </div>

      {!isLoading && !mapError && (
        <>
          <div className="mt-2 text-right">
            <a
              href={`https://www.openstreetmap.org/?mlat=${officeLocation.lat}&mlon=${officeLocation.lng}&zoom=18`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline inline-flex items-center"
            >
              View larger map
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        </>
      )}
    </div>
  )
}

declare global {
  interface Window {
    L: any
  }
}
