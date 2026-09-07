import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Clips Lawncare - Central Oregon Lawn Care",
  description: "Residential and commercial lawn maintenance plans plus a dedicated landscape crew, serving Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon.",
};

const divisions = [
  {
    title: "Residential",
    description: "Home lawn care built around two maintenance plans - Basic and Premium - with optional add-on packages for weed control, trimming, and irrigation.",
    href: "/services/residential",
    features: ["Basic & Premium maintenance plans", "Weed, trimming & irrigation add-ons", "Standalone aeration & dethatching", "Monthly cleanup subscriptions"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Commercial",
    description: "The same reliable Basic and Premium maintenance plans, scaled for businesses, HOAs, and commercial properties throughout Central Oregon.",
    href: "/services/commercial",
    features: ["Basic & Premium maintenance plans", "Weed, trimming & irrigation add-ons", "Standalone aeration & dethatching", "Monthly cleanup subscriptions"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7M9 9v.01M9 12v.01M9 15v.01" />
      </svg>
    ),
  },
  {
    title: "Landscape",
    description: "A dedicated landscape crew for project-based work: mulching, rock installation, garden beds, planting, pressure washing, cleanups, restorations, pine needle removal, hydroseeding, and sod.",
    href: "/services/landscape",
    features: ["Mulching & rock installation", "Garden beds & planting", "Pressure washing", "Restoration & cleanup projects"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l4 5h-2.5l3.5 5h-3l3 5H7l3-5H7l3.5-5H8l4-5z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Complete Lawn Care Solutions
            </h1>
            <p className="text-xl text-green-100">
              We organize our work into three divisions - Residential, Commercial, and Landscape - so every property gets a crew and a plan built for it.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions List */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {divisions.map((division, index) => (
              <div
                key={division.href}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-green-900/50 rounded-xl flex items-center justify-center text-green-400 mb-6">
                    {division.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{division.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{division.description}</p>

                  <ul className="space-y-3 mb-8">
                    {division.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={division.href}
                    className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Image Placeholder */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-full aspect-[4/3] bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700">
                    <div className="text-center text-gray-500">
                      <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">{division.title} Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today for a free quote. We&apos;ll assess your property and recommend the best plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:541-508-9047"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Call 541-508-9047
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
