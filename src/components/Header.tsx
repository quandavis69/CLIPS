"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "Premium Lawn Care", href: "/services/lawn-care" },
  { name: "Weed Control", href: "/services/weed-control" },
  { name: "Pine Needle Removal", href: "/services/pine-control" },
  { name: "Cleanups", href: "/services/cleanups" },
  { name: "Installation", href: "/services/installation" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Service Area", href: "/service-area" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Clips Lawncare"
              width={200}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-green-400 transition-colors font-medium">
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 rounded-lg shadow-lg border border-gray-700 py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-green-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-green-400 font-medium hover:bg-gray-800 transition-colors"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/gallery" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
              Gallery
            </Link>
            <Link href="/service-area" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
              Service Area
            </Link>
            <Link href="/testimonials" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
              Testimonials
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:541-508-9047" className="flex items-center gap-2 text-green-400 font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              541-508-9047
            </a>
            <Link
              href="/contact"
              className="bg-green-500 text-black px-6 py-2.5 rounded-full hover:bg-green-400 transition-colors font-medium"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800 bg-black">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-green-400 transition-colors py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Services Submenu */}
              <div className="border-t border-gray-800 pt-2 mt-2">
                <p className="text-sm text-gray-500 mb-2">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-gray-400 hover:text-green-400 transition-colors py-1.5 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact */}
              <div className="border-t border-gray-800 pt-4 mt-2 space-y-3">
                <a href="tel:541-508-9047" className="flex items-center gap-2 text-green-400 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  541-508-9047
                </a>
                <Link
                  href="/contact"
                  className="block bg-green-500 text-black px-5 py-2.5 rounded-full hover:bg-green-400 transition-colors text-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
