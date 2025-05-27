import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ImageMagnifier } from "@/components/image-magnifier"

export default function DioceseOptimise() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/church%20and%20school.jpg-4VUdsOyZs3gUCPult4F6jNyzEX2knk.jpeg"
            alt="Church with adjoining primary school"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-purple-800 opacity-60"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center">
              <Image
                src="/diocese-optimise.png"
                alt="Diocese Optimise"
                width={300}
                height={120}
                className="h-auto w-auto max-h-24"
                priority
              />
            </div>
            <p className="text-lg mb-8">
              Specialized planning and optimization services for Diocesan education providers, helping you make the most
              of your school estate and resources.
            </p>
            <Button asChild className="bg-white text-purple-700 hover:bg-gray-100">
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
              <h2 className="text-2xl font-bold mb-6">Comprehensive Diocese Optimisation Services</h2>
              <p className="text-gray-700 mb-4">
                Our Diocese Optimise service provides Diocesan education authorities with detailed analysis and planning
                tools to make the most of their educational estate and resources. We help you identify opportunities for
                improvement, plan for future needs, and secure necessary funding.
              </p>
              <p className="text-gray-700 mb-4">
                Using our proprietary methodologies and extensive experience in the education sector, we deliver
                actionable insights that lead to tangible improvements in space utilization, resource allocation, and
                educational outcomes across your Diocesan schools.
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
                    className="h-5 w-5 text-purple-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimise use of existing school spaces</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accurate projections for pupil numbers and space requirements</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple-600 mr-2 mt-0.5"
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
                    className="h-5 w-5 text-purple-600 mr-2 mt-0.5"
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
                    className="h-5 w-5 text-purple-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strategic estate management across multiple schools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Diocese Optimise Services Include</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <li>Timetable/Efficiency Assessments</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 2 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Projections & Planning</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Potential Risks</li>
                  <li>Local Developments</li>
                  <li>Changes to Local School Places</li>
                  <li>Pupil Home Locations</li>
                  <li>Deprivation Data</li>
                  <li>Early Years Projections</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 3 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <li>LA High Level Profile</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 4 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                </ul>
              </CardContent>
            </Card>

            {/* Category 5 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <li>Options Appraisal</li>
                  <li>School Level Profile</li>
                  <li>BB103 Development Plan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          {/* Dashboard Examples */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">
              A selection of our "Optimise" Diocesan strategic planning dashboards are shown below:
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Diocese Asset Ownership Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diocese%20Asset%20Ownership.jpg-j95dV9WPdZcO8RbIVbOw6hSyioiC7r.jpeg"
                  alt="Diocese Asset Ownership dashboard showing deanery and parish boundaries, asset types, and detailed asset listings"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our Diocese Asset Ownership dashboard provides a comprehensive view of all church and school assets
                across the diocese, including detailed mapping of deanery and parish boundaries, asset types, and
                complete property listings with tenure information.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Diocese Potential Risks Analysis</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diocese%20Potential%20Risks.jpg-8FPomsp2H44VpvkuXj80qsb95gCSAV.jpeg"
                  alt="Diocese Potential Risks dashboard showing parish level catholicity and mass attendance projections, planned places projections, and surplus places analysis"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                This powerful dashboard enables diocesan education leaders to analyze potential risks through
                parish-level catholicity trends, mass attendance projections, and school place planning data. The
                interactive visualizations help identify areas of concern and support strategic decision-making for
                future educational provision.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Diocese Local Developments Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diocese%20Local%20Developments.jpg-wJ53OVF1rD2Jihl1rGO8ThH8GGEoSG.jpeg"
                  alt="Diocese Local Developments dashboard showing schools, churches, and local development vectors with detailed information on existing schools, churches, and housing developments"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                This comprehensive dashboard maps all schools, churches, and local development vectors across the
                diocese, providing detailed information on existing educational facilities, church properties, and
                planned housing developments to support strategic planning.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Diocese Capital Funding Opportunities</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diocese%20Capital%20Funding.jpg-CQeuIec730ZPW47ntJdsjh26syQ1wU.jpeg"
                  alt="Diocese Capital Funding dashboard showing funding opportunities, contribution types, and detailed funding allocations across different local authorities"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our Capital Funding dashboard identifies and tracks funding opportunities across the diocese, including
                Section 106 and CIL contributions, general education funding, and other named contributions, helping
                diocesan leaders make informed decisions about resource allocation.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Diocese Pupil Home Locations Analysis</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diocese%20Pupil%20Home%20Location.jpg-Vlb1xDcz7XXMAS4dio4nVJqOMtWz0U.jpeg"
                  alt="Diocese Pupil Home Locations dashboard showing travel distances, geographic distribution of pupils, and detailed breakdowns by local authority and year group"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                This detailed analysis of pupil home locations provides valuable insights into travel distances,
                catchment areas, and demographic patterns across the diocese, supporting strategic planning for school
                places and resource allocation.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Diocese Changes to Local School Places Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="[INSERT YOUR NEW IMAGE URL HERE]"
                  alt="Diocese Changes to Local School Places dashboard showing analysis of school place changes across the diocese, including expansions, reductions, and new provisions"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                This dashboard tracks and analyzes changes to school places across the diocese, providing valuable
                insights into expansions, reductions, and new provisions. This information helps diocesan leaders
                understand capacity trends and plan strategically for future educational needs.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">High Level Local Authority Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA%20Dashboard.jpg-4qCE1xiJqb8ydiG4ts4tSdwJUjkhAY.jpeg"
                  alt="High Level Local Authority Dashboard showing DSG outturn, EHCP caseload trends, early years projections, and funding metrics"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                This dashboard provides diocesan leaders with a high-level view of Local Authority metrics that impact
                diocesan schools, including EHCP trends, funding allocations, and projected pupil numbers. Understanding
                these LA-level trends is crucial for strategic planning across the diocese's educational estate.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Diocese Options Appraisal Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diocese%20Options%20Appraisal.jpg-wkIpSWGb7T53ipTTPsohvU04wqqK1I.jpeg"
                  alt="Diocese Options Appraisal dashboard showing detailed metrics for evaluating schools including capacity, pupil numbers, SEN provision, and geographic distribution"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our Options Appraisal dashboard enables diocesan education leaders to evaluate schools across multiple
                criteria, including capacity metrics, pupil demographics, SEN provision, and geographic distribution.
                This powerful tool supports strategic decision-making for school estate planning and resource allocation
                across the diocese.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">School Level Profile Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/School%20Level%20Profile.jpg-k3Z6Qh2pbBWmr4wwFBM5jQZC3EXXrL.jpeg"
                  alt="School Level Profile dashboard showing comprehensive information about an individual school including pupil demographics, SEN data, exclusions, capacity, and funding metrics"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our School Level Profile dashboard provides a comprehensive view of individual schools within the
                diocese, including pupil demographics, SEN data, exclusions/suspensions, historical and projected pupil
                numbers, capacity analysis, and potential capital funding opportunities to support targeted planning at
                the school level.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Diocese Options Appraisal Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diocese%20Options%20Appraisal.jpg-wkIpSWGb7T53ipTTPsohvU04wqqK1I.jpeg"
                  alt="Diocese Options Appraisal dashboard showing detailed metrics for evaluating schools including capacity, pupil numbers, SEN provision, and geographic distribution"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our Options Appraisal dashboard enables diocesan education leaders to evaluate schools across multiple
                criteria, including capacity metrics, pupil demographics, SEN provision, and geographic distribution.
                This powerful tool supports strategic decision-making for school estate planning and resource allocation
                across the diocese.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="container">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-purple-600 text-white p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Success Story</h3>
                <p className="text-lg">Diocese of Birmingham</p>
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
                    <span>Optimized school spaces</span>
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
                    <span>Strategic estate planning</span>
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
                    £1 of 1st Planner Fees Resulted in £150 of capital investment, equating to ROI of 15,047%
                  </p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-xl font-semibold mb-4">How We Helped</h4>
                <p className="text-gray-700 mb-4">
                  The Diocese of Birmingham needed to optimize their school estate across multiple locations, while
                  planning for changing demographics and educational requirements. Our Diocese Optimise service provided
                  a comprehensive analysis of their current estate and future needs.
                </p>
                <p className="text-gray-700 mb-4">
                  We identified opportunities to repurpose underutilized spaces, developed accurate projections for
                  pupil numbers, and created a strategic plan for estate development that aligned with available funding
                  sources.
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
            <h2 className="text-2xl font-bold mb-4">Ready to Optimise Your Diocesan Educational Estate?</h2>
            <p className="text-gray-700 mb-8">
              Contact us today to discuss how our Diocese Optimise service can help you create high-quality school
              places while maximizing your resources.
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
