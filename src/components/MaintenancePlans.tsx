import Link from "next/link";

interface MaintenancePlansProps {
  audience: "residential" | "commercial";
}

const corePlans = [
  {
    name: "Basic Maintenance",
    tagline: "Reliable weekly upkeep to keep your property clean and healthy.",
    icon: "🌱",
    features: [
      "Weekly or bi-weekly lawn mowing",
      "Precision lawn edging",
      "Leaf blowing & service area clean-up",
    ],
  },
  {
    name: "Premium Maintenance",
    tagline: "Complete season-long care for a lawn that thrives year-round.",
    icon: "⭐",
    popular: true,
    features: [
      "Everything in Basic Maintenance",
      "Spring aeration",
      "Spring overseed",
      "Spring fertilizer application",
      "Summer fertilization with soil strengthener",
      "Fall fertilization & reseed",
      "10% off all add-on packages",
    ],
  },
];

const addOnPackages = [
  {
    name: "Weed Package",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: [
      "Spring pre-emergent application",
      "2x summer herbicide applications",
      "2x fall herbicide applications",
    ],
  },
  {
    name: "Trimming Package",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    features: [
      "Bush trimming",
      "Plant trimming",
      "Tree trimming",
    ],
  },
  {
    name: "Irrigation Package",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-4.418 0-8-3.14-8-7 0-4 8-13 8-13s8 9 8 13c0 3.86-3.582 7-8 7z" />
      </svg>
    ),
    features: [
      "Spring water turn-on & system test",
      "Fall irrigation blow-out",
      "Free inspections & quotes on irrigation repairs",
    ],
  },
];

const standaloneServices = [
  {
    name: "Aeration",
    badge: "One-time service",
    description: "Relieves soil compaction so water, air, and nutrients reach the roots. No subscription required.",
  },
  {
    name: "Dethatching",
    badge: "One-time service",
    description: "Removes built-up thatch so your lawn can breathe and absorb nutrients more effectively. No subscription required.",
  },
  {
    name: "Cleanup Maintenance Package",
    badge: "Monthly subscription",
    description: "Once-monthly property clean-ups to keep things tidy between seasons.",
  },
];

const content = {
  residential: {
    eyebrow: "Residential Services",
    title: "Residential Lawn Care & Maintenance",
    subtitle: "Season-long lawn care built around two simple maintenance plans, with add-on packages to cover everything else your home's lawn needs.",
  },
  commercial: {
    eyebrow: "Commercial Services",
    title: "Commercial Property Maintenance",
    subtitle: "Dependable, scheduled maintenance plans for businesses, HOAs, and commercial properties throughout Central Oregon, with add-on packages to cover everything else your property needs.",
  },
};

export default function MaintenancePlans({ audience }: MaintenancePlansProps) {
  const copy = content[audience];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/services" className="inline-flex items-center text-green-300 hover:text-white mb-4 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">{copy.eyebrow}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">{copy.title}</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">{copy.subtitle}</p>
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
      </section>

      {/* Core Plans */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Step 1</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Choose Your Core Plan</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Every maintenance program starts with one of these two plans. All add-ons below build on top of them.
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
                  <p className="text-green-400 font-medium">{plan.tagline}</p>
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
                  href="/contact"
                  className="block w-full text-center bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors"
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Packages */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Step 2</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Maintenance Add-Ons</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Add these packages on top of your plan - billed together with your subscription.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-green-900/30 border border-green-800 rounded-xl px-6 py-4 text-center text-green-200">
              A Basic or Premium plan is required before add-on packages can be purchased. Premium subscribers get 10% off every add-on.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOnPackages.map((addOn) => (
              <div key={addOn.name} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="w-14 h-14 bg-green-900/50 rounded-xl flex items-center justify-center text-green-400 mb-6">
                  {addOn.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{addOn.name}</h3>
                <ul className="space-y-2">
                  {addOn.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standalone Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Available Separately</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">No Plan Required</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              These services don&apos;t require a Basic or Premium plan and can be booked on their own.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {standaloneServices.map((service) => (
              <div key={service.name} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 text-center">
                <span className="inline-block bg-green-900/50 text-green-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {service.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
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
