"use client"

import { useEffect, useRef, useState } from "react"
import { clients, regionColors, typeColors } from "@/data/clients"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Script from "next/script"

type ClientRegion = "North" | "Midlands" | "South" | "Wales"
type ClientType = "Diocese" | "Local Authority" | "Multi Academy Trust"

export function ClientMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [activeRegion, setActiveRegion] = useState<ClientRegion | "All">("All")
  const [activeType, setActiveType] = useState<ClientType | "All">("All")
  const [mapError, setMapError] = useState<string | null>(null)
  const [selectedClient, setSelectedClient] = useState<string | null>(null)
  const [clientsInView, setClientsInView] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)

  // Precise geocoding for each client based on postcode
  const clientGeocode: Record<string, { lat: number; lng: number }> = {
    // Diocese
    "Archdiocese of Birmingham": { lat: 52.5098, lng: -1.7191 }, // B46 3EA
    "Archdiocese of Liverpool": { lat: 53.3806, lng: -2.9372 }, // L17 1AA
    "Archdiocese of Westminster": { lat: 51.4975, lng: -0.1357 }, // SW1P 1QN
    "Diocese of Brentwood": { lat: 51.6307, lng: 0.301 }, // CM15 8AT
    "Diocese of East Anglia": { lat: 52.5584, lng: 1.3089 }, // NR14 7SH
    "Diocese of Portsmouth": { lat: 50.796, lng: -1.0873 }, // PO1 3QA
    "Diocese of Shrewsbury": { lat: 53.3743, lng: -3.04 }, // CH43 4UX

    // Local Authorities
    "Birmingham City Council": { lat: 52.4834, lng: -1.8994 }, // B4 7DJ
    "Blackpool Council": { lat: 53.7812, lng: -3.0352 }, // FY4 1AF
    "Bristol City Council": { lat: 51.4545, lng: -2.5879 }, // BS1 5TR
    "Buckinghamshire County Council": { lat: 51.8156, lng: -0.8125 }, // HP20 1UA
    "Cambridgeshire County Council": { lat: 52.2053, lng: 0.1218 }, // CB2 3QJ
    "City of Wolverhampton Council": { lat: 52.5871, lng: -2.1288 }, // WV1 1SH
    "Coventry City Council": { lat: 52.4081, lng: -1.5106 }, // CV1 5RR
    "Darlington Borough Council": { lat: 54.5262, lng: -1.5532 }, // DL1 5QT
    "Derby City Council": { lat: 52.9225, lng: -1.4746 }, // DE1 2FS
    "Doncaster Metropolitan Borough Council": { lat: 53.5225, lng: -1.1335 }, // DN1 3BU
    "Dudley Council": { lat: 52.5095, lng: -2.0812 }, // DY1 1HZ
    "Durham County Council": { lat: 54.7753, lng: -1.5849 }, // DH1 5UL
    "Hackney Council": { lat: 51.5449, lng: -0.0546 }, // E8 1DY
    "Hertfordshire County Council": { lat: 51.9023, lng: -0.2066 }, // SG1 2FQ
    "Kirklees Council": { lat: 53.6458, lng: -1.785 }, // HD1 2EY
    "Knowsley Metropolitan Borough Council": { lat: 53.4256, lng: -2.8549 }, // L36 9UX
    "London Borough of Lewisham Council": { lat: 51.4415, lng: -0.0176 }, // SE6 4RU
    "Nottingham City Council": { lat: 52.9548, lng: -1.1581 }, // NG2 3NG
    "Peterborough City Council": { lat: 52.5695, lng: -0.2405 }, // PE2 8TY
    "Sheffield City Council": { lat: 53.3806, lng: -1.4702 }, // S1 2HH
    "Solihull Metropolitan Borough Council": { lat: 52.4118, lng: -1.7776 }, // B91 3QB
    "Suffolk County Council": { lat: 52.4751, lng: 1.7543 }, // NR33 0EQ
    "Tameside Metropolitan Borough Council": { lat: 53.4884, lng: -2.0953 }, // OL6 0GS
    "Telford and Wrekin": { lat: 52.6699, lng: -2.4494 }, // TF3 4JA
    "Warwickshire County Council": { lat: 52.2823, lng: -1.5849 }, // CV34 4RL
    "Westmorland and Furness Council": { lat: 54.1172, lng: -3.2253 }, // LA14 2LD
    "Worcestershire Children First": { lat: 52.1991, lng: -2.1692 }, // WR5 2NP
    "Worcestershire County Council": { lat: 52.1991, lng: -2.1692 }, // WR5 2NP

    // Multi Academy Trusts
    "Abbey College, Ramsey": { lat: 52.4486, lng: -0.1031 }, // PE26 1DG
    "Anthem Schools Trust": { lat: 51.4584, lng: -0.9779 }, // RG1 4RU
    "Aspire Academy Trust": { lat: 50.3423, lng: -4.7868 }, // PL25 4FD
    BMAT: { lat: 51.7676, lng: 0.1098 }, // CM20 2NR
    "BMAT Education": { lat: 51.7676, lng: 0.1098 }, // CM20 2NR
    "Cabot Learning Federation": { lat: 51.4635, lng: -2.5101 }, // BS15 4JT
    "Cambridge Meridian Academies Trust": { lat: 52.3625, lng: -0.2234 }, // PE28 5TQ
    "Castle Business and Enterprise College": { lat: 52.6207, lng: -2.0234 }, // WS3 2ED
    "CfBT Schools Trust": { lat: 51.4584, lng: -0.9779 }, // RG1 4RU
    "Chellaston Academy": { lat: 52.8839, lng: -1.4334 }, // DE73 5UB
    "Christ The King Catholic Collegiate": { lat: 53.006, lng: -2.1794 }, // ST4 6SP
    "Consilium Academies": { lat: 53.5004, lng: -2.353 }, // M30 0BG
    "Diverse Academies Trust": { lat: 53.3236, lng: -0.94 }, // DN22 7EA
    "Djanogly Learning Trust": { lat: 52.9659, lng: -1.1634 }, // NG7 7AR
    "Emmanuel Schools Foundation": { lat: 55.1336, lng: -1.5223 }, // NE24 2SY
    "Esteem Multi-Academy Trust": { lat: 53.0465, lng: -1.2496 }, // NG15 0DT
    "Fairfax Multi Academy Trust": { lat: 52.581, lng: -1.8057 }, // B75 7JT
    "Fountains Primary School": { lat: 52.8139, lng: -1.6362 }, // DE13 0HB
    "Healing Multi Academy Trust": { lat: 53.5868, lng: -0.139 }, // DN41 7QD
    "Landau Forte Charitable Trust": { lat: 52.9225, lng: -1.4746 }, // DE1 2LF
    "LEAD Academy Trust": { lat: 52.9548, lng: -1.1581 }, // NG1 5DU
    "Leigh Academies Trust": { lat: 51.4023, lng: 0.49 }, // ME2 2SX
    "Leodis Academies Trust": { lat: 53.7457, lng: -1.5483 }, // WF3 1JQ
    "Maritime Academy Trust": { lat: 51.4486, lng: 0.2731 }, // DA10 1AL
    "Minerva Learning Trust": { lat: 53.3957, lng: -1.4214 }, // S9 1XU
    "Nene Education Trust": { lat: 52.3405, lng: -0.595 }, // NN9 5QF
    "Northern Star Academies Trust": { lat: 53.9915, lng: -2.0173 }, // BD23 1QN
    "Our Lady of the Magnificat": { lat: 52.2911, lng: -1.5387 }, // CV32 6NB
    "Peak Multi Academy Trust": { lat: 52.8839, lng: -1.4334 }, // DE73 5UB
    QEGSMAT: { lat: 52.9994, lng: -1.7359 }, // DE6 1EP
    "RESPECT Collaboration of Schools": { lat: 52.9019, lng: -1.465 }, // DE24 8AN
    "River Learning Trust": { lat: 51.8233, lng: -1.3278 }, // OX5 2NT
    "St Benedicts Catholic Academy Trust": { lat: 51.3762, lng: -0.0982 }, // CR0 2RD
    "St Francis and St Clare Catholic MAC": { lat: 52.6099, lng: -2.1163 }, // WV10 8BL
    "St Ralph Sherwin Catholic Multi Academy Trust": { lat: 52.9225, lng: -1.4746 }, // DE1 3TQ
    "Tapton School Academy Trust": { lat: 53.3806, lng: -1.5072 }, // S10 5RG
    "The Diocese of Westminster Academy Trust": { lat: 51.5762, lng: -0.37 }, // HA5 3EP
    "The Evolve Trust": { lat: 53.1396, lng: -1.1869 }, // NG19 6DX
    "The Harmony Trust Ltd": { lat: 53.5403, lng: -2.0992 }, // OL4 1RR
    "The Learners' Trust": { lat: 53.3077, lng: -1.3543 }, // S21 4DA
    "The Learning Trust": { lat: 53.1873, lng: -2.8936 }, // CH3 7AD
    "The Primary First Trust": { lat: 51.4486, lng: 0.2731 }, // DA11 0DY
    "The Shaw Education Trust": { lat: 53.006, lng: -2.2447 }, // ST7 4DL
    "Two Counties Trust": { lat: 53.1023, lng: -1.2463 }, // NG17 8HP
    "White Horse Federation": { lat: 51.5587, lng: -1.7797 }, // SN1 2LB
  }

  // Handle script loading completion
  const handleScriptsLoaded = () => {
    if (!scriptsLoaded) {
      setScriptsLoaded(true)
    }
  }

  useEffect(() => {
    // Skip if we're not in the browser or the ref isn't attached
    if (typeof window === "undefined" || !mapRef.current || !scriptsLoaded) return

    let isMounted = true

    // Check if map is already initialized on this container
    if (mapInstanceRef.current) {
      console.log("Map already initialized, cleaning up first")
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    const markers: any[] = []

    const initMap = async () => {
      try {
        // Check if component is still mounted
        if (!isMounted || !mapRef.current) return

        // Access Leaflet from the global scope
        const L = window.L

        if (!L) {
          throw new Error("Leaflet library not available")
        }

        // Fix for Leaflet icon issues in webpack
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        })

        // Center on UK
        const ukCenter = { lat: 52.5, lng: -2.0 }

        // Create the map
        const newMap = L.map(mapRef.current).setView([ukCenter.lat, ukCenter.lng], 6)
        mapInstanceRef.current = newMap

        // Add tile layer (OpenStreetMap)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(newMap)

        // Add satellite layer option
        const satelliteLayer = L.tileLayer(
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          {
            attribution:
              "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
            maxZoom: 19,
          },
        )

        // Add layer control
        const baseMaps = {
          "Street Map": L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
          }),
          Satellite: satelliteLayer,
        }

        L.control.layers(baseMaps).addTo(newMap)

        // Create bounds to fit all visible markers
        const bounds = new L.LatLngBounds([])
        let hasVisibleMarkers = false
        const visibleClients: string[] = []

        // Add markers for clients
        clients.forEach((client) => {
          const position = clientGeocode[client.name]
          const isTypeMatch = activeType === "All" || client.type === activeType
          const isRegionMatch = activeRegion === "All" || client.region === activeRegion

          if (position && isTypeMatch && isRegionMatch) {
            hasVisibleMarkers = true
            bounds.extend([position.lat, position.lng])
            visibleClients.push(client.name)

            // Create custom icon with client type color
            const icon = L.divIcon({
              className: "custom-div-icon",
              html: `<div style="background-color: ${typeColors[client.type]}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
              iconSize: [20, 20],
              iconAnchor: [10, 10],
            })

            const marker = L.marker([position.lat, position.lng], { icon }).addTo(newMap)

            // Add click listener to marker
            marker.on("click", () => {
              setSelectedClient(client.name)

              // Create popup content
              const popupContent = `
                <div style="padding: 8px; max-width: 200px;">
                  <h3 style="font-weight: bold; margin-bottom: 5px;">${client.name}</h3>
                  <p style="margin: 0 0 5px; font-size: 12px;">${client.type} - ${client.region}</p>
                  <p style="margin: 0; font-size: 12px;">${client.postcode}</p>
                </div>
              `

              // Open popup
              marker.bindPopup(popupContent).openPopup()
            })

            markers.push(marker)
          }
        })

        setClientsInView(visibleClients)

        // Fit bounds if we have visible markers
        if (hasVisibleMarkers) {
          newMap.fitBounds(bounds)

          // Don't zoom in too far on small datasets
          if (newMap.getZoom() > 8) {
            newMap.setZoom(8)
          }
        }

        // Make sure we're still mounted before updating state
        if (!isMounted) return
        setIsLoading(false)
      } catch (error) {
        console.error("Error initializing map:", error)
        if (isMounted) {
          if (!isMounted) return
          setMapError(error instanceof Error ? error.message : "Failed to initialize map")
          setIsLoading(false)
        }
      }
    }

    initMap()

    // Cleanup function
    return () => {
      isMounted = false

      // Clear markers
      if (markers.length > 0) {
        markers.forEach((marker) => {
          if (marker && marker.remove) marker.remove()
        })
      }

      // Remove the map instance
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [activeRegion, activeType, scriptsLoaded])

  // Group clients by region and type for the tables
  const clientsByRegion = clients.reduce(
    (acc, client) => {
      if (!acc[client.region]) {
        acc[client.region] = []
      }
      acc[client.region].push(client)
      return acc
    },
    {} as Record<ClientRegion, typeof clients>,
  )

  if (mapError) {
    return (
      <div className="w-full h-[500px] rounded-lg border border-gray-300 bg-gray-100 flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-500 mb-2">{mapError}</p>
          <p className="text-gray-600">
            Our clients are located across the UK. Please contact us for more information.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Load Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      {/* Load Leaflet JS */}
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""
        onLoad={handleScriptsLoaded}
      />

      <div className="flex flex-col md:flex-row gap-4 sticky top-0 z-10 bg-white p-4 shadow-sm rounded-md w-full">
        <Tabs
          defaultValue="All"
          onValueChange={(value) => setActiveRegion(value as ClientRegion | "All")}
          className="w-full"
        >
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="All" className="flex-1">
              All Regions
            </TabsTrigger>
            <TabsTrigger value="North" className="flex-1">
              North
            </TabsTrigger>
            <TabsTrigger value="Midlands" className="flex-1">
              Midlands
            </TabsTrigger>
            <TabsTrigger value="South" className="flex-1">
              South
            </TabsTrigger>
            <TabsTrigger value="Wales" className="flex-1">
              Wales
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Tabs
          defaultValue="All"
          onValueChange={(value) => setActiveType(value as ClientType | "All")}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="All" className="flex-1">
              All Types
            </TabsTrigger>
            <TabsTrigger value="Diocese" className="flex-1">
              Diocese
            </TabsTrigger>
            <TabsTrigger value="Local Authority" className="flex-1">
              Local Authority
            </TabsTrigger>
            <TabsTrigger value="Multi Academy Trust" className="flex-1">
              MAT
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <div className="relative">
            <div
              ref={mapRef}
              className="w-full rounded-lg border border-gray-300 shadow-md"
              style={{ height: "500px" }}
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 z-50">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            {Object.entries(typeColors).map(([type, color]) => (
              <div key={type} className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: color }} />
                <span className="text-sm">{type}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-4">
                {activeRegion === "All" ? "All Clients" : `${activeRegion} Region`}
                {activeType !== "All" ? ` - ${activeType}` : ""}
              </h3>

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {clients
                  .filter(
                    (client) =>
                      (activeRegion === "All" || client.region === activeRegion) &&
                      (activeType === "All" || client.type === activeType),
                  )
                  .map((client, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-md border cursor-pointer transition-colors ${
                        selectedClient === client.name
                          ? "bg-gray-100 border-gray-300"
                          : "hover:bg-gray-50 border-gray-200"
                      }`}
                      onClick={() => {
                        // Toggle selection - if already selected, clear selection
                        if (selectedClient === client.name) {
                          setSelectedClient(null)

                          // Reset map zoom to show all markers
                          if (mapInstanceRef.current) {
                            const bounds = new window.L.LatLngBounds([])
                            let hasVisibleMarkers = false

                            clients.forEach((client) => {
                              const position = clientGeocode[client.name]
                              const isTypeMatch = activeType === "All" || client.type === activeType
                              const isRegionMatch = activeRegion === "All" || client.region === activeRegion

                              if (position && isTypeMatch && isRegionMatch) {
                                bounds.extend([position.lat, position.lng])
                                hasVisibleMarkers = true
                              }
                            })

                            if (hasVisibleMarkers) {
                              mapInstanceRef.current.fitBounds(bounds)
                              if (mapInstanceRef.current.getZoom() > 8) {
                                mapInstanceRef.current.setZoom(8)
                              }
                            }
                          }
                        } else {
                          setSelectedClient(client.name)

                          // Get the client's position
                          const position = clientGeocode[client.name]
                          if (position && mapInstanceRef.current) {
                            // Zoom to the client's location
                            mapInstanceRef.current.setView([position.lat, position.lng], 12)

                            // Find and trigger click on the marker to show info window
                            const markers = document.querySelectorAll(".leaflet-marker-icon")
                            markers.forEach((marker) => {
                              // This is a simplified approach - in a real app you might want to
                              // store references to markers with client IDs for more precise selection
                              const markerBounds = marker.getBoundingClientRect()
                              const markerCenter = {
                                x: markerBounds.left + markerBounds.width / 2,
                                y: markerBounds.top + markerBounds.height / 2,
                              }

                              // Simulate a click on the marker
                              const clickEvent = new MouseEvent("click", {
                                bubbles: true,
                                cancelable: true,
                                view: window,
                                clientX: markerCenter.x,
                                clientY: markerCenter.y,
                              })
                              marker.dispatchEvent(clickEvent)
                            })
                          }
                        }
                      }}
                    >
                      <div className="flex items-start">
                        <div
                          className="w-3 h-3 rounded-full mt-1 mr-2 flex-shrink-0"
                          style={{ backgroundColor: typeColors[client.type] }}
                        />
                        <div>
                          <h4 className="font-medium text-sm">{client.name}</h4>
                          <p className="text-xs text-gray-500">{client.postcode}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Regional Tables */}
      <div className="mt-12 space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            {activeRegion === "All" ? "Clients by Region" : `${activeRegion} Region Clients`}
            {activeType !== "All" ? ` - ${activeType}` : ""}
          </h2>
          <p className="text-gray-600 mt-2">
            Click on a client name to highlight and zoom to their location on the map. Click again to clear selection.
          </p>
          <button
            onClick={() => {
              setSelectedClient(null)
              // Reset map zoom to show all markers
              if (mapInstanceRef.current) {
                const bounds = new window.L.LatLngBounds([])
                let hasVisibleMarkers = false

                clients.forEach((client) => {
                  const position = clientGeocode[client.name]
                  const isTypeMatch = activeType === "All" || client.type === activeType
                  const isRegionMatch = activeRegion === "All" || client.region === activeRegion

                  if (position && isTypeMatch && isRegionMatch) {
                    bounds.extend([position.lat, position.lng])
                    hasVisibleMarkers = true
                  }
                })

                if (hasVisibleMarkers) {
                  mapInstanceRef.current.fitBounds(bounds)
                  if (mapInstanceRef.current.getZoom() > 8) {
                    mapInstanceRef.current.setZoom(8)
                  }
                }
              }
            }}
            className={`mt-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors ${selectedClient ? "opacity-100" : "opacity-50 cursor-not-allowed"}`}
            disabled={!selectedClient}
          >
            Clear Selection
          </button>
        </div>

        {Object.entries(clientsByRegion)
          .filter(([region]) => activeRegion === "All" || region === activeRegion)
          .map(([region, regionClients]) => {
            // Filter clients by type
            const filteredClients = regionClients.filter((client) => activeType === "All" || client.type === activeType)

            // Don't render the region table if no clients match the filters
            if (filteredClients.length === 0) return null

            return (
              <div key={region} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <div
                    className="w-4 h-4 rounded-full mr-2"
                    style={{ backgroundColor: regionColors[region as ClientRegion] }}
                  />
                  {region} Region
                  <span className="text-sm font-normal text-gray-600 ml-2">
                    ({filteredClients.length} client{filteredClients.length !== 1 ? "s" : ""})
                  </span>
                </h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Client Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Postcode
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredClients.map((client, index) => (
                        <tr key={index} className={selectedClient === client.name ? "bg-gray-100" : ""}>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm font-medium cursor-pointer hover:text-blue-600 transition-colors ${
                              selectedClient === client.name ? "text-blue-600 font-semibold" : "text-gray-900"
                            }`}
                            onClick={() => {
                              // Toggle selection - if already selected, clear selection
                              if (selectedClient === client.name) {
                                setSelectedClient(null)

                                // Reset map zoom to show all markers
                                if (mapInstanceRef.current) {
                                  const bounds = new window.L.LatLngBounds([])
                                  let hasVisibleMarkers = false

                                  clients.forEach((client) => {
                                    const position = clientGeocode[client.name]
                                    const isTypeMatch = activeType === "All" || client.type === activeType
                                    const isRegionMatch = activeRegion === "All" || client.region === activeRegion

                                    if (position && isTypeMatch && isRegionMatch) {
                                      bounds.extend([position.lat, position.lng])
                                      hasVisibleMarkers = true
                                    }
                                  })

                                  if (hasVisibleMarkers) {
                                    mapInstanceRef.current.fitBounds(bounds)
                                    if (mapInstanceRef.current.getZoom() > 8) {
                                      mapInstanceRef.current.setZoom(8)
                                    }
                                  }
                                }
                              } else {
                                setSelectedClient(client.name)

                                // Get the client's position
                                const position = clientGeocode[client.name]
                                if (position && mapInstanceRef.current) {
                                  // Zoom to the client's location
                                  mapInstanceRef.current.setView([position.lat, position.lng], 12)
                                }
                              }
                            }}
                          >
                            {client.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.postcode}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

// Add TypeScript declarations for Leaflet global
declare global {
  interface Window {
    L: any
  }
}
