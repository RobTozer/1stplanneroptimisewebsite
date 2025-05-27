import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#0a0a5e] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/brick-schoolhouse.png"
            alt="Traditional English school buildings"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Strategic Education Population and Asset Planning</h1>
            <p className="text-lg md:text-xl mb-8">
              We support education providers to create high quality school places for their pupils, without over
              spending against their capital and revenue budgets, whilst identifying capacity within their existing
              estates and identifying funding sources to complete the works.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#0a0a5e] hover:bg-gray-200">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8 max-w-screen-lg mx-auto">
            <div className="flex justify-center mb-6">
              <Image src="/logo.png" alt="1st Planner" width={250} height={100} className="h-auto" priority />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-4xl mx-auto">
              Moving from Reactive to Proactive School Planning: How Education Leaders Are Reclaiming Control with Data
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4 text-center">
              If you're a Local Authority, Diocese or Multi Academy Trust, the chances are you're feeling the pressure
              around future pupil numbers, funding and the sufficiency/condition of your school estate. Too many
              education leaders we meet are stuck in reactive mode: plugging gaps in mainstream and SEND provision,
              watching revenue reserves drain, guessing at future demand, and trying to align crumbling estates with
              constantly changing pupil needs. Even though huge amounts of publicly available data exists, it's often
              scattered far and wide, changes year by year, constantly becoming outdated and impossible to decipher
              without massive amounts of ongoing manual effort.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 max-w-4xl mx-auto mt-6">We've Built a Better Way</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4 text-center">
              At 1st Planner, we work with school system leaders across England who are determined to do things
              differently. Leaders who want to move from guesswork to grounded strategy. "Optimise" is our answer to the
              complex, high-stakes challenge of strategic planning for school populations and estates. It's a fully
              dynamic suite of Power BI dashboards that turns disconnected and irregular data into one clear, connected
              picture.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 text-center">
              We provide specialised optimisation services for different education providers, helping them make the most
              of their resources and spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* LA Optimise */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-48 relative">
                <div className="absolute inset-0">
                  <Image
                    src="/weathered-prefab-school.png"
                    alt="Post-war system build primary school in poor condition"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-blue-800 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link href="/laoptimise" className="cursor-pointer transition-transform hover:scale-105">
                    <Image
                      src="/la-optimise.png"
                      alt="LA Optimise"
                      width={200}
                      height={80}
                      className="h-auto w-auto max-h-20 drop-shadow-[0_0_3px_rgba(255,255,255,1)] filter-none"
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 flex-1">
                  Comprehensive planning and optimisation services for Local Authorities, including school space
                  planning, SEND projections, and funding strategies.
                </p>
                <Button asChild className="w-full bg-[#0a0a5e] hover:bg-[#0a0a7e] mt-auto">
                  <Link href="/laoptimise">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Diocese Optimise */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-48 relative">
                <div className="absolute inset-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/church%20and%20school.jpg-4VUdsOyZs3gUCPult4F6jNyzEX2knk.jpeg"
                    alt="Church with adjoining primary school"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-purple-800 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link href="/dioceseoptimise" className="cursor-pointer transition-transform hover:scale-105">
                    <Image
                      src="/diocese-optimise.png"
                      alt="Diocese Optimise"
                      width={200}
                      height={80}
                      className="h-auto w-auto max-h-20 drop-shadow-[0_0_3px_rgba(255,255,255,1)] filter-none"
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 flex-1">
                  Specialised services for Diocesan education providers, focusing on faith population projections,
                  school/church asset mapping, space utilisation, development planning, and funding identification.
                </p>
                <Button asChild className="w-full bg-[#0a0a5e] hover:bg-[#0a0a7e] mt-auto">
                  <Link href="/dioceseoptimise">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* MAT Optimise */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-48 relative">
                <div className="absolute inset-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAT%20school%20image.jpg-BCQgohuGLahZWXHNgIbgpezDSm3Y3S.jpeg"
                    alt="Aerial view of school complex with sports facilities"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-green-800 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link href="/matoptimise" className="cursor-pointer transition-transform hover:scale-105">
                    <Image
                      src="/mat-optimise.png"
                      alt="MAT Optimise"
                      width={200}
                      height={80}
                      className="h-auto w-auto max-h-20 drop-shadow-[0_0_3px_rgba(255,255,255,1)] filter-none"
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 flex-1">
                  Tailored solutions for Multi-Academy Trusts to optimise their estate management, space utilisation,
                  and funding opportunities.
                </p>
                <Button asChild className="w-full bg-[#0a0a5e] hover:bg-[#0a0a7e] mt-auto">
                  <Link href="/matoptimise">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from the education providers we've helped to optimise their spaces and resources.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
            <blockquote className="text-lg text-gray-700 italic">
              "Having worked with 1st Planner for a number of years, I would unreservedly recommend engaging the
              services of this consultancy. We have reaped significant benefits from our collaboration which has
              resulted in substantial investment in our school estate."
            </blockquote>
            <div className="mt-4 flex items-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                AB
              </div>
              <div className="ml-4">
                <p className="font-semibold">Archdiocese of Birmingham</p>
                <p className="text-sm text-gray-500">Diocese</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a0a5e] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimise Your Education and Wider Estate?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how we can help you create high-quality school places while maximising your
              resources.
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
