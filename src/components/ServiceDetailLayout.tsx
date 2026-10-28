import Link from "next/link";

interface ServiceDetailSection {
  heading: string;
  body: string[];
}

interface RelatedService {
  title: string;
  href: string;
}

interface ServiceDetailLayoutProps {
  eyebrow: string;
  title: string;
  intro: string;
  sections: ServiceDetailSection[];
  pricingNote: string;
  relatedServices: RelatedService[];
  path: string;
}

const BASE_URL = "https://clipslawncare.com";

export default function ServiceDetailLayout({
  eyebrow,
  title,
  intro,
  sections,
  pricingNote,
  relatedServices,
  path,
}: ServiceDetailLayoutProps) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: title,
    name: title,
    description: intro,
    url: `${BASE_URL}${path}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Clips Lawn Care LLC",
      url: BASE_URL,
      telephone: "+15413058500",
    },
    areaServed: ["Bend, OR", "Redmond, OR", "Sunriver, OR", "Prineville, OR", "Powell Butte, OR", "La Pine, OR"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: title, item: `${BASE_URL}${path}` },
    ],
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="flex items-center text-green-300 hover:text-white mb-4 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">{eyebrow}</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">{title}</h1>
          <p className="text-xl text-green-100 max-w-3xl">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/maintenance-signup"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors"
            >
              Build Your Package
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{section.heading}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-gray-300 text-lg leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-3">Pricing</h2>
            <p className="text-gray-300 leading-relaxed">{pricingNote}</p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-gray-900 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((service) => (
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
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8">
            Build a customized maintenance package or contact us for a quote on this service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/maintenance-signup"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Build Your Package
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
