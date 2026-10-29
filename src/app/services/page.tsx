import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Lawn Care & Landscaping Services | Clips Lawn Care - Central Oregon",
  description: "Residential and commercial lawn maintenance plans plus a dedicated landscape crew, serving Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services" },
};

const divisions = [
  {
    title: "Residential",
    description: "Home lawn care built around Basic Maintenance, with a Build Your Own Premium Package of add-on services for fertilization, weed control, aeration, dethatching, cleanups, irrigation, and shrub pruning.",
    href: "/services/residential",
    image: "/gallery/mower-equipment.png",
    imageAlt: "Clips Lawncare mowing equipment on a residential lawn",
    features: ["Basic Maintenance plan", "Build Your Own Premium Package", "Fertilization, weed control, aeration & dethatching", "Seasonal cleanups, irrigation & shrub pruning"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Commercial",
    description: "Custom maintenance contracts for businesses, HOAs, and properties managed by a property management company throughout Central Oregon - built around Basic Maintenance plus the services your property needs.",
    href: "/services/commercial",
    image: "/gallery/commercial-maintenance.png",
    imageAlt: "Clips Lawncare crew member maintaining landscape beds at a commercial HOA entrance",
    features: ["Custom maintenance contracts", "HOAs & property managers welcome", "Built around Basic Maintenance", "Add-on services scoped to your property"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7M9 9v.01M9 12v.01M9 15v.01" />
      </svg>
    ),
  },
  {
    title: "Landscape",
    description: "A dedicated landscape crew for project-based work: mulching, rock installation, garden beds, planting, pressure washing, cleanups, restorations, pine needle removal, sod, gutter installation, and roof & gutter cleaning.",
    href: "/services/landscape",
    image: "/gallery/landscape-bed.png",
    imageAlt: "A finished landscape bed with fresh mulch and clean stone edging",
    features: ["Mulching & rock installation", "Garden beds & planting", "Pressure washing", "Gutter installation & cleaning"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l4 5h-2.5l3.5 5h-3l3 5H7l3-5H7l3.5-5H8l4-5z" />
      </svg>
    ),
  },
];

const individualServices = [
  { title: "Mowing, Edging & Blowing", href: "/services/lawn-mowing" },
  { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
  { title: "Weed Control", href: "/services/weed-control" },
  { title: "Aeration", href: "/services/aeration" },
  { title: "Dethatching", href: "/services/dethatching" },
  { title: "Spring & Fall Cleanups", href: "/services/seasonal-cleanups" },
  { title: "Cleanup Maintenance", href: "/services/cleanup-maintenance" },
  { title: "Irrigation Services", href: "/services/irrigation" },
  { title: "Shrub Pruning & Hedging", href: "/services/shrub-pruning" },
  { title: "Landscape Projects", href: "/services/landscape" },
  { title: "Total Property Clean", href: "/total-property-clean" },
];

const faqs = [
  {
    question: "What's the difference between Basic Maintenance and a Premium Package?",
    answer: "Basic Maintenance starts at $60 per visit for mowing, edging, and blowing. A Premium Package starts with Basic Maintenance and adds any combination of fertilization, weed control, aeration, dethatching, cleanups, irrigation, and shrub pruning - each custom quoted for your property. Build one on our Weekly Maintenance Sign-Up page.",
  },
  {
    question: "Do I need a maintenance plan before adding other services?",
    answer: "Add-on services like fertilization, weed control, and shrub pruning build on top of Basic Maintenance. Aeration, dethatching, and cleanups can also be requested on their own.",
  },
  {
    question: "What's included in a landscape project?",
    answer: "Mulching, rock installation, garden beds, planting, pressure washing, cleanups, restorations, pine needle removal, sod installation and removal, gutter installation, and roof & gutter cleaning.",
  },
  {
    question: "How is Commercial different from Residential?",
    answer: "Commercial, HOA, and property-manager accounts are built as custom contracts rather than a self-serve package - every contract still starts with Basic Maintenance, with services scoped to the property.",
  },
  {
    question: "What's the difference between Spring & Fall Cleanups and Cleanup Maintenance?",
    answer: "Spring & Fall Cleanups are one-time seasonal services starting at $399 per cleanup. Cleanup Maintenance is a recurring service, once a month and twice a month from October through November, starting at $250 and ranging to $449 per visit.",
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
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">
              Complete Lawn Care Solutions
            </h1>
            <p className="text-xl text-green-100">
              We organize our work into three divisions - Residential, Commercial, and Landscape - so every property gets a crew and a plan built for it.
            </p>
          </div>
        </div>
      </section>

      {/* Total Property Clean Promo */}
      <section className="py-12 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-900/40 to-black border border-green-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Preparing to Sell?</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1 mb-2">
                Total Property Clean — A Complete Exterior Refresh
              </h2>
              <p className="text-gray-300">
                Pressure washing, landscape cleanup, plant &amp; lawn care, and irrigation adjustments in one
                coordinated service. Starting at $2,500.
              </p>
            </div>
            <Link
              href="/total-property-clean"
              className="flex-shrink-0 inline-flex items-center justify-center bg-green-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-400 transition-colors"
            >
              Learn More
            </Link>
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

                {/* Division Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {division.image ? (
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-green-500/10 transition-shadow duration-300">
                      <Image
                        src={division.image}
                        alt={division.imageAlt}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-green-900/40 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                      <div className="w-24 h-24 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400">
                        <div className="w-12 h-12">{division.icon}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Browse by Service</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Every Service We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Each service below has its own page with a detailed description and pricing.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {individualServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="inline-flex items-center bg-gray-800 border border-gray-700 text-gray-200 px-5 py-2.5 rounded-full hover:border-green-500 hover:text-white transition-colors"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-24 bg-black rounded-bl-[100px] hidden md:block"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-green-500"></span>
              FAQ
              <span className="w-8 h-0.5 bg-green-500"></span>
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Questions About Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              More detail on how our plans and packages work.
            </p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
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
              href="tel:541-305-8500"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Call 541-305-8500
            </a>
          </div>
          <p className="text-green-100 mt-6">
            Ready to start weekly service right away?{" "}
            <Link href="/maintenance-signup" className="underline font-semibold hover:text-white transition-colors">
              Sign up for weekly maintenance
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
