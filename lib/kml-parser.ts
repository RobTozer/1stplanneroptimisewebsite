import { DOMParser } from "xmldom"

interface KMLPlacemark {
  id: string
  name: string
  description?: string
  type: string
  coordinates: {
    lat: number
    lng: number
  }
  properties?: Record<string, any>
}

interface KMLData {
  name?: string
  description?: string
  placemarks: KMLPlacemark[]
}

export async function parseKML(kmlString: string): Promise<KMLData> {
  try {
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(kmlString, "text/xml")

    // Extract document info
    const documentName = getElementText(xmlDoc, "Document name")
    const documentDescription = getElementText(xmlDoc, "Document description")

    // Extract placemarks
    const placemarkElements = xmlDoc.getElementsByTagName("Placemark")
    const placemarks: KMLPlacemark[] = []

    for (let i = 0; i < placemarkElements.length; i++) {
      const placemark = placemarkElements[i]
      const id = placemark.getAttribute("id") || `placemark-${i}`
      const name = getElementText(placemark, "name") || `Unnamed Placemark ${i}`
      const description = getElementText(placemark, "description")

      // Get coordinates
      const pointElement = placemark.getElementsByTagName("Point")[0]
      if (pointElement) {
        const coordinatesText = getElementText(pointElement, "coordinates")
        if (coordinatesText) {
          const [lng, lat] = coordinatesText.trim().split(",").map(Number)

          // Extract extended data if available
          const extendedData = placemark.getElementsByTagName("ExtendedData")[0]
          const properties: Record<string, any> = {}

          if (extendedData) {
            const dataElements = extendedData.getElementsByTagName("Data")
            for (let j = 0; j < dataElements.length; j++) {
              const dataElement = dataElements[j]
              const dataName = dataElement.getAttribute("name")
              const dataValue = getElementText(dataElement, "value")
              if (dataName && dataValue) {
                properties[dataName] = dataValue
              }
            }
          }

          // Determine client type from properties or name
          let type = "Unknown"
          if (properties.type) {
            type = properties.type
          } else if (name.includes("Council") || name.includes("Authority")) {
            type = "LA"
          } else if (name.includes("Diocese")) {
            type = "Diocese"
          } else if (name.includes("Trust") || name.includes("Academy")) {
            type = "MAT"
          }

          placemarks.push({
            id,
            name,
            description,
            type,
            coordinates: { lat, lng },
            properties,
          })
        }
      }
    }

    return {
      name: documentName,
      description: documentDescription,
      placemarks,
    }
  } catch (error) {
    console.error("Error parsing KML:", error)
    throw new Error("Failed to parse KML file. Please ensure it is a valid KML format.")
  }
}

function getElementText(element: Document | Element, tagName: string): string | undefined {
  const elements = element.getElementsByTagName(tagName)
  if (elements.length > 0) {
    return elements[0].textContent || undefined
  }
  return undefined
}
