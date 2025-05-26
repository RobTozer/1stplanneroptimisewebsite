"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MapPin, Map, Globe } from "lucide-react"
import { KMLUploader } from "./kml-uploader"

// Default client data with coordinates
const defaultClients = [
  // Local Authorities
  { id: 1, name: "Sheffield City Council", type: "LA", postcode: "S1 2HH", lat: 53.38, lng: -1.47 },
  { id: 2, name: "Wolverhampton Council", type: "LA", postcode: "WV1 1SH", lat: 52.59, lng: -2.11 },
  { id: 3, name: "Manchester City Council", type: "LA", postcode: "M2 5DB", lat: 53.48, lng: -2.24 },
  { id: 4, name: "Liverpool City Council", type: "LA", postcode: "L2 3HN", lat: 53.41, lng: -2.99 },
  { id: 5, name: "Newcastle City Council", type: "LA", postcode: "NE1 8QH", lat: 54.97, lng: -1.61 },
  { id: 6, name: "Durham County Council", type: "LA", postcode: "DH1 5UL", lat: 54.78, lng: -1.57 },
  { id: 7, name: "Leeds City Council", type: "LA", postcode: "LS1 1UR", lat: 53.8, lng: -1.55 },
  { id: 8, name: "Bristol City Council", type: "LA", postcode: "BS1 5TR", lat: 51.45, lng: -2.59 },
  { id: 9, name: "Birmingham City Council", type: "LA", postcode: "B1 1BB", lat: 52.48, lng: -1.91 },
  { id: 10, name: "Nottingham City Council", type: "LA", postcode: "NG1 2DT", lat: 52.95, lng: -1.15 },
  { id: 11, name: "Leicester City Council", type: "LA", postcode: "LE1 6ZG", lat: 52.63, lng: -1.13 },
  { id: 12, name: "Norfolk County Council", type: "LA", postcode: "NR1 2DH", lat: 52.63, lng: 1.3 },

  // Dioceses
  { id: 13, name: "Diocese of Birmingham", type: "Diocese", postcode: "B3 2QB", lat: 52.49, lng: -1.9 },
  { id: 14, name: "Diocese of Shrewsbury", type: "Diocese", postcode: "SY1 1TE", lat: 52.71, lng: -2.75 },
  { id: 15, name: "Diocese of Westminster", type: "Diocese", postcode: "SW1P 1QJ", lat: 51.49, lng: -0.14 },
  { id: 16, name: "Diocese of Lancaster", type: "Diocese", postcode: "LA1 3BT", lat: 54.05, lng: -2.8 },
  { id: 17, name: "York Diocese", type: "Diocese", postcode: "YO1 7JF", lat: 53.96, lng: -1.08 },
  { id: 18, name: "Diocese of Clifton", type: "Diocese", postcode: "BS8 1LE", lat: 51.46, lng: -2.62 },

  // Multi-Academy Trusts
  { id: 19, name: "Meridian Trust", type: "MAT", postcode: "CB1 2JD", lat: 52.2, lng: 0.13 },
  { id: 20, name: "Diverse Academies", type: "MAT", postcode: "NG22 0JH", lat: 53.2, lng: -0.96 },
  { id: 21, name: "United Learning Trust", type: "MAT", postcode: "OX4 2JY", lat: 51.75, lng: -1.24 },
  { id: 22, name: "Ark Schools", type: "MAT", postcode: "W11 4AN", lat: 51.51, lng: -0.2 },
]

// Map dimensions
const MAP_WIDTH = 1000
const MAP_HEIGHT = 800

// UK bounds (approximate)
const UK_NORTH = 58.7 // Northern tip of Scotland
const UK_SOUTH = 50.0 // Southern tip of England
const UK_WEST = -8.2 // Western Ireland
const UK_EAST = 1.8 // Eastern England

// Convert lat/lng to x/y coordinates on our 2D map
const convertTo2DMapCoordinates = (lat: number, lng: number) => {
  // Calculate position as percentage across the map
  const x = ((lng - UK_WEST) / (UK_EAST - UK_WEST)) * 100
  const y = ((UK_NORTH - lat) / (UK_NORTH - UK_SOUTH)) * 100

  return { x, y }
}

// Convert lat/lng to x/y coordinates on our 3D map (with perspective adjustment)
const convertTo3DMapCoordinates = (lat: number, lng: number) => {
  // Calculate position as percentage across the map with perspective adjustment
  const x = ((lng - UK_WEST) / (UK_EAST - UK_WEST)) * 100

  // Apply a slight perspective transformation for 3D effect
  // Northern points appear smaller/further away
  const perspectiveFactor = 1 + ((UK_NORTH - lat) / (UK_NORTH - UK_SOUTH)) * 0.2
  const y = (((UK_NORTH - lat) / (UK_NORTH - UK_SOUTH)) * 100) / perspectiveFactor

  return { x, y }
}

// Generate KML file for current clients
const generateKML = (clients: any[]) => {
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

  clients.forEach((client) => {
    const styleUrl =
      client.type === "LA"
        ? "#LA_style"
        : client.type === "Diocese"
          ? "#Diocese_style"
          : client.type === "MAT"
            ? "#MAT_style"
            : "#LA_style"

    kml += `    <Placemark id="client-${client.id}">
      <name>${client.name}</name>
      <description>${client.postcode}</description>
      <styleUrl>${styleUrl}</styleUrl>
      <ExtendedData>
        <Data name="type">
          <value>${client.type}</value>
        </Data>
        <Data name="postcode">
          <value>${client.postcode}</value>
        </Data>
      </ExtendedData>
      <Point>
        <coordinates>${client.lng},${client.lat},0</coordinates>
      </Point>
    </Placemark>\n`
  })

  kml += `  </Document>
</kml>`

  return kml
}

// Download KML file
const downloadKML = (clients: any[]) => {
  const kml = generateKML(clients)
  const blob = new Blob([kml], { type: "application/vnd.google-earth.kml+xml" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "1st-planner-clients.kml"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export const GoogleEarthClientMap = () => {
  const [clients, setClients] = useState(defaultClients)
  const [activeFilters, setActiveFilters] = useState<string[]>(["LA", "Diocese", "MAT"])
  const [hoveredClient, setHoveredClient] = useState<number | null>(null)
  const [selectedClient, setSelectedClient] = useState<number | null>(null)
  const [is3DView, setIs3DView] = useState(true)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [kmlLoaded, setKmlLoaded] = useState(false)

  useEffect(() => {
    // Reset selected client when switching views
    setSelectedClient(null)
  }, [is3DView])

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const filteredClients = clients.filter((client) => activeFilters.includes(client.type))

  const getClientColor = (type: string) => {
    switch (type) {
      case "LA":
        return "bg-blue-500"
      case "Diocese":
        return "bg-purple-500"
      case "MAT":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getClientBorderColor = (type: string) => {
    switch (type) {
      case "LA":
        return "border-blue-700"
      case "Diocese":
        return "border-purple-700"
      case "MAT":
        return "border-green-700"
      default:
        return "border-gray-700"
    }
  }

  const handleKMLLoaded = (kmlData: any) => {
    if (kmlData && kmlData.placemarks && kmlData.placemarks.length > 0) {
      // Convert KML placemarks to client format
      const newClients = kmlData.placemarks.map((placemark: any, index: number) => ({
        id: index + 1,
        name: placemark.name,
        type: placemark.type || "Unknown",
        postcode: placemark.properties?.postcode || "Unknown",
        lat: placemark.coordinates.lat,
        lng: placemark.coordinates.lng,
        description: placemark.description,
      }))

      setClients(newClients)
      setKmlLoaded(true)
    }
  }

  const resetToDefaultClients = () => {
    setClients(defaultClients)
    setKmlLoaded(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeFilters.includes("LA") ? "default" : "outline"}
            className={activeFilters.includes("LA") ? "bg-blue-500 hover:bg-blue-600" : ""}
            onClick={() => toggleFilter("LA")}
          >
            <MapPin className="h-4 w-4 mr-1" />
            Local Authorities
          </Button>
          <Button
            variant={activeFilters.includes("Diocese") ? "default" : "outline"}
            className={activeFilters.includes("Diocese") ? "bg-purple-500 hover:bg-purple-600" : ""}
            onClick={() => toggleFilter("Diocese")}
          >
            <MapPin className="h-4 w-4 mr-1" />
            Dioceses
          </Button>
          <Button
            variant={activeFilters.includes("MAT") ? "default" : "outline"}
            className={activeFilters.includes("MAT") ? "bg-green-500 hover:bg-green-600" : ""}
            onClick={() => toggleFilter("MAT")}
          >
            <MapPin className="h-4 w-4 mr-1" />
            Multi-Academy Trusts
          </Button>
        </div>

        <div className="flex gap-2">
          <Button
            variant={!is3DView ? "default" : "outline"}
            onClick={() => setIs3DView(false)}
            className="flex items-center"
          >
            <Map className="h-4 w-4 mr-1" />
            2D View
          </Button>
          <Button
            variant={is3DView ? "default" : "outline"}
            onClick={() => setIs3DView(true)}
            className="flex items-center"
          >
            <Globe className="h-4 w-4 mr-1" />
            3D View
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
        <KMLUploader onKMLLoaded={handleKMLLoaded} />

        <div className="flex gap-2">
          {kmlLoaded && (
            <Button variant="outline" onClick={resetToDefaultClients} className="flex items-center">
              Reset to Default
            </Button>
          )}
        </div>
      </div>

      <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-md bg-black">
        {/* 3D View */}
        {is3DView && (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src="/angled-uk-terrain.png"
              alt="3D Google Earth view of the United Kingdom"
              fill
              className="object-cover"
              priority
              onLoad={() => setMapLoaded(true)}
            />
          </div>
        )}

        {/* 2D View */}
        {!is3DView && (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src="/uk-satellite-2d.png"
              alt="2D satellite view of the United Kingdom"
              fill
              className="object-cover"
              priority
              onLoad={() => setMapLoaded(true)}
            />
          </div>
        )}

        {/* Loading state */}
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="text-white">Loading map...</div>
          </div>
        )}

        <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-md shadow-md z-10">
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

        <TooltipProvider>
          {filteredClients.map((client) => {
            // Use different coordinate systems based on the current view
            const { x, y } = is3DView
              ? convertTo3DMapCoordinates(client.lat, client.lng)
              : convertTo2DMapCoordinates(client.lat, client.lng)

            const isSelected = selectedClient === client.id
            const isHovered = hoveredClient === client.id

            return (
              <Tooltip key={client.id}>
                <TooltipTrigger asChild>
                  <div
                    className={`absolute ${getClientColor(client.type)} border-2 ${getClientBorderColor(client.type)} rounded-full shadow-lg cursor-pointer z-20 transition-all duration-200 transform hover:scale-125 ${isSelected ? "scale-150 ring-2 ring-white" : ""}`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      width: isSelected || isHovered ? "16px" : "12px",
                      height: isSelected || isHovered ? "16px" : "12px",
                      transform: `translate(-50%, -50%) ${isSelected || isHovered ? "scale(1.2)" : ""}`,
                    }}
                    onMouseEnter={() => setHoveredClient(client.id)}
                    onMouseLeave={() => setHoveredClient(null)}
                    onClick={() => setSelectedClient(isSelected ? null : client.id)}
                  />
                </TooltipTrigger>
                <TooltipContent side="top">
                  <div className="text-sm font-medium">{client.name}</div>
                  <div className="text-xs text-gray-500">{client.type}</div>
                  <div className="text-xs">{client.postcode}</div>
                </TooltipContent>
              </Tooltip>
            )
          })}
        </TooltipProvider>

        {selectedClient && (
          <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-md shadow-md z-10 max-w-xs">
            <div className="text-lg font-medium mb-1">{clients.find((c) => c.id === selectedClient)?.name}</div>
            <div className="flex items-center mb-2">
              <div
                className={`w-3 h-3 rounded-full ${getClientColor(clients.find((c) => c.id === selectedClient)?.type || "")} mr-2`}
              ></div>
              <div className="text-sm">{clients.find((c) => c.id === selectedClient)?.type}</div>
            </div>
            <div className="text-sm mb-1">
              <strong>Postcode:</strong> {clients.find((c) => c.id === selectedClient)?.postcode}
            </div>
            <div className="text-sm">
              <strong>Coordinates:</strong> {clients.find((c) => c.id === selectedClient)?.lat.toFixed(2)},{" "}
              {clients.find((c) => c.id === selectedClient)?.lng.toFixed(2)}
            </div>
            <Button variant="outline" size="sm" className="mt-2 w-full" onClick={() => setSelectedClient(null)}>
              Close
            </Button>
          </div>
        )}

        {hoveredClient && !selectedClient && (
          <div className="absolute bottom-4 left-4 bg-white/80 p-3 rounded-md shadow-md z-10">
            <div className="text-sm font-medium">{clients.find((c) => c.id === hoveredClient)?.name}</div>
            <div className="text-xs text-gray-600">{clients.find((c) => c.id === hoveredClient)?.type}</div>
          </div>
        )}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-medium mb-2">Client Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-sm font-medium text-blue-600 mb-1">
              Local Authorities ({clients.filter((c) => c.type === "LA").length})
            </h4>
            <ul className="text-xs space-y-1">
              {clients
                .filter((c) => c.type === "LA")
                .slice(0, 5)
                .map((client) => (
                  <li
                    key={client.id}
                    className="cursor-pointer hover:text-blue-600"
                    onClick={() => setSelectedClient(client.id)}
                  >
                    {client.name}
                  </li>
                ))}
              {clients.filter((c) => c.type === "LA").length > 5 && (
                <li className="text-gray-500">+ {clients.filter((c) => c.type === "LA").length - 5} more</li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-purple-600 mb-1">
              Dioceses ({clients.filter((c) => c.type === "Diocese").length})
            </h4>
            <ul className="text-xs space-y-1">
              {clients
                .filter((c) => c.type === "Diocese")
                .slice(0, 5)
                .map((client) => (
                  <li
                    key={client.id}
                    className="cursor-pointer hover:text-purple-600"
                    onClick={() => setSelectedClient(client.id)}
                  >
                    {client.name}
                  </li>
                ))}
              {clients.filter((c) => c.type === "Diocese").length > 5 && (
                <li className="text-gray-500">+ {clients.filter((c) => c.type === "Diocese").length - 5} more</li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-green-600 mb-1">
              Multi-Academy Trusts ({clients.filter((c) => c.type === "MAT").length})
            </h4>
            <ul className="text-xs space-y-1">
              {clients
                .filter((c) => c.type === "MAT")
                .slice(0, 5)
                .map((client) => (
                  <li
                    key={client.id}
                    className="cursor-pointer hover:text-green-600"
                    onClick={() => setSelectedClient(client.id)}
                  >
                    {client.name}
                  </li>
                ))}
              {clients.filter((c) => c.type === "MAT").length > 5 && (
                <li className="text-gray-500">+ {clients.filter((c) => c.type === "MAT").length - 5} more</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
