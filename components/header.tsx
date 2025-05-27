import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCall, Mail } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"

export default function Header() {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
      <PageWrapper>
        <div className="flex flex-col">
          {/* Top row with logo and navigation */}
          <div className="flex items-center justify-evenly py-3">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/1stPlannerLogo.png"
                alt="1st Planner Logo"
                width={135}
                height={45}
                className="h-9 md:h-11 w-auto object-contain"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 text-center">
                Home
              </Link>
              <Link
                href="/laoptimise"
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 text-center"
              >
                LA Optimise
              </Link>
              <Link
                href="/dioceseoptimise"
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 text-center"
              >
                Diocese Optimise
              </Link>
              <Link
                href="/matoptimise"
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 text-center"
              >
                MAT Optimise
              </Link>
              <Link
                href="/clients"
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 text-center"
              >
                Clients
              </Link>
              <Link
                href="/testimonials"
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 text-center"
              >
                Testimonials
              </Link>
              <Link
                href="/future"
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 text-center"
              >
                Future
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 text-center"
              >
                Contact
              </Link>
              <Button asChild variant="default" size="sm" className="bg-[#0a0a5e] hover:bg-[#0a0a7e] ml-2">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>

          {/* Bottom row with contact info */}
          <div className="hidden md:flex items-center justify-center pb-2 border-t pt-2">
            <div className="flex items-center space-x-8">
              <div className="flex items-center text-sm">
                <PhoneCall className="h-3 w-3 mr-1" />
                <span>01629 732967</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-3 w-3 mr-1" />
                <span>enquiries@1stplanner.com</span>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </header>
  )
}
