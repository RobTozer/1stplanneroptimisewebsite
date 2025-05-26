"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Map, ViewIcon as StreetView, Globe, Download, Layers } from "lucide-react"
import { KMLUploader } from "./kml-uploader"

// Declare google variable
declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

interface DynamicGoogleEarthMapProps {
  initialKmlData?: any
}

export function DynamicGoogleEarthMap({ initialKmlData }: DynamicGoogleEarthMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any>(null)
  const [kmlLayer, setKmlLayer] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isStreetView, setIsStreetView] = useState(false)
  const [is3DView, setIs3DView] = useState(true)
  const [mapType, setMapType] = useState<string>("hybrid") // Use string instead of google.maps.MapTypeId
  const [kmlUrl, setKmlUrl] = useState<string | null>(null)
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false)

  // Initialize the map
  useEffect(() => {
    // Check if Google Maps API is loaded
    if (typeof window !== "undefined" && !window.google) {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap`
      script.async = true
      script.defer = true

      // Define the callback function
      window.initMap = () => {
        setGoogleMapsLoaded(true)
        initializeMap()
      }

      document.head.appendChild(script)
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script)
        }
        if (window.initMap) {
          delete window.initMap
        }
      }
    } else if (typeof window !== "undefined" && window.google) {
      setGoogleMapsLoaded(true)
      initializeMap()
    }
  }, [])

  // Function to initialize the map
  const initializeMap = () => {
    if (!mapRef.current || !googleMapsLoaded) return

    try {
      // Center on UK
      const mapOptions = {
        center: { lat: 54.0, lng: -2.0 },
        zoom: 6,
        mapTypeId: getGoogleMapType(mapType),
        streetViewControl: true,
        tilt: is3DView ? 45 : 0,
      }

      const newMap = new window.google.maps.Map(mapRef.current, mapOptions)
      setMap(newMap)
      setIsLoading(false)
    } catch (error) {
      console.error("Error initializing map:", error)
      setIsLoading(false)
    }
  }

  // Helper function to get Google Maps type
  const getGoogleMapType = (type: string) => {
    if (!googleMapsLoaded) return type

    switch (type) {
      case "roadmap":
        return window.google.maps.MapTypeId.ROADMAP
      case "satellite":
        return window.google.maps.MapTypeId.SATELLITE
      case "hybrid":
        return window.google.maps.MapTypeId.HYBRID
      case "terrain":
        return window.google.maps.MapTypeId.TERRAIN
      default:
        return window.google.maps.MapTypeId.HYBRID
    }
  }

  // Update map type and 3D view
  useEffect(() => {
    if (!map || !googleMapsLoaded) return

    map.setMapTypeId(getGoogleMapType(mapType))

    // Set tilt for 3D effect
    if (is3DView) {
      map.setTilt(45)
    } else {
      map.setTilt(0)
    }
  }, [map, mapType, is3DView, googleMapsLoaded])

  // Handle KML data loading
  const handleKMLLoaded = (kmlData: any) => {
    if (!map || !googleMapsLoaded) return

    // Create a temporary KML file and get its URL
    const kml = generateKML(kmlData.placemarks)
    const blob = new Blob([kml], { type: "application/vnd.google-earth.kml+xml" })
    const url = URL.createObjectURL(blob)
    setKmlUrl(url)

    // Remove existing KML layer if it exists
    if (kmlLayer) {
      kmlLayer.setMap(null)
    }

    // Create new KML layer
    const newKmlLayer = new window.google.maps.KmlLayer({
      url: url,
      map: map,
      preserveViewport: false,
    })

    setKmlLayer(newKmlLayer)

    // Listen for status changes
    newKmlLayer.addListener("status_changed", () => {
      const status = newKmlLayer.getStatus()
      if (status !== "OK") {
        console.error("KML Layer error:", status)
      }
    })
  }

  // Generate KML string from placemarks
  const generateKML = (placemarks: any[]) => {
    let kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>1st Planner Clients</name>
    <description>Client locations for 1st Planner</description>\n`

    // Add styles for different client types
    kml += `    <Style id="LA_style">
      <IconStyle>
        <color>ffff0000</color>
        <scale>1.2</scale>
        <Icon>
          <href>http://maps.google.com/mapfiles/kml/paddle/blu-circle.png</href>
        </Icon>
      </IconStyle>
    </Style>
    <Style id="Diocese_style">
      <IconStyle>
        <color>ff800080</color>
        <scale>1.2</scale>
        <Icon>
          <href>http://maps.google.com/mapfiles/kml/paddle/purple-circle.png</href>
        </Icon>
      </IconStyle>
    </Style>
    <Style id="MAT_style">
      <IconStyle>
        <color>ff008000</color>
        <scale>1.2</scale>
        <Icon>
          <href>http://maps.google.com/mapfiles/kml/paddle/grn-circle.png</href>
        </Icon>
      </IconStyle>
    </Style>\n`

    placemarks.forEach((placemark, index) => {
      const styleUrl =
        placemark.type === "LA"
          ? "#LA_style"
          : placemark.type === "Diocese"
            ? "#Diocese_style"
            : placemark.type === "MAT"
              ? "#MAT_style"
              : "#LA_style"

      kml += `    <Placemark id="client-${index}">
      <name>${placemark.name}</name>
      <description>${placemark.description || placemark.postcode || ""}</description>
      <styleUrl>${styleUrl}</styleUrl>
      <ExtendedData>
        <Data name="type">
          <value>${placemark.type}</value>
        </Data>
        ${
          placemark.postcode
            ? `<Data name="postcode">
          <value>${placemark.postcode}</value>
        </Data>`
            : ""
        }
      </ExtendedData>
      <Point>
        <coordinates>${placemark.coordinates.lng},${placemark.coordinates.lat},0</coordinates>
      </Point>
    </Placemark>\n`
    })

    kml += `  </Document>
</kml>`

    return kml
  }

  // Toggle street view
  const toggleStreetView = () => {
    if (!map || !googleMapsLoaded) return

    setIsStreetView(!isStreetView)

    const panorama = map.getStreetView()
    if (!isStreetView) {
      // Get current center
      const center = map.getCenter()
      if (center) {
        panorama.setPosition(center)
        panorama.setPov({
          heading: 0,
          pitch: 0,
        })
        panorama.setVisible(true)
      }
    } else {
      panorama.setVisible(false)
    }
  }

  // Toggle 3D view
  const toggle3DView = () => {
    setIs3DView(!is3DView)
  }

  // Change map type
  const changeMapType = (type: string) => {
    setMapType(type)
  }

  // Download current KML
  const downloadKML = () => {
    if (!kmlUrl) return

    const a = document.createElement("a")
    a.href = kmlUrl
    a.download = "1st-planner-clients.kml"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={mapType === "roadmap" ? "default" : "outline"}
            onClick={() => changeMapType("roadmap")}
            className="flex items-center"
          >
            <Map className="h-4 w-4 mr-1" />
            Road Map
          </Button>
          <Button
            variant={mapType === "satellite" ? "default" : "outline"}
            onClick={() => changeMapType("satellite")}
            className="flex items-center"
          >
            <Globe className="h-4 w-4 mr-1" />
            Satellite
          </Button>
          <Button
            variant={mapType === "hybrid" ? "default" : "outline"}
            onClick={() => changeMapType("hybrid")}
            className="flex items-center"
          >
            <Layers className="h-4 w-4 mr-1" />
            Hybrid
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant={!is3DView ? "default" : "outline"} onClick={toggle3DView} className="flex items-center">
            <Map className="h-4 w-4 mr-1" />
            2D View
          </Button>
          <Button variant={is3DView ? "default" : "outline"} onClick={toggle3DView} className="flex items-center">
            <Globe className="h-4 w-4 mr-1" />
            3D View
          </Button>
          <Button
            variant={isStreetView ? "default" : "outline"}
            onClick={toggleStreetView}
            className="flex items-center"
            disabled={!googleMapsLoaded}
          >
            <StreetView className="h-4 w-4 mr-1" />
            Street View
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
        <KMLUploader onKMLLoaded={handleKMLLoaded} />

        {kmlUrl && (
          <Button variant="outline" onClick={downloadKML} className="flex items-center">
            <Download className="h-4 w-4 mr-1" />
            Export KML
          </Button>
        )}
      </div>

      <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <div className="flex items-center">
              <Loader2 className="h-6 w-6 animate-spin mr-2" />
              <span>Loading Google Earth...</span>
            </div>
          </div>
        )}

        <div ref={mapRef} className="w-full h-full" />

        <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-md shadow-md z-10">
          <div className="text-sm font-medium mb-2">Client Types</div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-xs">Local Authorities</span>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <span className="text-xs">Dioceses</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-xs">Multi-Academy Trusts</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-medium mb-2">Using the Dynamic Google Earth Map</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Upload your KML file to see client locations on the map</li>
          <li>Toggle between different map views (Road, Satellite, Hybrid)</li>
          <li>Switch between 2D and 3D perspectives</li>
          <li>Use Street View to explore locations at ground level</li>
          <li>Click on markers to see client details</li>
          <li>Export the current KML data for use in Google Earth Pro</li>
        </ul>
      </div>
    </div>
  )
}
