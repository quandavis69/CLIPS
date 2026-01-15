import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weed Control Services | Clips Lawncare - Bend, OR",
  description: "Professional weed control and prevention services in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon. Eliminate weeds and keep them from coming back.",
};

const features = [
  {
    title: "Weed Identification",
    description: "We identify the specific weeds affecting your lawn to apply the most effective treatment.",
  },
  {
    title: "Targeted Treatments",
    description: "Precision application of appropriate treatments to eliminate weeds without harming your lawn.",
  },
  {
    title: "Pre-Emergent Control",
    description: "Preventive treatments to stop weeds before they have a chance to sprout.",
  },
  {
    title: "Post-Emergent Control",
    description: "Effective treatments for existing weeds to quickly restore your lawn's appearance.",
  },
  {
    title: "Safe Applications",
    description: "We use products that are safe for your family, pets, and the environment.",
  },
  {
    title: "Ongoing Maintenance",
    description: "Regular monitoring and treatment plans to keep weeds from returning.",
  },
];

const commonWeeds = [
  "Dandelions",
  "Crabgrass",
  "Clover",
  "Thistle",
  "Bindweed",
  "Cheatgrass",
];

export default function WeedControlPage() {
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
                Weed Control
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Eliminate unsightly weeds and prevent new growth with our professional weed control services. We&apos;ll keep your lawn pristine and weed-free.
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

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Weed Control Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We take a comprehensive approach to weed control that addresses both existing weeds and prevents future growth.
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

      {/* Common Weeds */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Common Central Oregon Weeds We Treat</h2>
              <p className="text-gray-600 text-lg mb-8">
                Our high desert climate creates unique weed challenges. We&apos;re experienced in treating all common Central Oregon weeds including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                {commonWeeds.map((weed) => (
                  <div key={weed} className="flex items-center gap-3 bg-white rounded-lg p-4">
                    <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium text-gray-900">{weed}</span>
                  </div>
                ))}
              </div>
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
            Ready for a Weed-Free Lawn?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free quote for weed control services. We&apos;ll assess your lawn and create a treatment plan.
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
