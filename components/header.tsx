"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCall, Mail, Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/1stPlannerLogo.png"
            alt="1st Planner Logo"
            width={200}
            height={80}
            className="h-12 md:h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
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

        {/* Desktop Contact Info */}
        <div className="hidden xl:flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <div className="flex items-center text-xs">
              <PhoneCall className="h-3 w-3 mr-1" />
              <span>01629 732967</span>
            </div>
            <div className="flex items-center text-xs">
              <Mail className="h-3 w-3 mr-1" />
              <span>enquiries@1stplanner.com</span>
            </div>
          </div>
          <Button asChild variant="default" className="bg-[#0a0a5e] hover:bg-[#0a0a7e]">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/laoptimise"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LA Optimise
            </Link>
            <Link
              href="/dioceseoptimise"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Diocese Optimise
            </Link>
            <Link
              href="/matoptimise"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MAT Optimise
            </Link>
            <Link
              href="/clients"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="/testimonials"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/future"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Future
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t space-y-2">
              <div className="flex items-center text-sm">
                <PhoneCall className="h-4 w-4 mr-2" />
                <span>01629 732967</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <span>enquiries@1stplanner.com</span>
              </div>
              <Button asChild className="w-full bg-[#0a0a5e] hover:bg-[#0a0a7e] mt-4">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
