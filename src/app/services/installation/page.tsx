import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscape Installation Services | Clips Lawncare - Bend, OR",
  description: "Professional landscape installation services in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon. Sod, mulch, plants, and complete landscape makeovers.",
};

const services = [
  {
    title: "Sod Installation",
    description: "Transform bare dirt into a lush, green lawn with professional sod installation.",
    features: ["Soil preparation", "Grade leveling", "Premium sod selection", "Proper installation", "Watering guidance"],
  },
  {
    title: "Mulch & Rock Beds",
    description: "Enhance your landscape with professionally installed mulch or decorative rock.",
    features: ["Bed preparation", "Weed barrier installation", "Quality mulch/rock", "Clean edges", "Even coverage"],
  },
  {
    title: "Plant Installation",
    description: "Add trees, shrubs, and perennials to create a beautiful, thriving landscape.",
    features: ["Plant selection advice", "Proper planting depth", "Soil amendments", "Initial watering", "Care instructions"],
  },
  {
    title: "Garden Bed Creation",
    description: "Design and install new garden beds to enhance your property's curb appeal.",
    features: ["Design consultation", "Bed excavation", "Soil preparation", "Edging installation", "Plant placement"],
  },
];

const process = [
  {
    step: "1",
    title: "Consultation",
    description: "We visit your property to discuss your vision and assess the site conditions.",
  },
  {
    step: "2",
    title: "Planning",
    description: "We create a plan and provide a detailed quote for your approval.",
  },
  {
    step: "3",
    title: "Preparation",
    description: "We prepare the site, including grading, soil amendments, and weed prevention.",
  },
  {
    step: "4",
    title: "Installation",
    description: "Our team installs your new landscape features with attention to detail.",
  },
  {
    step: "5",
    title: "Completion",
    description: "Final cleanup and walkthrough to ensure your complete satisfaction.",
  },
];

export default function InstallationPage() {
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
                Landscape Installation
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Transform your outdoor space with professional landscape installation. From new sod to complete makeovers, we bring your vision to life.
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

      {/* Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Installation Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Professional installation services to enhance your property&apos;s beauty and value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We follow a proven process to ensure your installation project goes smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-green-900"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Us for Installation?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our installation services are backed by experience, quality materials, and a commitment to your satisfaction.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Quality materials suited for Central Oregon&apos;s climate</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Proper installation techniques for lasting results</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Clear communication throughout the project</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Complete cleanup when we&apos;re done</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Care instructions to help your investment thrive</span>
                </li>
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="w-full aspect-square bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700">
              <div className="text-center text-gray-500">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Installation Photo</p>
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
            Get a free consultation and quote for your installation project. Let&apos;s bring your vision to life.
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
