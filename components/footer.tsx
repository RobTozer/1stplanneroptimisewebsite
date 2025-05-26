import Link from "next/link"
import Image from "next/image"
import { PhoneCall, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a5e] text-white">
      <div className="container py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Image
              src="/logo-white.png"
              alt="1st Planner Logo"
              width={200}
              height={80}
              className="h-12 md:h-16 w-auto mb-3 md:mb-4"
              priority
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              We support education providers to create high quality school places for their pupils, without over
              spending against their capital and revenue budgets.
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/laoptimise" className="text-sm text-gray-300 hover:text-white transition-colors">
                  LA Optimise
                </Link>
              </li>
              <li>
                <Link href="/dioceseoptimise" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Diocese Optimise
                </Link>
              </li>
              <li>
                <Link href="/matoptimise" className="text-sm text-gray-300 hover:text-white transition-colors">
                  MAT Optimise
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 font-heading">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-300">
                <PhoneCall className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>01629 732967</span>
              </li>
              <li className="flex items-start text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>enquiries@1stplanner.com</span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block mt-3 md:mt-4 text-sm bg-white text-[#0a0a5e] px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-xs md:text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} 1st Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
