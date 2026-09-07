import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscape Services | Clips Lawncare - Bend, OR",
  description: "Landscape crew services in Central Oregon: mulching, rock installation, garden beds, planting, pressure washing, cleanups, restoration projects, pine needle removal, and sod.",
};

const services = [
  {
    title: "Mulching",
    description: "Fresh mulch beds that lock in moisture, suppress weeds, and finish off your landscape design.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    features: ["Various mulch types available", "Weed barrier installation", "Edge trimming and bed preparation"],
  },
  {
    title: "Rock Installation",
    description: "Decorative rock beds and borders that hold up to Central Oregon's wind and weather.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 20l5-9 4 5 3-4 6 8H3z" />
      </svg>
    ),
    features: ["Decorative river rock", "Lava rock and specialty stones", "Proper base and weed barrier prep"],
  },
  {
    title: "Garden Beds",
    description: "New garden beds designed and installed to fit your property and plant choices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20h16M8 20V10a4 4 0 018 0v10" />
      </svg>
    ),
    features: ["Design consultation", "Bed excavation & edging", "Soil preparation", "Plant placement"],
  },
  {
    title: "Planting",
    description: "Trees, shrubs, and perennials selected and installed for Central Oregon's high desert climate.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    features: ["Native & drought-tolerant plants", "Ornamental trees and shrubs", "Soil preparation and amendments", "Seasonal planting recommendations"],
  },
  {
    title: "Pressure Washing",
    description: "Restore driveways, patios, walkways, and other hardscape surfaces.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-4.418 0-8-3.14-8-7 0-4 8-13 8-13s8 9 8 13c0 3.86-3.582 7-8 7z" />
      </svg>
    ),
    features: ["Driveways & walkways", "Patios & decks", "Building exteriors", "Fences & retaining walls"],
  },
  {
    title: "Cleanups",
    description: "One-time or seasonal cleanups to reset a yard that's gotten overgrown or neglected.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    features: ["Spring & fall cleanups", "Leaf & debris removal", "Storm debris cleanup", "Yard waste hauling"],
  },
  {
    title: "Restoration Projects",
    description: "Bring a neglected or storm-damaged landscape back to life with a full property restoration.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    features: ["Overgrowth removal", "Regrading & soil restoration", "New sod, plants, or beds", "Complete property makeovers"],
  },
  {
    title: "Pine Needle Removal",
    description: "Thorough pine needle removal to protect your lawn, clear roofs and gutters, and reduce fire hazards.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l4 5h-2.5l3.5 5h-3l3 5H7l3-5H7l3.5-5H8l4-5z" />
      </svg>
    ),
    features: ["Lawn, roof & gutter clearing", "Fire hazard reduction", "Deck & patio cleaning", "Debris hauling"],
  },
  {
    title: "Sod Installation & Removal",
    description: "Complete sod replacement services, from removing old grass to installing a fresh, lush lawn.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
      </svg>
    ),
    features: ["Old sod removal & disposal", "Ground leveling & preparation", "Premium quality sod installation", "Soil amendments as needed"],
  },
];

const benefits = [
  "Free on-site consultations and estimates",
  "Licensed and insured professionals",
  "Quality materials and workmanship",
  "Central Oregon climate expertise",
  "Competitive, transparent pricing",
  "Satisfaction guaranteed",
];

export default function LandscapePage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center text-green-300 hover:text-white mb-4 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Landscape Crew</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Landscape Services
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Project-based landscaping for Central Oregon properties - from a fresh mulch bed to a full property restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:541-305-8500"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                541-305-8500
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Landscape Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive landscaping solutions to create and maintain beautiful outdoor spaces in Central Oregon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 transition-colors">
                <div className="w-16 h-16 bg-green-900/50 rounded-xl flex items-center justify-center text-green-400 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Clips for Your Landscape?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We understand Central Oregon&apos;s unique climate challenges and create landscapes that thrive in our high desert environment. From design to installation to ongoing maintenance, we deliver exceptional results.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700">
                <div className="text-4xl font-bold text-green-400 mb-2">5★</div>
                <div className="text-gray-400">Customer Rating</div>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-400">Licensed & Insured</div>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700">
                <div className="text-4xl font-bold text-green-400 mb-2">Local</div>
                <div className="text-gray-400">Owned & Operated</div>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700">
                <div className="text-4xl font-bold text-green-400 mb-2">Free</div>
                <div className="text-gray-400">Estimates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Landscape?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free consultation and quote for your landscape project. We&apos;ll work with you to create the outdoor space of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:541-305-8500"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Call 541-305-8500
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
