import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a0a5e] text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-lg mb-8">
              Hear directly from our clients about their experiences working with 1st Planner and the results they've
              achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video Testimonial */}
      <section className="py-16 bg-[#0a0a5e] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Video Testimonial</h2>

            <div className="grid grid-cols-1 gap-8 items-center">
              {/* Video Embed */}
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden w-full max-w-4xl mx-auto">
                {/* Placeholder for video - replace with actual embed code */}
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg?height=400&width=600&text=Matt+Freeston+Video+Testimonial"
                >
                  <source
                    src="https://fmdowo7s1a9mqghf.public.blob.vercel-storage.com/Learners%27%20Trust%20-%20Matt%20Freeston%20%40%2008%2002%2020-vrp4AyywdMJmg44IR6WTjq100vJLRr.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Testimonial Content */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#0a0a5e] font-bold text-lg">LT</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Matt Freeston</h3>
                    <p className="text-blue-200">CEO, Learners' Trust</p>
                    <p className="text-sm text-blue-300">Multi-Academy Trust</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-relaxed">
                  <blockquote className="italic">
                    "Working with 1st Planner, they have used huge data sets and identified where capacity is both
                    inside our schools and across our estates. They have identified finances and opportunities for us to
                    develop those estates and the resulting plan has been really clear. It has identified not only
                    positives and opportunities across our trust but also for our Local Authorities particularly where
                    it comes to SEND provision and sufficiency. We are now getting the opportunity to work closely with
                    our Local Authorities to help the most vulnerable and needs children we have."
                  </blockquote>

                  <blockquote className="italic">
                    "1st Planner have been really good at identifying the 1st stages of the plans and helping us engage
                    with people from the DfE, Local Authority and industry partners to try and get things moving
                    forwards and we have a really clear pathway."
                  </blockquote>

                  <blockquote className="italic">
                    "What they do really works, it does adds huge capacity to the work of the Trust and delivers exactly
                    what it says on the tin."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center">More Client Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wolverhampton Testimonial */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-blue-600 text-white p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                      WC
                    </div>
                    <div>
                      <h3 className="font-bold">Wolverhampton City Council</h3>
                      <p className="text-sm">Local Authority</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <blockquote className="text-gray-700 italic mb-6">
                    "The partnership between the City of Wolverhampton Council and 1st Planner has successfully
                    supported our evidenced based approach to school place planning. The series of bespoke products
                    provided by 1st Planner offer a great starting point to both maximise the use of existing facilities
                    and support the development of future plans."
                  </blockquote>
                  <p className="font-semibold">Dave Kirby</p>
                  <p className="text-sm text-gray-500">
                    Service Manager, School Organisation and Support, Wolverhampton City Council
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Archdiocese of Birmingham Testimonial */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-purple-600 text-white p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">
                      AB
                    </div>
                    <div>
                      <h3 className="font-bold">Archdiocese of Birmingham</h3>
                      <p className="text-sm">Diocese</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <blockquote className="text-gray-700 italic mb-6">
                    "Having worked with 1st Planner for a number of years, I would unreservedly recommend engaging the
                    services of this consultancy. We have reaped significant benefits from our collaboration which has
                    resulted in substantial investment in our school estate."
                  </blockquote>
                  <p className="font-semibold">Toni Guest</p>
                  <p className="text-sm text-gray-500">Head of Diocesan Property, Archdiocese of Birmingham</p>
                </div>
              </CardContent>
            </Card>

            {/* Respect Collaboration of Schools Testimonial */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-600 text-white p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                      RC
                    </div>
                    <div>
                      <h3 className="font-bold">Respect Collaboration of Schools</h3>
                      <p className="text-sm">Multi-Academy Trust</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <blockquote className="text-gray-700 italic mb-6">
                    "Optimise, has been incredibly insightful in our exploration of supporting other local authorities
                    and schools. It allows us to easily decode data to make strategic decisions, we have been physically
                    given the information rather than having to use internal time and resources searching for it.
                    Previously we will have had many unknowns and be left with unanswered questions; this technology
                    provides our team and board with the confidence to proceed with working with specific organisations
                    that we wouldn't have had the confidence to work with in the past."
                  </blockquote>
                  <p className="font-semibold">Mike Pride</p>
                  <p className="text-sm text-gray-500">Executive Director, Respect Collaboration of Schools</p>
                </div>
              </CardContent>
            </Card>

            {/* Diverse Academies Trust Testimonial */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-600 text-white p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                      DA
                    </div>
                    <div>
                      <h3 className="font-bold">Diverse Academies Trust</h3>
                      <p className="text-sm">Multi-Academy Trust</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <blockquote className="text-gray-700 italic mb-6">
                    "We have worked closely with 1st Planner for a number of years, where they have supported Diverse
                    Academies Trust with the strategic planning of our pupil populations, assessing the
                    sufficiency/efficiency of our school estate and identification of potential capital funding sources
                    for expansion/improvement projects. Their use of extensive publicly available and school specific
                    datasets is unparalleled with the education asset management sector, and we are excited about the
                    development and roll out of Optimise, which will take this another step forward allowing us live and
                    dynamic access to intelligence that will be invaluable with the Trust's strategic planning."
                  </blockquote>
                  <p className="font-semibold">Andrew Wilson</p>
                  <p className="text-sm text-gray-500">
                    Head of Estates & Facilities Management, Diverse Academies Trust
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a0a5e] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Satisfied Clients</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how our optimisation services can help you create high-quality educational
              spaces while maximising your resources.
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
