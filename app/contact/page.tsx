"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Mail, MapPin, Clock, Send, Linkedin, Twitter } from "lucide-react"
import { ServerGoogleMap } from "@/components/server-google-map"

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a0a5e] text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg mb-8">
              Contact us today to discuss how our optimisation services can help you create high-quality educational
              spaces while maximising your resources.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <PhoneCall className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600">01629 732967</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">enquiries@1stplanner.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-gray-600">
                          1st Planner Ltd
                          <br />
                          18 Brunswood Road
                          <br />
                          Matlock Bath
                          <br />
                          Derbyshire
                          <br />
                          DE4 3PA
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                        <Clock className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 08:00 AM - 5:00 PM
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="pt-4">
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-[#0a0a5e] flex items-center justify-center text-white hover:bg-[#0a0a7e] transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-[#0a0a5e] flex items-center justify-center text-white hover:bg-[#0a0a7e] transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your full name" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium">
                      Organization
                    </label>
                    <Input id="organization" placeholder="Your organization" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Your email address" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[150px]"
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="button" className="bg-[#0a0a5e] hover:bg-[#0a0a7e]">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <p className="text-gray-600">
              Find us at our office in Derbyshire, where our team of experts is ready to assist you with your
              educational space optimization needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <ServerGoogleMap />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">How quickly can you provide an initial assessment?</h3>
                <p className="text-gray-600 text-sm">
                  We typically provide an initial assessment within 2-3 weeks of receiving all necessary data and
                  information from your organization.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">What information do you need to get started?</h3>
                <p className="text-gray-600 text-sm">
                  To begin our optimization process, we typically need floor plans, current space utilization data,
                  pupil/student numbers, and any relevant demographic projections. Our team will guide you through the
                  specific requirements during our initial consultation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Do you work with organizations outside the UK?</h3>
                <p className="text-gray-600 text-sm">
                  While we primarily serve organizations within the UK, we are open to international projects. Please
                  contact us to discuss your specific requirements and location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">How do you charge for your services?</h3>
                <p className="text-gray-600 text-sm">
                  Our pricing is based on the scope and complexity of each project. We offer tailored packages to meet
                  the specific needs of each client. Contact us for a detailed quote based on your requirements.
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
            <h2 className="text-2xl font-bold mb-4">Ready to Optimise Your Educational Spaces?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how our optimisation services can help you create high-quality educational
              spaces while maximising your resources.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#0a0a5e] hover:bg-gray-200">
                <Link href="tel:01629732967">
                  <PhoneCall className="h-4 w-4 mr-2" />
                  Call Us
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0a0a5e]"
              >
                <Link href="mailto:enquiries@1stplanner.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
