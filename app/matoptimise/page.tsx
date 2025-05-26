import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ImageMagnifier } from "@/components/image-magnifier"

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
              Tailored planning and optimisation services for Multi-Academy Trusts, helping you make strategic decisions
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

      {/* Dashboard Examples Heading */}
      <div className="container mt-12 mb-6">
        <h2 className="text-2xl font-bold text-center">
          A selection of our "Optimise" MAT strategic planning dashboards are shown below:
        </h2>
      </div>

      {/* Dashboard Examples */}
      <section className="py-8">
        <div className="container">
          {/* MAT Level Profile Dashboard */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">MAT Level Profile Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAT%20Level%20Profile.jpg-MTL0GUFWSwx14vbXeuwVYZAIJ3IU6u.jpeg"
                  alt="MAT Level Profile dashboard showing trust-wide data including pupil numbers, SEN information, exclusions, and capacity metrics across multiple schools"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our MAT Level Profile dashboard provides a comprehensive view of your entire trust, with detailed
                metrics on pupil numbers, SEN provision, exclusions, and capacity across all your academies. This
                trust-wide perspective enables strategic planning and resource allocation decisions.
              </p>
            </div>
          </div>

          {/* School Level Profile Dashboard */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">School Level Profile Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/School%20Level%20Profile.jpg-QnPK9RiAnmqzwAUceCdjY2CkLct6FX.jpeg"
                  alt="School Level Profile dashboard showing detailed information for an individual academy including pupil home locations, historical and projected NOR, SEN pupils by primary need, exclusions/suspensions, pupil ethnicity, capacity, and funding data"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our School Level Profile dashboard provides a detailed view of individual academies within your trust,
                including pupil demographics, SEN data, exclusions/suspensions, historical and projected pupil numbers,
                capacity analysis, and potential capital funding opportunities to support targeted planning at the
                school level.
              </p>
            </div>
          </div>

          {/* MAT Internal Areas Dashboard */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">MAT Internal Areas Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAT%20Internal%20Areas.jpg-TpiPSR2k4ubm9lPi3JfMDkIw8YJlfm.jpeg"
                  alt="MAT Internal Areas dashboard showing capacity analysis for trust schools, comparing NOR against PAN and BB103/104 capacity with geographic mapping"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                This dashboard provides a comprehensive analysis of capacity across your trust's schools, comparing
                current pupil numbers against PAN and BB103/104 capacity standards. The geographic mapping and detailed
                data tables help identify areas of surplus and shortfall to inform strategic planning decisions.
              </p>
            </div>
          </div>

          {/* Capital Funding Opportunities Dashboard */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Capital Funding Opportunities Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAT%20Funding.jpg-CMhBZcfZLxkxYkyXWMGot4H7Vveuta.jpeg"
                  alt="Capital Funding Opportunities dashboard showing funding sources, contribution types, and detailed funding allocations across different local authorities"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our Capital Funding dashboard identifies and tracks funding opportunities for your trust, including
                Section 106 and CIL contributions, DfE capital funding, and other named contributions, helping trust
                leaders make informed decisions about resource allocation and estate development.
              </p>
            </div>
          </div>

          {/* Early Years Projections Dashboard */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Early Years Projections Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Early%20Years.jpg-kg9SGdcHZpggLTezAHXWci2wLT2QnD.jpeg"
                  alt="Early Years Projections dashboard showing childcare eligibility indicators, projected changes to early years numbers, and existing childcare provision data"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our Early Years Projections dashboard provides comprehensive data for planning early childhood education
                provision across your trust. It includes childcare eligibility indicators, projected changes in early
                years numbers, existing childcare provision mapping, and detailed trend analysis to support strategic
                planning for nursery and reception places.
              </p>
            </div>
          </div>

          {/* High Level LA Dashboard */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">High Level Local Authority Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA%20Dashboard.jpg-7M5YIdDdWQE6VUpJPr853pBFtxnycG.jpeg"
                  alt="High Level Local Authority Dashboard showing DSG outturn, EHCP caseload trends, early years projections, and funding metrics relevant to MATs"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                This dashboard provides trust leaders with a high-level view of Local Authority metrics that impact your
                academies, including EHCP trends, funding allocations, and projected pupil numbers. Understanding these
                LA-level trends is crucial for strategic planning across your trust's educational estate.
              </p>
            </div>

            {/* MAT Options Appraisal Dashboard */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-center">MAT Options Appraisal Dashboard</h3>
                <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                  <ImageMagnifier
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAT%20Example%20Options%20Appraisal.jpg-aEFOMSe6x4xYcxSahjbiKMwa61kwEz.jpeg"
                    alt="MAT Options Appraisal dashboard showing comprehensive filtering options and metrics for evaluating schools including capacity, pupil numbers, funding, and geographic distribution"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Our MAT Options Appraisal dashboard enables trust leaders to evaluate schools across multiple
                  criteria, including capacity metrics, pupil demographics, funding, and geographic distribution. This
                  powerful tool supports strategic decision-making for school estate planning and resource allocation
                  across your entire trust.
                </p>
              </div>
            </div>
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
                <div className="mt-6 p-4 bg-green-700 rounded-lg">
                  <p className="text-lg font-bold text-center">
                    "For Every £1 spent on 1st Planner Fees £84 of capital investment has been realised, resulting in a
                    return on investment of 8,385%"
                  </p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-xl font-semibold mb-4">How We Helped</h4>
                <p className="text-gray-700 mb-4">
                  Diverse Academies Trust needed to optimise their school estate across multiple academies, while
                  planning for changing demographics and educational requirements. Our MAT Optimise service provided a
                  comprehensive analysis of their current estate and future needs.
                </p>
                <p className="text-gray-700 mb-4">
                  We identified opportunities to repurpose underutilized spaces, developed accurate projections for
                  pupil numbers, and created a strategic plan for estate development that aligned with available funding
                  sources across the entire trust.
                </p>
                <div className="mt-6">
                  <Link href="/contact" className="text-green-600 font-medium hover:underline flex items-center">
                    Contact us for more details
                    <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-[#0a0a5e] hover:bg-[#0a0a7e]">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/testimonials">View Testimonials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
