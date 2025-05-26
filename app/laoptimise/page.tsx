import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ImageMagnifier } from "@/components/image-magnifier"

export default function LAOptimise() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA%20School%20Background.jpg-aVYoVQ1pZGyxAZC8wc5Xu4RzaO8j5v.jpeg"
            alt="Aerial view of UK primary school with surrounding residential area"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-blue-800 opacity-60"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center">
              <Image
                src="/la-optimise.png"
                alt="LA Optimise"
                width={300}
                height={120}
                className="h-auto w-auto max-h-24"
                priority
              />
            </div>
            <h3 className="text-xl font-bold mb-4">
              How Local Authorities Are Using Data to Solve the Mainstream and SEND/AP School Places Puzzle
            </h3>
            <p className="text-lg mb-4">
              High needs budgets under huge pressure. Primary pupil numbers dropping. Secondary pupils numbers peaking.
              EHCP numbers rising at a dramatic pace. A school estate that's ageing, inefficient, and often mismatched
              to the cohorts it's trying to serve. Sound familiar?
            </p>
            <p className="text-lg mb-8">
              For many Local Authorities, strategic planning has become a reactive scramble. Not because they lack the
              will or expertise, but because they lack the access to the necessary data driven tools.
            </p>
            <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
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
              <h2 className="text-2xl font-bold mb-6">Comprehensive LA Optimisation Services</h2>
              <p className="text-gray-700 mb-4">
                Our LA Optimise service provides Local Authorities with detailed analysis and planning tools to make the
                most of their educational estate and resources. We help you identify opportunities for improvement, plan
                for future needs and make best use of your allocated revenue and capital funding.
              </p>
              <p className="text-gray-700 mb-4">
                Using our proprietary "Optimise" tools and extensive experience in the education sector, we deliver
                actionable insights that lead to tangible improvements in space utilisation, resource allocation and
                therefore educational outcomes.
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
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
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
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accurate projections for mainstream and SEND/AP provision</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Identify reveneue and capital cost avoidance</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
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
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive SEND/AP commissioning and capital strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center">Our LA Optimise Services Include</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <li>School/Other Assets External Space Mapping</li>
                  <li>BB103 Sufficiency Review</li>
                  <li>BB104 Sufficiency Review</li>
                  <li>Timetable/Efficiency Assessments</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 2 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2-2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">SEND/AP & Early Years</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>SEN Local Authority Benchmarks</li>
                  <li>SEN EHCP Caseload</li>
                  <li>Early Years Projections</li>
                  <li>EHCP Pupil Data</li>
                  <li>Exclusion and Suspension Data</li>
                  <li>SEN Assessment and Discontinuation</li>
                  <li>SEND/AP Projections/Commissioning Strategy</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 3 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <li>DSG Revenue Funding</li>
                  <li>SEND Support Services Spend</li>
                  <li>High Needs Revenue Projections</li>
                  <li>Capital Cost Estimates</li>
                  <li>Cost Avoidance Calculations</li>
                  <li>Capital Funding Optimisation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 4 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Area Analysis</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>LA High Level Profile</li>
                  <li>Pupil Home Location & Travel Distance Mapping</li>
                  <li>Deprivation Maping by School & Pupil Home Location</li>
                  <li>Local Development Mapping</li>
                  <li>Potential Risk Identification</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 5 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">School Estate</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>School Block Age & Construction Type</li>
                  <li>DEC Energy Ratings & C02 Production</li>
                  <li>DfE Condition by Block & Building Element</li>
                  <li>Changes to Local School Places</li>
                </ul>
              </CardContent>
            </Card>

            {/* Category 6 */}
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 002.944 12a11.955 11.955 0 013.04 8.618 11.955 11.955 0 018.618 3.04 12.02 12.02 0 003.04-8.618 11.955 11.955 0 018.618-3.04 12.02 12.02 0 00-3.04-8.618z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Planning &amp; Development</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Options Appraisal</li>
                  <li>School Level Profile</li>
                  <li>BB103 Development Plan</li>
                  <li>BB104 Development Plan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Dashboard Introduction */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12 mb-6">
              <h2 className="text-2xl font-bold text-center">
                A selection of our "Optimise" Local Authority strategic planning dashboards are shown below:
              </h2>
            </div>

            {/* Dashboard Example */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-center">
                  High Level Local Authority Dashboards with Exemplar Benchmark Comparisons
                </h3>
                <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                  <ImageMagnifier
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA%20Dashboard.jpg-f1jMTBiGwSEWhh6g9ZFmbKIqaxc847.jpeg"
                    alt="Comprehensive LA Dashboard showing EHCP data, funding allocations, and projections"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Our interactive dashboards provide real-time insights into your Local Authority's education data,
                  helping you make informed decisions about resource allocation and planning.
                </p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-center">EHCP Caseload Benchmark Comparisons</h3>
                <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                  <ImageMagnifier
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EHCP%20Caseload%20Benchmark%20Comparisons.jpg-vAtFr5SNYOTye8q8fvjmxCbOayZ358.jpeg"
                    alt="EHCP Caseload Benchmark Comparisons dashboard showing total EHCP caseload trends, comparisons by SEN2 establishment groups and types, and DSG management plan type comparisons"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  This powerful benchmarking tool allows Local Authorities to compare their EHCP caseload against
                  "exemplar" statistical neighbour, regional and LAs with the same level of deprivation. The dashboards
                  provide detailed breakdowns by establishment type, primary need and age range, enabling data-driven
                  decision making for SEND/AP provision planning.
                </p>
              </div>
            </div>

            {/* SEND/AP Commissioning Strategy Dashboard */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-center">SEND/AP Commissioning Strategy Cost Avoidance</h3>
                <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                  <ImageMagnifier
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA%20SEND%20%26%20AP%20Commissioning%20Strategy%20Cost%20Avoidance.jpg-3ZtFPmid4kbEGxbm0E89y1F7Lzi5bN.jpeg"
                    alt="SEND/AP Commissioning Strategy dashboard showing cumulative cost avoidance, revenue spends, capital costs, and changes to EHCP/AP pupil numbers"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Our SEND/AP Commissioning Strategy dashboards enables Local Authorities to model different scenarios
                  againt their "exemplar" LA benchmarks for pupil placement costs and construction type for each of the
                  setting types, calculating potential revenue and capital cost avoidance compared to a "Do Nothing"
                  position over an 8-year period.
                </p>
              </div>
            </div>
          </div>
          {/* School Internal Capacity Dashboard */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">
                Maintained School Internal Capacity Shortfall/Surplus Analysis
              </h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA%20Internal%20Areas.jpg-r1lziYRg2VY2eOyYrdCgONSz1hMOAl.jpeg"
                  alt="Dashboard showing maintained school internal capacity shortfall/surplus with maps displaying NOR against PAN and BB103/104 capacity, plus primary and secondary planning area capacity projections"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Interactive visualisation of school capacity data showing surplus and shortfall across the Local
                Authority area against both the NOR agaisnt PAN and their potenial BB103/BB104 Capacity basd on DfE GIFA
                data, with geographic mapping and future projections to support strategic planning decisions.
              </p>
            </div>
          </div>
          {/* School Block Age Dashboard */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">
                School Block Age, DfE Condition Data and DEC Information
              </h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/School%20Block%20Age.jpg-kMXTZZC43P2i8nNE6OFhzlwYuq5xgb.jpeg"
                  alt="School Block Age Dashboard showing condition data, energy certificates, and building elements analysis"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Comprehensive analysis of DfE CDC school building condition data by block age/constuction type and
                energy performance to support strategic estate management decisions.
              </p>
            </div>
          </div>

          {/* Deprivation Data Dashboard */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">
                Deprivation Data by School/Pupil Home Location and LSOA
              </h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Derpivation%20data.jpg-K8iaMyXJmWMZpSdLFbfeg6lpoCNyWu.jpeg"
                  alt="Deprivation data dashboard showing indices by measure, national rank, and geographic distribution with school locations"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Detailed analysis of local deprivation indices with geographic mapping of school and pupil home
                locations, enabling targeted resource allocation and strategic planning based on socioeconomic factors.
              </p>
            </div>
          </div>
          {/* School Options Appraisal Dashboard */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">School Options Appraisal Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA%20Options%20Appraisal.jpg-cJbJ3cZR6kbjnsSEvXiDXNgdLoKCFv.jpeg"
                  alt="School Options Appraisal dashboard showing comprehensive filtering options and metrics for evaluating schools including capacity, pupil numbers, funding, and geographic distribution"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our School Options Appraisal dashboard enables Local Authorities to evaluate schools across multiple
                criteria, including capacity metrics, pupil demographics, funding, and geographic distribution. This
                powerful tool supports strategic decision-making for school estate planning and resource allocation.
              </p>
            </div>
          </div>

          {/* School Level Profile Dashboard */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">School Level Profile Dashboard</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-[6px_8px_15px_rgba(0,0,0,0.25)] border border-black">
                <ImageMagnifier
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/School%20Level%20Profile.jpg-2OQlCEDgoTlW6yz51keJSBkcXgUN0d.jpeg"
                  alt="School Level Profile dashboard showing detailed information for an individual school including pupil home locations, historical and projected NOR, SEN pupils by primary need, exclusions/suspensions, pupil ethnicity, capacity, and funding data"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our School Level Profile dashboard provides a comprehensive view of individual schools, including pupil
                demographics, capacity analysis, historical trends, and financial data. This detailed profile supports
                targeted interventions and planning at the school level, complementing the broader Local Authority
                strategic planning.
              </p>
            </div>
          </div>
        </div>
      </section>
      ;
      <section className="py-16">
        <div className="container">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-blue-600 text-white p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Success Story</h3>
                <p className="text-lg">Sheffield City Council</p>
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
                    <span>Optimised school spaces to create over 2,000 secondary places</span>
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
                    <span>Improved SEND/AP provision</span>
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
                    <span>Realised huge savings against available capital budgets</span>
                  </div>
                  <div className="mt-6 p-4 bg-blue-700 rounded-lg">
                    <p className="text-lg font-bold text-center">
                      "For Every £1 spent on 1st Planner Fees £59 of capital savings have been achieved, resulting in a
                      return on investment of 5,948%"
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-xl font-semibold mb-4">How We Helped</h4>
                <p className="text-gray-700 mb-4">
                  Sheffield City Council faced challenges with increasing secondary pupil numbers and SEND/AP
                  requirements, while working with limited space and budget constraints. Our LA Optimise service
                  provided a comprehensive analysis of their current estate, future needs and where these could be
                  catered for without requiring the construction of 2 new secondary schools.
                </p>
                <p className="text-gray-700 mb-4">
                  We identified opportunities to repurpose underutilised spaces, developed accurate projections for
                  mainstream and SEND/AP provision, and created a strategic plan for estate development that aligned
                  with available funding sources.
                </p>
                <div className="mt-6">
                  <Link href="/contact" className="text-blue-600 font-medium hover:underline flex items-center">
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
      ;
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Optimise Your Local Authority's Education Estate?</h2>
            <p className="text-gray-700 mb-8">
              Contact us today to discuss how our LA Optimise service can help you create high-quality school places
              while maximising your resources.
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
