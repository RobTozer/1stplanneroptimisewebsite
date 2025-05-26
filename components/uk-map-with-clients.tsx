"use client"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Define the client data structure
type RegionData = {
  id: string
  name: string
  clientCount: number
  color: string
  hoverColor: string
  clients?: string[]
}

// Client data by region
const regionData: RegionData[] = [
  {
    id: "scotland",
    name: "Scotland",
    clientCount: 6,
    color: "#dbeafe", // blue-50
    hoverColor: "#bfdbfe", // blue-100
    clients: ["Edinburgh City Council", "Glasgow City Council"],
  },
  {
    id: "north-east",
    name: "North East",
    clientCount: 8,
    color: "#dbeafe",
    hoverColor: "#bfdbfe",
    clients: ["Newcastle City Council", "Durham County Council"],
  },
  {
    id: "north-west",
    name: "North West",
    clientCount: 12,
    color: "#dbeafe",
    hoverColor: "#bfdbfe",
    clients: ["Manchester City Council", "Liverpool City Council", "Diocese of Lancaster"],
  },
  {
    id: "yorkshire",
    name: "Yorkshire & Humber",
    clientCount: 10,
    color: "#dbeafe",
    hoverColor: "#bfdbfe",
    clients: ["Sheffield City Council", "Leeds City Council", "York Diocese"],
  },
  {
    id: "west-midlands",
    name: "West Midlands",
    clientCount: 15,
    color: "#dbeafe",
    hoverColor: "#bfdbfe",
    clients: ["Birmingham City Council", "Wolverhampton Council", "Diocese of Birmingham"],
  },
  {
    id: "east-midlands",
    name: "East Midlands",
    clientCount: 9,
    color: "#dbeafe",
    hoverColor: "#bfdbfe",
    clients: ["Nottingham City Council", "Leicester City Council", "Diverse Academies Trust"],
  },
  {
    id: "east",
    name: "East of England",
    clientCount: 7,
    color: "#dbeafe",
    hoverColor: "#bfdbfe",
    clients: ["Norfolk County Council", "Meridian Trust"],
  },
  {
    id: "london",
    name: "London",
    clientCount: 10,
    color: "#dbeafe",
    hoverColor: "#bfdbfe",
    clients: ["London Borough of Hackney", "London Borough of Southwark", "Diocese of Westminster"],
  },
  {
    id: "south-east",
    name: "South East",
    clientCount: 9,
    color: "#dbeafe",
    hoverColor: "#bfdbfe",
    clients: ["Kent County Council", "Surrey County Council"],
  },
  {
    id: "south-west",
    name: "South West",
    clientCount: 7,
    color: "#dbeafe",
    hoverColor: "#bfdbfe",
    clients: ["Bristol City Council", "Diocese of Clifton"],
  },
  {
    id: "wales",
    name: "Wales",
    clientCount: 4,
    color: "#dbeafe",
    hoverColor: "#bfdbfe",
    clients: ["Cardiff Council", "Swansea Council"],
  },
  {
    id: "northern-ireland",
    name: "Northern Ireland",
    clientCount: 3,
    color: "#dbeafe",
    hoverColor: "#bfdbfe",
    clients: ["Belfast City Council"],
  },
]

export function UKMapWithClients() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const handleRegionHover = (regionId: string) => {
    setHoveredRegion(regionId)
  }

  const handleRegionLeave = () => {
    setHoveredRegion(null)
  }

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(regionId === selectedRegion ? null : regionId)
  }

  const getRegionColor = (regionId: string) => {
    const region = regionData.find((r) => r.id === regionId)
    if (!region) return "#dbeafe" // Default color

    if (selectedRegion === regionId) {
      return "#3b82f6" // blue-500
    }

    if (hoveredRegion === regionId) {
      return region.hoverColor
    }

    // Adjust color intensity based on client count
    const maxClients = Math.max(...regionData.map((r) => r.clientCount))
    const intensity = Math.max(0.3, region.clientCount / maxClients)

    // For blue shades
    if (region.clientCount > 10) {
      return "#93c5fd" // blue-300
    } else if (region.clientCount > 5) {
      return "#bfdbfe" // blue-200
    } else {
      return "#dbeafe" // blue-100
    }
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">Client Distribution</h3>
          <p className="text-sm text-gray-500">Click on a region to see details</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#dbeafe] mr-2"></div>
            <span className="text-xs">1-5 clients</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#bfdbfe] mr-2"></div>
            <span className="text-xs">6-10 clients</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#93c5fd] mr-2"></div>
            <span className="text-xs">10+ clients</span>
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <svg
              viewBox="0 0 800 1000"
              className="w-full h-auto"
              aria-label="Map of UK showing client locations"
              role="img"
            >
              <TooltipProvider>
                {/* Scotland */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="scotland"
                      d="M340,90 L380,60 L420,70 L460,50 L500,90 L480,130 L500,170 L460,210 L420,190 L380,220 L340,200 L300,220 L260,200 L220,220 L180,200 L220,160 L260,140 L300,120 L340,90"
                      fill={getRegionColor("scotland")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("scotland")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("scotland")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">Scotland</div>
                    <div className="text-xs">{regionData.find((r) => r.id === "scotland")?.clientCount} clients</div>
                  </TooltipContent>
                </Tooltip>

                {/* Northern Ireland */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="northern-ireland"
                      d="M100,320 L140,300 L180,320 L160,360 L120,380 L80,360 L100,320"
                      fill={getRegionColor("northern-ireland")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("northern-ireland")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("northern-ireland")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">Northern Ireland</div>
                    <div className="text-xs">
                      {regionData.find((r) => r.id === "northern-ireland")?.clientCount} clients
                    </div>
                  </TooltipContent>
                </Tooltip>

                {/* Wales */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="wales"
                      d="M220,460 L260,440 L300,460 L280,500 L240,520 L200,500 L220,460"
                      fill={getRegionColor("wales")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("wales")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("wales")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">Wales</div>
                    <div className="text-xs">{regionData.find((r) => r.id === "wales")?.clientCount} clients</div>
                  </TooltipContent>
                </Tooltip>

                {/* North East */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="north-east"
                      d="M380,280 L420,260 L460,280 L440,320 L400,340 L360,320 L380,280"
                      fill={getRegionColor("north-east")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("north-east")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("north-east")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">North East</div>
                    <div className="text-xs">{regionData.find((r) => r.id === "north-east")?.clientCount} clients</div>
                  </TooltipContent>
                </Tooltip>

                {/* North West */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="north-west"
                      d="M300,320 L340,300 L380,320 L360,360 L320,380 L280,360 L300,320"
                      fill={getRegionColor("north-west")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("north-west")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("north-west")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">North West</div>
                    <div className="text-xs">{regionData.find((r) => r.id === "north-west")?.clientCount} clients</div>
                  </TooltipContent>
                </Tooltip>

                {/* Yorkshire & Humber */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="yorkshire"
                      d="M380,360 L420,340 L460,360 L440,400 L400,420 L360,400 L380,360"
                      fill={getRegionColor("yorkshire")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("yorkshire")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("yorkshire")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">Yorkshire & Humber</div>
                    <div className="text-xs">{regionData.find((r) => r.id === "yorkshire")?.clientCount} clients</div>
                  </TooltipContent>
                </Tooltip>

                {/* West Midlands */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="west-midlands"
                      d="M300,420 L340,400 L380,420 L360,460 L320,480 L280,460 L300,420"
                      fill={getRegionColor("west-midlands")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("west-midlands")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("west-midlands")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">West Midlands</div>
                    <div className="text-xs">
                      {regionData.find((r) => r.id === "west-midlands")?.clientCount} clients
                    </div>
                  </TooltipContent>
                </Tooltip>

                {/* East Midlands */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="east-midlands"
                      d="M380,420 L420,400 L460,420 L440,460 L400,480 L360,460 L380,420"
                      fill={getRegionColor("east-midlands")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("east-midlands")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("east-midlands")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">East Midlands</div>
                    <div className="text-xs">
                      {regionData.find((r) => r.id === "east-midlands")?.clientCount} clients
                    </div>
                  </TooltipContent>
                </Tooltip>

                {/* East of England */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="east"
                      d="M460,420 L500,400 L540,420 L520,460 L480,480 L440,460 L460,420"
                      fill={getRegionColor("east")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("east")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("east")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">East of England</div>
                    <div className="text-xs">{regionData.find((r) => r.id === "east")?.clientCount} clients</div>
                  </TooltipContent>
                </Tooltip>

                {/* London */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="london"
                      d="M420,500 L460,480 L500,500 L480,540 L440,560 L400,540 L420,500"
                      fill={getRegionColor("london")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("london")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("london")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">London</div>
                    <div className="text-xs">{regionData.find((r) => r.id === "london")?.clientCount} clients</div>
                  </TooltipContent>
                </Tooltip>

                {/* South East */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="south-east"
                      d="M460,540 L500,520 L540,540 L520,580 L480,600 L440,580 L460,540"
                      fill={getRegionColor("south-east")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("south-east")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("south-east")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">South East</div>
                    <div className="text-xs">{regionData.find((r) => r.id === "south-east")?.clientCount} clients</div>
                  </TooltipContent>
                </Tooltip>

                {/* South West */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      id="south-west"
                      d="M300,520 L340,500 L380,520 L360,560 L320,580 L280,560 L300,520"
                      fill={getRegionColor("south-west")}
                      stroke="#666"
                      strokeWidth="2"
                      onMouseEnter={() => handleRegionHover("south-west")}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick("south-west")}
                      style={{ cursor: "pointer" }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm font-medium">South West</div>
                    <div className="text-xs">{regionData.find((r) => r.id === "south-west")?.clientCount} clients</div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </svg>
          </div>

          <div className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
            {selectedRegion ? (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{regionData.find((r) => r.id === selectedRegion)?.name}</h3>
                <p className="text-sm mb-3">
                  <span className="font-medium">{regionData.find((r) => r.id === selectedRegion)?.clientCount}</span>{" "}
                  clients in this region
                </p>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Notable clients:</h4>
                  <ul className="text-sm text-gray-600 list-disc pl-5">
                    {regionData
                      .find((r) => r.id === selectedRegion)
                      ?.clients?.map((client, index) => (
                        <li key={index}>{client}</li>
                      ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">UK Client Distribution</h3>
                <p className="text-sm mb-3">
                  We work with <span className="font-medium">100+</span> clients across the UK, helping education
                  providers optimize their spaces and resources.
                </p>
                <p className="text-sm text-gray-600">
                  Click on a region to see more details about our clients in that area.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
