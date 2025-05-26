import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DynamicGoogleEarthMap } from "@/components/dynamic-google-earth-map"

export default function DynamicMapPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a0a5e] text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Dynamic Google Earth Client Map</h1>
            <p className="text-lg mb-8">
              Explore our client locations with full Google Earth capabilities, including Street View and 3D navigation.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Interactive Client Map</h2>
              <Button asChild variant="outline">
                <Link href="/clients">Return to Clients Page</Link>
              </Button>
            </div>
            <p className="text-gray-600 mt-2">
              This interactive map allows you to explore our client locations using Google Earth's powerful features.
              Upload your KML file to see your custom client data, or use the default markers.
            </p>
          </div>

          <DynamicGoogleEarthMap />

          <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold mb-2">Important Note</h3>
            <p className="text-sm text-gray-700">
              To use this feature in a production environment, you'll need to add your Google Maps API key to the
              component. The API key should have the Maps JavaScript API and KML Layer API enabled. For security
              reasons, make sure to restrict your API key to your domain.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help With Your Data?</h2>
            <p className="text-gray-700 mb-8">
              Our team can help you create custom KML files with accurate client locations and detailed information.
              Contact us today to discuss your mapping needs.
            </p>
            <Button asChild className="bg-[#0a0a5e] hover:bg-[#0a0a7e]">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
