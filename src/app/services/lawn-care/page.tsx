import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Lawn Care Services | Clips Lawncare - Bend, OR",
  description: "Professional lawn mowing, edging, and maintenance services in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon. Keep your lawn looking its best.",
};

const features = [
  {
    title: "Weekly & Bi-Weekly Mowing",
    description: "Consistent, scheduled mowing at the optimal height for your grass type and Central Oregon's climate.",
  },
  {
    title: "Precision Edging",
    description: "Clean, crisp edges along sidewalks, driveways, and garden beds for a polished look.",
  },
  {
    title: "String Trimming",
    description: "Careful trimming around obstacles, fences, trees, and areas mowers can't reach.",
  },
  {
    title: "Grass Clipping Management",
    description: "We either mulch clippings for lawn health or remove them based on your preference.",
  },
  {
    title: "Seasonal Adjustments",
    description: "We adjust mowing height and frequency based on the season for optimal lawn health.",
  },
  {
    title: "Lawn Health Monitoring",
    description: "We keep an eye on your lawn's condition and alert you to any issues we spot.",
  },
];

const benefits = [
  "Consistent, professional results every visit",
  "Flexible scheduling to fit your needs",
  "No contracts required - pay as you go",
  "Reliable service rain or shine",
  "Experienced, insured professionals",
  "Competitive, transparent pricing",
];

export default function LawnCarePage() {
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
                Premium Lawn Care
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Keep your lawn looking its best with our professional mowing, edging, and maintenance services. Tailored to Central Oregon&apos;s unique high desert climate.
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
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What&apos;s Included</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our premium lawn care service covers everything you need for a beautiful, healthy lawn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
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

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our Lawn Care?</h2>
              <p className="text-gray-300 text-lg mb-8">
                We take pride in delivering consistent, high-quality lawn care that keeps your property looking its best week after week.
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

            {/* Image Placeholder */}
            <div className="w-full aspect-square bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700">
              <div className="text-center text-gray-500">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Work Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for a Beautiful Lawn?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free quote for premium lawn care services. We&apos;ll create a customized plan for your property.
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
