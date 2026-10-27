import Link from "next/link";
import Image from "next/image";

interface MaintenancePlansProps {
  audience: "residential" | "commercial";
}

const maintenanceServices = [
  {
    title: "Basic Maintenance",
    description: "Weekly mowing, edging as needed, and blowing of driveways, walkways, and patios.",
    href: "/services/lawn-mowing",
    startingPrice: "$60",
    priceUnit: "/ visit",
  },
  {
    title: "Lawn Fertilization",
    description: "Scheduled spring, midseason, and fall fertilizer applications to support healthy lawn growth.",
    href: "/services/lawn-fertilization",
  },
  {
    title: "Weed Control",
    description: "Spring pre-emergent application plus seasonal summer and fall herbicide treatments.",
    href: "/services/weed-control",
  },
  {
    title: "Aeration",
    description: "Spring and/or fall core aeration to relieve soil compaction.",
    href: "/services/aeration",
    startingPrice: "$199",
    priceUnit: "/ service",
  },
  {
    title: "Dethatching",
    description: "Removes built-up thatch to improve lawn health.",
    href: "/services/dethatching",
    startingPrice: "$249",
    priceUnit: "/ service",
  },
  {
    title: "Spring & Fall Cleanups",
    description: "One-time seasonal cleanups to prepare your property for the growing season or for winter.",
    href: "/services/seasonal-cleanups",
    startingPrice: "$399",
    priceUnit: "/ cleanup",
  },
  {
    title: "Cleanup Maintenance",
    description: "Recurring property cleanups, once a month and twice a month October-November.",
    href: "/services/cleanup-maintenance",
    startingPrice: "$250",
    priceUnit: "/ visit",
  },
  {
    title: "Irrigation Services",
    description: "Sprinkler system startup, fall blow-out, and seasonal irrigation monitoring.",
    href: "/services/irrigation",
    inspectionRequired: true,
  },
  {
    title: "Shrub Pruning & Hedging",
    description: "Scheduled trimming and pruning to keep shrubs and hedges neat.",
    href: "/services/shrub-pruning",
  },
];

const content = {
  residential: {
    eyebrow: "Residential Services",
    title: "Residential Lawn Care & Maintenance",
    subtitle: "Every maintenance and landscape service we offer for homes, from weekly mowing to full landscape projects.",
    primaryCta: { href: "/maintenance-signup", label: "Build Your Package" },
  },
  commercial: {
    eyebrow: "Commercial Services",
    title: "Commercial, HOA & Property Manager Maintenance",
    subtitle: "Every maintenance and landscape service we offer for businesses, HOAs, and properties managed by a property management company throughout Central Oregon.",
    primaryCta: { href: "/contact", label: "Request a Custom Proposal" },
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

      {audience === "commercial" && (
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Custom Contracts</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">Built Around Your Property</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Commercial, HOA, and property-manager accounts typically involve more than a single maintenance plan -
                  multiple buildings, common areas, shared landscape beds, and irrigation systems that all need to be
                  accounted for. Rather than fit every property into a fixed package, we build a maintenance contract
                  around your property&apos;s specific scope, schedule, and budget from the services below.
                </p>
                <Link
                  href="/commercial-property-maintenance"
                  className="inline-flex items-center gap-1 text-green-400 font-semibold hover:text-green-300 transition-colors mt-4"
                >
                  See how our seasonal maintenance plans and monthly billing work →
                </Link>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
                <Image
                  src="/services/commercial-maintenance-flyer.jpg"
                  alt="Commercial landscape maintenance for properties, HOAs, office parks, and multi-unit communities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Maintenance Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Maintenance</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Every Maintenance Service We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Each service below has its own page with a full description and pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceServices.map((service) => (
              <div
                key={service.href}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <Link href={service.href} className="text-xl font-bold text-white hover:text-green-400 transition-colors">
                    {service.title}
                  </Link>
                  {service.startingPrice ? (
                    <span className="flex-shrink-0 text-right">
                      <span className="block text-[10px] font-semibold uppercase tracking-wide text-gray-500">Starting at</span>
                      <span className="text-xl font-extrabold text-green-400">{service.startingPrice}</span>
                      <span className="block text-xs text-gray-500 leading-tight">{service.priceUnit}</span>
                    </span>
                  ) : service.inspectionRequired ? (
                    <span className="flex-shrink-0 text-xs font-semibold text-gray-400 text-right pt-1">
                      Inspection required
                    </span>
                  ) : (
                    <Link
                      href="/contact"
                      className="flex-shrink-0 text-sm font-semibold text-green-400 hover:text-green-300 underline text-right"
                    >
                      Request Quote
                    </Link>
                  )}
                </div>
                <Link href={service.href} className="text-gray-400 hover:text-gray-300 transition-colors block">
                  {service.description}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Projects */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Projects</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Landscape Projects</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Beyond recurring maintenance, our landscape crew handles project-based work: mulching, rock installation, garden
            beds, planting, pressure washing, restoration projects, pine needle removal, sod installation and removal, gutter
            installation, and roof & gutter cleaning.
          </p>
          <Link
            href="/services/landscape"
            className="inline-flex items-center justify-center bg-green-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-400 transition-colors"
          >
            View Landscape Projects
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today for a free quote and let us help you choose the right services for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={copy.primaryCta.href}
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              {copy.primaryCta.label}
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
