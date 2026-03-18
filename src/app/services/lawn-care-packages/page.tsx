import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lawn Care Packages | Clips Lawncare - Bend, OR",
  description: "Choose from our comprehensive lawn care packages including Basic Maintenance, Premium, Eco & Eco Premium, and Weed Control & Pine Needle Maintenance in Central Oregon.",
};

const packages = [
  {
    id: 1,
    name: "Package 1: Basic Maintenance",
    tagline: "Designed for reliable, professional lawn upkeep.",
    icon: "🌱",
    includes: [
      "Weekly mowing with rotating mowing patterns to promote healthy, even growth",
      "Precision edging, including weed control within 6 inches of all borders",
    ],
    additionalServices: [
      "Landscaping clean-ups",
      "Sprinkler blowouts",
      "Seasonal gutter blowouts",
      "Aeration & Dethatching",
      "Mulch Rock installation",
      "Planting services",
      "Sod removal",
      "PM scheduled touch-ups (on weekly maintenance day)",
    ],
  },
  {
    id: 2,
    name: "Package 2: Premium",
    tagline: "Our most comprehensive lawn care solution.",
    icon: "⭐",
    popular: true,
    includes: [
      "Weekly mowing with rotating mowing patterns",
      "Weekly dog waste pickup (added if needed)",
      "Detailed edging with weed control",
      "Tree/Hedge trimming",
      "Fertilization available anytime for only an additional $10 per application (*Large lawns may cost up to $20)",
      "Seasonal gutter blowouts",
      "10% discount on all additional services, including:",
    ],
    additionalServices: [
      "Landscaping clean-ups",
      "Sprinkler blowouts",
      "Aeration & Dethatching",
      "Sod removal",
      "Mulch & Rock installation",
      "Planting services",
      "Hydroseeding",
    ],
  },
  {
    id: 3,
    name: "Package 3: Eco & Eco Premium",
    tagline: "For environmentally conscious clients seeking quieter, low-emission service.",
    icon: "🍃",
    description: "Includes all services from the Basic Package:",
    highlight: "100% electric equipment:",
    equipment: [
      "Mowers",
      "Trimmers",
      "Weed whackers",
      "Blowers",
    ],
    note: "Clients also have access to dog waste pickup",
  },
  {
    id: 4,
    name: "Package 4: Weed Control & Pine Needle Maintenance",
    tagline: "Weekly weed control and/or pine needle removal",
    icon: "🌲",
    includes: [
      "Pricing varies based on:",
      "Property size",
      "Number of trees (pine needle control)",
      "Density of weeds or pine needle",
      "Manual removal, trimming and spraying",
    ],
    note: "Note: clients also have access to dog waste pickup with this package if requested",
  },
];

export default function LawnCarePackagesPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/services" className="inline-flex items-center text-green-300 hover:text-white mb-4 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lawn Care Packages
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Choose the perfect lawn care package for your Central Oregon property. From basic maintenance to comprehensive premium care, we have a solution for every need and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:541-508-9047"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              541-508-9047
            </a>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-gray-900 rounded-2xl p-8 border-2 ${
                  pkg.popular ? 'border-green-500' : 'border-gray-800'
                } hover:border-green-500 transition-colors`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black px-6 py-1 rounded-full font-semibold text-sm">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-green-400 text-lg font-medium">
                    {pkg.tagline}
                  </p>
                </div>

                {pkg.description && (
                  <p className="text-gray-300 mb-4">{pkg.description}</p>
                )}

                {pkg.highlight && (
                  <div className="mb-4">
                    <p className="text-white font-semibold mb-2">{pkg.highlight}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.equipment?.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-gray-300">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {pkg.includes && (
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      {pkg.id === 1 ? "Includes:" : pkg.id === 4 ? "Details:" : "Includes:"}
                    </h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {pkg.additionalServices && (
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-3">
                      {pkg.id === 1 ? "For additional services, including:" : "Additional Services:"}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pkg.additionalServices.map((service, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-green-400">•</span>
                          <span className="text-gray-400 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {pkg.note && (
                  <div className="mt-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <p className="text-gray-300 text-sm">
                      <span className="font-semibold text-green-400">Note:</span> {pkg.note.replace('Note: ', '')}
                    </p>
                  </div>
                )}

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors"
                  >
                    Choose This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Packages?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our lawn care packages are designed specifically for Central Oregon&apos;s unique climate and landscape challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Flexible Pricing</h3>
              <p className="text-gray-400">Choose a package that fits your budget and needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Licensed & Insured</h3>
              <p className="text-gray-400">Professional service you can trust</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">5-Star Service</h3>
              <p className="text-gray-400">Locally owned with exceptional customer care</p>
            </div>
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
            Contact us today for a free quote and let us help you choose the perfect lawn care package for your property.
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
