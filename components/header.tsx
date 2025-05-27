import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCall, Mail } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/1stPlannerLogo.png"
            alt="1st Planner Logo"
            width={200}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/laoptimise" className="text-sm font-medium hover:text-primary transition-colors">
            LA Optimise
          </Link>
          <Link href="/dioceseoptimise" className="text-sm font-medium hover:text-primary transition-colors">
            Diocese Optimise
          </Link>
          <Link href="/matoptimise" className="text-sm font-medium hover:text-primary transition-colors">
            MAT Optimise
          </Link>
          <Link href="/clients" className="text-sm font-medium hover:text-primary transition-colors">
            Clients
          </Link>
          <Link href="/testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="/future" className="text-sm font-medium hover:text-primary transition-colors">
            Future
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <div className="flex items-center text-sm">
              <PhoneCall className="h-3 w-3 mr-1" />
              <span>01629 732967</span>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="h-3 w-3 mr-1" />
              <span>enquiries@1stplanner.com</span>
            </div>
          </div>
          <Button asChild variant="default" className="bg-[#0a0a5e] hover:bg-[#0a0a7e]">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

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
    </header>
  )
}
