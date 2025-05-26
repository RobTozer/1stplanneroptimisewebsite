import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GoogleEarthClientMap } from "@/components/google-earth-client-map"

export default function Clients() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a0a5e] text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Clients</h1>
            <p className="text-lg mb-8">
              We work with a diverse range of education providers across the UK, helping them optimise their spaces and
              resources to create high-quality learning environments.
            </p>
          </div>
        </div>
      </section>

      {/* Client List Tabs */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="la" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="la">Local Authorities</TabsTrigger>
              <TabsTrigger value="diocese">Dioceses</TabsTrigger>
              <TabsTrigger value="mat">Multi-Academy Trusts</TabsTrigger>
            </TabsList>

            {/* Local Authorities Tab */}
            <TabsContent value="la">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* LA Client 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-blue-600 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Sheffield City Council</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      Comprehensive school estate optimisation and SEND provision planning for one of Yorkshire's
                      largest local authorities.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>

                {/* LA Client 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-blue-600 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Wolverhampton Council</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      Strategic planning and space optimisation for schools across the Wolverhampton area, with a focus
                      on mainstream projections.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>

                {/* LA Client 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-blue-600 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Other Local Authorities</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      We work with numerous local authorities across the UK, providing tailored optimisation services to
                      meet their specific needs.
                    </p>
                    <Button asChild className="w-full bg-[#0a0a5e] hover:bg-[#0a0a7e]">
                      <Link href="/contact">Become a Client</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Dioceses Tab */}
            <TabsContent value="diocese">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Diocese Client 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-purple-600 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Diocese of Birmingham</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      Comprehensive school estate optimisation and development planning for schools across the
                      Birmingham Diocese.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>

                {/* Diocese Client 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-purple-600 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Diocese of Shrewsbury</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      Strategic planning and space optimisation for schools across the Shrewsbury Diocese, with a focus
                      on resource allocation.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>

                {/* Diocese Client 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-purple-600 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Other Dioceses</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      We work with numerous dioceses across the UK, providing tailored optimisation services to meet
                      their specific needs.
                    </p>
                    <Button asChild className="w-full bg-[#0a0a5e] hover:bg-[#0a0a7e]">
                      <Link href="/contact">Become a Client</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* MATs Tab */}
            <TabsContent value="mat">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* MAT Client 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-green-600 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Meridian Trust</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      Trust-wide school estate optimisation and strategic planning across multiple academies in the
                      Meridian Trust.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>

                {/* MAT Client 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-green-600 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Diverse Academies</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      Comprehensive space planning and resource optimisation across the Diverse Academies Trust's
                      portfolio of schools.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>

                {/* MAT Client 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-green-600 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Other MATs</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      We work with numerous Multi-Academy Trusts across the UK, providing tailored optimisation services
                      to meet their specific needs.
                    </p>
                    <Button asChild className="w-full bg-[#0a0a5e] hover:bg-[#0a0a7e]">
                      <Link href="/contact">Become a Client</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Nationwide Reach</h2>
            <p className="text-gray-600">
              We work with education providers across the UK, helping them optimise their spaces and resources to create
              high-quality learning environments.
            </p>
          </div>

          {/* Google Earth Client Map */}
          <GoogleEarthClientMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a0a5e] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Growing List of Satisfied Clients</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how we can help you optimise your educational spaces and resources.
            </p>
            <Button asChild size="lg" className="bg-white text-[#0a0a5e] hover:bg-gray-200">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
