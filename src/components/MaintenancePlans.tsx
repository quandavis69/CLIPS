import Link from "next/link";

interface MaintenancePlansProps {
  audience: "residential" | "commercial";
}

const corePlans = [
  {
    name: "Basic Maintenance",
    tagline: "Strictly mow, edge & blow service.",
    icon: "🌱",
    priceDisplay: "$60",
    priceUnit: "/ visit",
    priceNote: "Starting price for qualifying small, efficient properties. Final pricing depends on lawn size, property condition, accessibility, and expected service time.",
    features: [
      "Lawn mowing",
      "Edging as needed to maintain clean borders",
      "Blowing grass clippings and debris from serviced driveways, walkways, and patios",
    ],
  },
  {
    name: "Build Your Own Premium Package",
    tagline: "Start with Basic Maintenance, then add the services your property needs.",
    icon: "⭐",
    popular: true,
    priceDisplay: "Custom",
    priceUnit: "quote",
    priceNote: "We review your selections and property, then prepare a customized recurring price plus any separately scheduled seasonal charges.",
    features: [
      "Everything in Basic Maintenance",
      "Lawn fertilization",
      "Landscape bed weed control",
      "Aeration & dethatching",
      "Seasonal (spring/fall) cleanups",
      "Irrigation startup & seasonal monitoring",
      "Shrub pruning & hedging",
    ],
  },
];

const addOnServices = [
  { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
  { title: "Weed Control", href: "/services/weed-control" },
  { title: "Aeration", href: "/services/aeration" },
  { title: "Dethatching", href: "/services/dethatching" },
  { title: "Spring & Fall Cleanups", href: "/services/seasonal-cleanups" },
  { title: "Irrigation Services", href: "/services/irrigation" },
  { title: "Shrub Pruning & Hedging", href: "/services/shrub-pruning" },
];

const content = {
  residential: {
    eyebrow: "Residential Services",
    title: "Residential Lawn Care & Maintenance",
    subtitle: "Season-long lawn care built around Basic Maintenance, with add-on services to cover everything else your home's lawn needs.",
    planCta: "/maintenance-signup",
    planCtaLabel: "Build Your Package",
  },
  commercial: {
    eyebrow: "Commercial Services",
    title: "Commercial, HOA & Property Manager Maintenance",
    subtitle: "Dependable maintenance for businesses, HOAs, and properties managed by a property management company throughout Central Oregon.",
    planCta: "/contact",
    planCtaLabel: "Request a Custom Quote",
  },
};

export default function MaintenancePlans({ audience }: MaintenancePlansProps) {
  const copy = content[audience];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/services" className="flex items-center justify-center text-green-300 hover:text-white mb-4 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">{copy.eyebrow}</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">{copy.title}</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">{copy.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:541-305-8500"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              541-305-8500
            </a>
          </div>
        </div>
      </section>

      {/* Core Plans */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Step 1</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Choose Your Maintenance Plan</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Every maintenance program starts with Basic Maintenance. Add any combination of services to build a Premium package.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {corePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-gray-900 rounded-2xl p-8 border-2 ${
                  plan.popular ? "border-green-500" : "border-gray-800"
                } hover:border-green-500 transition-colors`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black px-6 py-1 rounded-full font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-green-400 font-medium mb-4">{plan.tagline}</p>
                  <div>
                    <span className="text-4xl font-bold text-white">{plan.priceDisplay}</span>
                    <span className="text-gray-400"> {plan.priceUnit}</span>
                    <p className="text-sm text-gray-500 mt-1">{plan.priceNote}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={copy.planCta}
                  className="block w-full text-center bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors"
                >
                  {copy.planCtaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {audience === "residential" ? (
        <>
          {/* Add-On Services */}
          <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Step 2</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Add-On Services</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Each service below has its own page with a detailed description and pricing. Add any combination to your Basic Maintenance plan.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {addOnServices.map((service) => (
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
        </>
      ) : (
        <>
          {/* Commercial Custom Contracts */}
          <section className="py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Custom Contracts</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Built Around Your Property</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Commercial, HOA, and property-manager accounts typically involve more than a single maintenance plan - multiple
                buildings, common areas, shared landscape beds, and irrigation systems that all need to be accounted for. Rather
                than fit every property into a fixed package, we build a maintenance contract around your property&apos;s specific
                scope, schedule, and budget.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Every commercial contract starts with Basic Maintenance and can include any combination of our add-on services -
                lawn fertilization, weed control, aeration, dethatching, seasonal cleanups, irrigation startup and monitoring, and
                shrub pruning and hedging. Contact us and we&apos;ll put together a proposal for your property.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {addOnServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="inline-flex items-center bg-gray-800 border border-gray-700 text-gray-200 px-5 py-2.5 rounded-full hover:border-green-500 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-green-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-400 transition-colors"
                >
                  Request a Custom Proposal
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today for a free quote and let us help you choose the right plan for your property.
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
        </div>
      </section>
    </div>
  );
}
