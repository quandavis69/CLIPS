import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Total Property Clean & Pre-Sale Cleanup | Clips Lawn Care",
  description: "Prepare your property for the market with Clips Lawn Care's Total Property Clean in Bend, Oregon. Pressure washing, landscape cleanup, debris removal, and irrigation adjustments. Starting at $2,500.",
  alternates: { canonical: "/total-property-clean" },
};

const BASE_URL = "https://clipslawncare.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Total Property Clean", item: `${BASE_URL}/total-property-clean` },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Total Property Clean",
  name: "Total Property Clean",
  description: "A comprehensive exterior property cleanup including pressure washing, landscape cleanup, plant and lawn care, and irrigation inspection, starting at $2,500.",
  url: `${BASE_URL}/total-property-clean`,
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Clips Lawn Care LLC",
    url: BASE_URL,
    telephone: "+15413058500",
  },
  areaServed: ["Bend, OR", "Redmond, OR", "Sunriver, OR", "Prineville, OR", "Powell Butte, OR", "La Pine, OR"],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "2500",
  },
};

const audiences = [
  "Homes preparing to go on the market",
  "Real estate agents preparing properties for listing photography and showings",
  "Vacant or neglected properties needing an exterior refresh",
  "Homeowners preparing for a sale, event, or seasonal transition",
  "Property owners who want multiple exterior maintenance tasks handled in one coordinated service",
];

const includedServices = [
  {
    title: "Property & Walkway Pressure Washing",
    items: [
      "Pressure washing of appropriate exterior hard surfaces and walkways.",
      "We assess surface materials and condition before washing.",
      "Surfaces that require lower pressure or specialized cleaning methods are identified and handled accordingly - not every building exterior, roof, or siding material is suitable for standard high-pressure washing.",
    ],
  },
  {
    title: "Full-Service Landscape Cleanup",
    items: [
      "Lawn mowing.",
      "Lawn edging and trimming.",
      "Weed removal and general weed management.",
      "Debris and yard waste removal.",
      "General cleanup of applicable landscape areas.",
    ],
  },
  {
    title: "Plant & Lawn Care",
    items: [
      "Fertilization of lawns and landscape plants where appropriate.",
      "We assess plant and lawn conditions before recommending products or treatments.",
      "Only treatments suitable for the property and consistent with applicable licensing and label requirements are used.",
    ],
  },
  {
    title: "Irrigation Inspection & Adjustments",
    items: [
      "Inspection of accessible sprinkler zones and irrigation components.",
      "Reasonable sprinkler-head adjustments and coverage corrections where included in the agreed scope.",
      "Visible problems are identified, with repairs recommended when necessary. Major irrigation repairs, replacement components, or system redesign are not automatically included in the starting price.",
    ],
  },
  {
    title: "Follow-Up Service Discount",
    items: [
      "A 10% discount coupon for one eligible follow-up service after your Total Property Clean is completed.",
      "The coupon is provided after the Total Property Clean is completed and applies to one eligible follow-up service - it does not apply to the Total Property Clean itself.",
    ],
  },
];

function quoteHref(note: string) {
  const params = new URLSearchParams({ service: "Landscape Services", note });
  return `/contact?${params.toString()}`;
}

export default function TotalPropertyCleanPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="flex items-center text-green-300 hover:text-white mb-4 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Premium Service</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">
            Total Property Clean — A Complete Exterior Refresh
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mb-8">
            Get your property market-ready with a comprehensive exterior cleanup designed to make a stronger first
            impression.
          </p>
          <div className="inline-flex items-baseline gap-2 bg-black/30 border border-green-700 rounded-2xl px-6 py-4 mb-8">
            <span className="text-4xl font-extrabold text-white">Starting at $2,500</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={quoteHref("Inquiry type: Total Property Clean quote request (starting at $2,500). Please include: approximate property size, current property condition, and your requested completion timeframe below.")}
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors"
            >
              Request a Total Property Clean Quote
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

      {/* Who It's For */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Built for a Stronger First Impression</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Total Property Clean is a coordinated, multi-task exterior refresh - not just a basic mowing visit.
              It&apos;s especially useful for:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {audiences.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-black border border-gray-800 rounded-xl p-5">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">What&apos;s Included</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">A Complete Exterior Refresh</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Core service scope, subject to property conditions and the agreed project proposal.
            </p>
          </div>
          <div className="space-y-8">
            {includedServices.map((service, i) => (
              <div key={service.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  {i + 1}. {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">Starting at $2,500</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Every property is different. Final pricing is based on property size, current condition, accessibility,
            debris volume, cleaning requirements, and the total scope of work. We will assess your property and
            provide a project-specific quote before work begins.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get Your Property Market-Ready</h2>
          <p className="text-xl text-green-100 mb-8">
            Preparing to list, host an event, or just want your property looking its best? Let&apos;s schedule a
            property assessment and build your Total Property Clean quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={quoteHref("Inquiry type: Total Property Clean - Schedule a Property Assessment")}
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Schedule a Property Assessment
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
