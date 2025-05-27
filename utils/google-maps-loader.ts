// A flag to track if the script is already loaded or loading
let isLoading = false
let isLoaded = false
let loadPromise: Promise<void> | null = null

// Function to load the Google Maps script once
export function loadGoogleMapsScript(): Promise<void> {
  // If already loaded, return resolved promise
  if (isLoaded) {
    return Promise.resolve()
  }

  // If currently loading, return the existing promise
  if (isLoading && loadPromise) {
    return loadPromise
  }

  // Set loading flag and create new promise
  isLoading = true

  loadPromise = new Promise<void>(async (resolve, reject) => {
    try {
      // Check if script already exists
      if (document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')) {
        isLoaded = true
        isLoading = false
        resolve()
        return
      }

      // Create script element
      const script = document.createElement("script")
      script.id = "google-maps-script"

      // Fetch the API key from our server endpoint
      try {
        console.log("Fetching Google Maps API key from /api/maps-key...")
        const response = await fetch("/api/maps-key", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        console.log("API response status:", response.status)

        if (!response.ok) {
          const errorText = await response.text()
          console.error("Maps API error response:", errorText)
          throw new Error(`Failed to fetch maps configuration: ${response.status}`)
        }

        const data = await response.json()
        console.log("API response received:", data.apiKey ? "API key present" : "No API key")

        if (data.error) {
          throw new Error(data.error)
        }

        if (!data.apiKey) {
          throw new Error("No API key returned from server")
        }

        script.src = `https://maps.googleapis.com/maps/api/js?key=${data.apiKey}&libraries=places`
      } catch (error) {
        console.error("Error fetching maps API key:", error)
        throw error
      }

      script.async = true
      script.defer = true

      // Set up event handlers
      script.onload = () => {
        console.log("Google Maps script loaded successfully")
        isLoaded = true
        isLoading = false
        resolve()
      }

      script.onerror = (error) => {
        console.error("Google Maps script failed to load:", error)
        isLoading = false
        reject(new Error("Failed to load Google Maps script"))
      }

      // Add to document
      document.head.appendChild(script)
    } catch (error) {
      isLoading = false
      reject(error)
    }
  })

  return loadPromise
}

// Function to check if Google Maps is loaded
export function isGoogleMapsLoaded(): boolean {
  return typeof window !== "undefined" && !!window.google && !!window.google.maps
}
