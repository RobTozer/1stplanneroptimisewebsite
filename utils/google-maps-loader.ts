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
      const response = await fetch("/api/maps-key")
      const data = await response.json()
      script.src = `https://maps.googleapis.com/maps/api/js?key=${data.key}`
      script.async = true
      script.defer = true

      // Set up event handlers
      script.onload = () => {
        isLoaded = true
        isLoading = false
        resolve()
      }

      script.onerror = (error) => {
        isLoading = false
        reject(error)
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
