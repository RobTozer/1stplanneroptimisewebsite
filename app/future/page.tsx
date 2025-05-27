import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Future() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a0a5e] text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Future Developments</h1>
            <p className="text-lg mb-8">
              Discover our exciting roadmap of upcoming innovations and expansions to our optimisation services.
            </p>
          </div>
        </div>
      </section>

      {/* Web-based Front End */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">Web-based Front End</h2>
              <p className="text-gray-700 mb-4">
                We're developing a comprehensive web-based platform that will revolutionise how education providers
                interact with their data and planning tools. This intuitive interface will provide:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0a0a5e] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time data visualisation and analysis</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0a0a5e] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interactive planning tools</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0a0a5e] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Collaborative workspace for stakeholders</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0a0a5e] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customisable dashboards and reports</span>
                </li>
              </ul>
              <Button asChild className="bg-[#0a0a5e] hover:bg-[#0a0a7e]">
                <Link href="/contact">Join the Beta Program</Link>
              </Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="aspect-video bg-white rounded-lg shadow-md flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_1127570875-dxQowU1s1KSUgfNk14X1QbCUv92Bqn.jpeg"
                  alt="Data Analytics Dashboard - Modern interface showing real-time data visualisations, charts, and metrics"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Twinning */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
              <div className="aspect-video bg-white rounded-lg shadow-md flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_603436520-FSdMX1ibzEH1ARPli7rAyptgui8N4R.jpeg"
                  alt="Digital Twin Visualisation - 3D holographic representation of buildings with glowing blue wireframes"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-6">Digital Twinning</h2>
              <p className="text-gray-700 mb-4">
                Our digital twinning technology will create virtual replicas of educational estates, allowing for
                unprecedented levels of planning, simulation, and optimisation. This cutting-edge approach will enable:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0a0a5e] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3D visualisation of school estates</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0a0a5e] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Scenario planning and simulation</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0a0a5e] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time monitoring of space utilisation</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0a0a5e] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Predictive maintenance and asset management</span>
                </li>
              </ul>
              <Button asChild className="bg-[#0a0a5e] hover:bg-[#0a0a7e]">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sectors */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Expanding to Other Sectors</h2>
            <p className="text-gray-700">
              We're applying our expertise in space optimisation and resource planning to new sectors, bringing our
              proven methodologies to address similar challenges in different contexts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Children's Social Care */}
            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-center text-blue-700">Children's Social Care</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <svg
                    className="h-12 w-12 mx-auto text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">
                  Optimising facilities and resources for children's social care services, improving outcomes while
                  maximising efficiency.
                </p>
              </CardContent>
            </Card>

            {/* Adult Social Care */}
            <Card>
              <CardHeader className="bg-green-50">
                <CardTitle className="text-center text-green-700">Adult Social Care</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <svg
                    className="h-12 w-12 mx-auto text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">
                  Strategic planning for adult social care facilities, optimising spaces and resources to meet growing
                  demands.
                </p>
              </CardContent>
            </Card>

            {/* Social Affordable Housing */}
            <Card>
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-center text-purple-700">Social Affordable Housing</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <svg
                    className="h-12 w-12 mx-auto text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">
                  Applying our optimisation expertise to social housing, maximising space utilisation and resource
                  allocation.
                </p>
              </CardContent>
            </Card>

            {/* Development Project Tracking */}
            <Card>
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-center text-orange-700">Project Tracking</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <svg
                    className="h-12 w-12 mx-auto text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">
                  Comprehensive tracking and control systems for development projects, ensuring efficient resource use
                  and timely completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Research & Development</h2>
            <p className="text-gray-700 mb-8 text-center">
              We're continuously investing in research and development to enhance our optimisation methodologies and
              tools. Our current focus areas include:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg className="h-5 w-5 text-[#0a0a5e] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Advanced Data Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Developing sophisticated data analytics tools to provide deeper insights into space utilisation,
                  resource allocation, and future needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg className="h-5 w-5 text-[#0a0a5e] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Condition and Decarbonisation Data Collection & Reporting
                </h3>
                <p className="text-gray-600 text-sm">
                  Developing comprehensive tools for collecting, analysing, and reporting on building condition and
                  carbon footprint data, helping education providers meet sustainability targets and plan for future
                  improvements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg className="h-5 w-5 text-[#0a0a5e] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                  Sustainability Integration
                </h3>
                <p className="text-gray-600 text-sm">
                  Developing tools to incorporate sustainability metrics into our optimisation processes, helping
                  clients reduce their environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a0a5e] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Be Part of Our Future</h2>
            <p className="text-lg mb-8">
              Interested in learning more about our upcoming developments or participating in our beta programmes?
              Contact us today to stay informed and get involved.
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
