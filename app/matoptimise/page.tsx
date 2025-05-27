import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function MATOptimise() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAT%20school%20image.jpg-BCQgohuGLahZWXHNgIbgpezDSm3Y3S.jpeg"
            alt="Aerial view of school complex with sports facilities"
            fill
            className="object-cover opacity-40"
            style={{ objectPosition: "center 20%" }}
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-green-800 opacity-60"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center">
              <Image
                src="/mat-optimise.png"
                alt="MAT Optimise"
                width={300}
                height={120}
                className="h-auto w-auto max-h-24"
                priority
              />
            </div>
            <p className="text-lg mb-8">
              Tailored planning and optimization services for Multi-Academy Trusts, helping you make strategic decisions
              about your school estate and resources across multiple sites.
            </p>
            <Button asChild className="bg-white text-green-700 hover:bg-gray-100">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Comprehensive MAT Optimisation Services</h2>
              <p className="text-gray-700 mb-4">
                Our MAT Optimise service provides Multi-Academy Trusts with detailed analysis and planning tools to make
                the most of their educational estate and resources across multiple schools. We help you identify
                opportunities for improvement, plan for future needs, and secure necessary funding.
              </p>
              <p className="text-gray-700 mb-4">
                Using our proprietary methodologies and extensive experience in the education sector, we deliver
                actionable insights that lead to tangible improvements in space utilization, resource allocation, and
                educational outcomes across your trust.
              </p>
              <p className="text-gray-700">
                Our team works closely with you to understand your specific challenges and goals, ensuring that our
                recommendations are tailored to your unique context and requirements.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimise use of existing school spaces across your trust</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strategic planning for multiple sites</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Identify funding opportunities and cost savings</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data-driven development planning</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trust-wide resource allocation optimisation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center">Our MAT Optimise Services Include</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">School Space Planning</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>School Internal Space & Mainstream Projections</li>
                  <li>School/Other Assets External Space</li>
                  <li>BB103 Sufficiency Review</li>
                  <li>BB103 Development Plan</li>
                  <li>Timetable/Efficiency Assessments</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 2 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Projections & Planning</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Early Years Projections</li>
                  <li>Pupil Home Locations</li>
                  <li>Deprivation Data</li>
                  <li>Potential Risks</li>
                  <li>Changes to Local School Places</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 3 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Funding & Resources</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Capital Funding</li>
                  <li>Options Appraisal</li>
                  <li>Local Developments</li>
                  <li>LA High Level Profile</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 4 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Estate Management</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>School Block Age</li>
                  <li>DEC Energy Ratings</li>
                  <li>DfE Condition</li>
                  <li>School Level Profile</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 5 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Development Planning</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>BB104 Sufficiency Review</li>
                  <li>BB104 Development Plan</li>
                  <li>Early Years</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="container">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-green-600 text-white p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Success Story</h3>
                <p className="text-lg">Diverse Academies Trust</p>
                <div className="mt-6 text-sm">
                  <div className="flex items-center mb-2">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Trust-wide space optimisation</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Strategic resource allocation</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Secured additional funding</span>
                  </div>
                </div>
                <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <p className="text-xs uppercase tracking-wide mb-1">Return on Investment</p>
                  <p className="text-base font-bold leading-tight">
                    £1 of 1st Planner Fees Resulted in £84 of capital investment, equating to ROI of 8,385%
                  </p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-xl font-semibold mb-4">How We Helped</h4>
                <p className="text-gray-700 mb-4">
                  Diverse Academies Trust needed to optimize their school estate across multiple academies, while
                  planning for changing demographics and educational requirements. Our MAT Optimise service provided a
                  comprehensive analysis of their current estate and future needs.
                </p>
                <p className="text-gray-700 mb-4">
                  We identified opportunities to repurpose underutilized spaces, developed accurate projections for
                  pupil numbers, and created a strategic plan for estate development that aligned with available funding
                  sources across the entire trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Optimise Your Multi-Academy Trust's Educational Estate?
            </h2>
            <p className="text-gray-700 mb-8">
              Contact us today to discuss how our MAT Optimise service can help you create high-quality school places
              while maximizing your resources across your trust.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-[#0a0a5e] hover:bg-[#0a0a7e]">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
