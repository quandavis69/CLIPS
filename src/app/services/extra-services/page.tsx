import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extra Services | Clips Lawncare - Bend, OR",
  description: "Additional landscaping services including hydroseeding and rock & mulch glue in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon.",
};

const services = [
  {
    title: "Hydroseeding",
    tagline: "Grow a Lush Green Lawn in Just a Few Weeks!",
    description: "Transform bare or patchy areas into vibrant green lawns quickly and effectively with our professional hydroseeding service.",
    image: "/hydroseeding-promo.jpg",
    features: [
      "Fast & Effective",
      "Spray-on Solution",
      "Even Growth",
      "Cost-effective alternative to sod",
      "Perfect for large areas",
      "Erosion control",
    ],
  },
  {
    title: "Rock & Mulch Glue",
    tagline: "Keep Rocks & Mulch in Place",
    description: "Our specialized glue keeps your decorative rocks and mulch exactly where they belong, preventing washout and maintaining your landscape's appearance.",
    image: "/mulch-glue-promo.jpg",
    features: [
      "Toxic-Free Formula",
      "Clear Spray-On Adhesion",
      "Prevents Washout",
      "Long-lasting protection",
      "Safe for plants and pets",
      "Maintains curb appeal",
    ],
  },
];

export default function ExtraServicesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Extra Services
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Specialized solutions to enhance and protect your landscape investment. From establishing new lawns to keeping your decorative features in place.
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
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section key={service.title} className={`py-20 ${index % 2 === 0 ? 'bg-black' : 'bg-gray-900'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-2xl text-green-400 mb-6 font-semibold">
                  {service.tagline}
                </p>
                <p className="text-gray-300 text-lg mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors"
                >
                  Learn More & Get Quote
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in These Services?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today to learn more about our hydroseeding and rock & mulch glue services. We&apos;ll create a customized solution for your property.
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
