import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yard Cleanup Services | Clips Lawncare - Bend, OR",
  description: "Professional yard cleanup services in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon. Seasonal cleanups, leaf removal, and property restoration.",
};

const features = [
  {
    title: "Spring Cleanup",
    description: "Prepare your yard for the growing season with debris removal, dethatching, and bed preparation.",
  },
  {
    title: "Fall Leaf Removal",
    description: "Thorough removal of fallen leaves to protect your lawn through winter.",
  },
  {
    title: "Storm Debris Cleanup",
    description: "Quick response to clean up branches, leaves, and debris after storms.",
  },
  {
    title: "Property Restoration",
    description: "Bring neglected yards back to life with comprehensive cleanup and restoration.",
  },
  {
    title: "Garden Bed Cleanup",
    description: "Clear out old plants, weeds, and debris from garden beds and landscape areas.",
  },
  {
    title: "Debris Hauling",
    description: "We remove all yard waste from your property - nothing left behind.",
  },
];

const cleanupTypes = [
  {
    title: "One-Time Cleanup",
    description: "Perfect for properties that need a fresh start or have gotten overgrown.",
    ideal: "Ideal for: New homeowners, rental properties, neglected yards",
  },
  {
    title: "Seasonal Cleanup",
    description: "Scheduled spring and fall cleanups to prepare your yard for the coming season.",
    ideal: "Ideal for: Regular maintenance, seasonal preparation",
  },
  {
    title: "Emergency Cleanup",
    description: "Quick response to clean up storm damage, fallen trees, and unexpected messes.",
    ideal: "Ideal for: After storms, tree damage, urgent needs",
  },
];

export default function CleanupsPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
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
                Yard Cleanups
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Transform your outdoor space with our comprehensive cleanup services. From seasonal maintenance to complete property restoration, we&apos;ll make your yard shine.
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

      {/* Cleanup Types */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cleanup Options</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Choose the cleanup service that fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cleanupTypes.map((type) => (
              <div key={type.title} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <p className="text-sm text-green-400 font-medium">{type.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What&apos;s Included</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our cleanup services are comprehensive - we handle everything to restore your property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center text-green-400 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">See the Transformation</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our cleanup services make a dramatic difference. Whether your yard is overgrown, covered in leaves, or just needs some attention, we&apos;ll restore it to its full potential.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Remove all debris and yard waste</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Edge along walkways and beds</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Trim and shape overgrown plants</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Haul away everything we collect</span>
                </li>
              </ul>
            </div>

            {/* Before/After Placeholder */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
                <div className="text-center text-gray-500">
                  <p className="text-sm font-medium">Before</p>
                </div>
              </div>
              <div className="aspect-square bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
                <div className="text-center text-gray-500">
                  <p className="text-sm font-medium">After</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for a Fresh Start?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free quote for yard cleanup services. We&apos;ll assess your property and provide a detailed estimate.
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
