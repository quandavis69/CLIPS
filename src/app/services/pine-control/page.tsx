import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pine Needle Removal Services | Clips Lawncare - Bend, OR",
  description: "Professional pine needle removal and cleanup services in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon. Reduce fire hazards and protect your lawn.",
};

const features = [
  {
    title: "Complete Yard Cleanup",
    description: "Thorough removal of pine needles from your lawn, garden beds, and landscape areas.",
  },
  {
    title: "Roof & Gutter Clearing",
    description: "Remove accumulated pine needles from roofs and gutters to prevent damage and fire hazards.",
  },
  {
    title: "Fire Hazard Reduction",
    description: "Create defensible space around your home by removing combustible pine needle buildup.",
  },
  {
    title: "Deck & Patio Cleaning",
    description: "Clear pine needles from decks, patios, and outdoor living spaces.",
  },
  {
    title: "Regular Maintenance Plans",
    description: "Scheduled cleanup services to keep pine needle accumulation under control.",
  },
  {
    title: "Debris Hauling",
    description: "We remove all collected pine needles from your property - no mess left behind.",
  },
];

const benefits = [
  "Reduce fire risk around your property",
  "Protect your lawn from needle damage",
  "Prevent gutter clogs and water damage",
  "Improve your property's curb appeal",
  "Save time on tedious cleanup",
  "Scheduled service keeps needles under control",
];

export default function PineControlPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/services" className="inline-flex items-center text-green-300 hover:text-white mb-4 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pine Needle Removal
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Living among the pines in Central Oregon? Our specialized pine needle removal service keeps your property clean, safe, and beautiful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Image Placeholder */}
            <div className="hidden lg:block">
              <div className="w-full aspect-[4/3] bg-green-700/30 rounded-2xl flex items-center justify-center">
                <div className="text-center text-green-200">
                  <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm opacity-75">Service Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Safety Alert */}
      <section className="py-8 bg-orange-50 border-y border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-orange-900">Fire Safety Reminder</h3>
              <p className="text-orange-800">
                Pine needle accumulation is a significant fire hazard in Central Oregon. Regular removal creates defensible space around your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Pine Needle Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We handle every aspect of pine needle cleanup to keep your property safe and looking great.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Remove Pine Needles?</h2>
              <p className="text-gray-600 text-lg mb-8">
                Pine needles may look harmless, but they can cause significant problems if left to accumulate. Here&apos;s why regular removal is important:
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="w-full aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Before/After Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Clear Those Pine Needles?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free quote for pine needle removal services. We&apos;ll assess your property and create a cleanup plan.
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
