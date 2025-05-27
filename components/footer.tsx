import Link from "next/link"
import Image from "next/image"
import { PhoneCall, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a5e] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo-white.png"
              alt="1st Planner Logo"
              width={200}
              height={80}
              className="h-16 w-auto mb-4"
              priority
            />
            <p className="text-sm mt-4 text-gray-300">
              We support education providers to create high quality school places for their pupils, without over
              spending against their capital and revenue budgets.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-300">
                <PhoneCall className="h-4 w-4 mr-2" />
                <span>01629 732967</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>enquiries@1stplanner.com</span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block mt-4 text-sm bg-white text-[#0a0a5e] px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} 1st Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
