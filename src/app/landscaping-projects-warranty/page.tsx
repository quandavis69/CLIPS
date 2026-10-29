import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Projects & Warranty Options | Clips Lawn Care",
  description: "Compare a cost-effective landscaping project with no warranty against a premium project with a multi-year warranty. Landscape installation, restoration, and irrigation projects in Bend, Oregon.",
  alternates: { canonical: "/landscaping-projects-warranty" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://clipslawncare.com" },
    { "@type": "ListItem", position: 2, name: "Landscape", item: "https://clipslawncare.com/services/landscape" },
    { "@type": "ListItem", position: 3, name: "Landscaping Projects & Warranty", item: "https://clipslawncare.com/landscaping-projects-warranty" },
  ],
};

const comparisonRows = [
  {
    feature: "Material selection",
    costEffective: "Cost-effective, suitable products",
    premium: "Premium, top-of-the-line products",
  },
  {
    feature: "Project execution",
    costEffective: "Priority on efficient execution",
    premium: "Greater scheduling flexibility",
  },
  {
    feature: "Project warranty",
    costEffective: "No project warranty",
    premium: "Multi-year warranty, terms project-specific",
  },
  {
    feature: "Best suited for",
    costEffective: "Budget-conscious projects",
    premium: "Customers prioritizing premium materials and warranty protection",
  },
];

function quoteHref(note: string) {
  const params = new URLSearchParams({ service: "Landscape Services", note });
  return `/contact?${params.toString()}`;
}

export default function LandscapingProjectsWarrantyPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services/landscape" className="flex items-center text-green-300 hover:text-white mb-4 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Landscape Services
          </Link>
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Landscaping Projects</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">
            Landscaping Projects &amp; Warranty Options
          </h1>
          <p className="text-xl text-green-100 max-w-3xl">
            For landscape installations, restorations, irrigation work, sod, and other landscaping projects, we
            provide two quotes for the same proposed project so you can choose the approach that best fits your
            budget, priorities, and expectations.
          </p>
        </div>
      </section>

      {/* Intro - Two Quote System */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Two-Quote System</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            This applies to landscape installations and renovations, landscape restorations, irrigation installation,
            repairs and improvements, lawn and sod installations, planting, mulch, rock, and other landscape
            improvements, and other applicable residential and commercial landscaping projects. Rather than lock you
            into a single approach, we quote most projects two ways so you can compare and choose what&apos;s right
            for your property.
          </p>
        </div>
      </section>

      {/* Option Details */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cost-Effective */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 flex flex-col">
              <span className="inline-block w-fit bg-gray-800 text-gray-300 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Option 1
              </span>
              <h2 className="text-2xl font-bold text-white mb-4">Cost-Effective Project</h2>
              <p className="text-gray-400 mb-6">No project warranty</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "We select cost-effective products and materials that are appropriate for the agreed scope of work.",
                  "We prioritize efficient scheduling and execution, with an emphasis on completing the project promptly.",
                  "Designed for customers who want to achieve their landscaping goals while controlling upfront costs.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-black border border-gray-800 rounded-xl px-5 py-4 text-sm text-gray-400 mb-8">
                This option does not include a project warranty. The absence of a warranty does not reflect our
                commitment to professional workmanship and completing the agreed scope of work - we stand behind the
                quality of our work on every project.
              </div>
              <Link
                href={quoteHref("Inquiry type: Cost-Effective Landscaping Project (no warranty)")}
                className="block w-full text-center bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors mt-auto"
              >
                Request a Cost-Effective Quote
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-gray-900 rounded-2xl p-8 border-2 border-green-500 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black px-6 py-1 rounded-full font-semibold text-sm">
                Warranty Included
              </div>
              <span className="inline-block w-fit bg-green-900/50 text-green-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 mt-2">
                Option 2
              </span>
              <h2 className="text-2xl font-bold text-white mb-4">Premium Project</h2>
              <p className="text-gray-400 mb-6">Multi-year warranty</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Premium materials and product selections, where applicable and available.",
                  "Greater flexibility in the project schedule, without the same priority on rapid execution. There is no predefined completion time limit advertised for this option - scheduling and completion expectations are discussed and agreed upon for each project.",
                  "A multi-year warranty, with the actual term and coverage determined by the project, materials, and installation requirements.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-black border border-green-900 rounded-xl px-5 py-4 text-sm text-gray-400 mb-8">
                The applicable warranty duration, exclusions, and coverage vary by project and are documented in your
                individual project proposal or agreement before work begins - they are not a fixed, universal term.
              </div>
              <Link
                href={quoteHref("Inquiry type: Premium Landscaping Project (multi-year warranty)")}
                className="block w-full text-center bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors mt-auto"
              >
                Request a Premium Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">At a Glance</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Compare the Two Options</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black">
                  <th className="px-5 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wide">Feature</th>
                  <th className="px-5 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wide">Cost-Effective</th>
                  <th className="px-5 py-4 text-sm font-semibold text-green-400 uppercase tracking-wide">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-gray-900" : "bg-black"}>
                    <td className="px-5 py-4 font-semibold text-white align-top">{row.feature}</td>
                    <td className="px-5 py-4 text-gray-300 align-top">{row.costEffective}</td>
                    <td className="px-5 py-4 text-gray-300 align-top">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Internal Link to Landscape Services */}
      <section className="py-16 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-lg">
            Not sure which option fits your project? First,{" "}
            <Link href="/services/landscape" className="text-green-400 hover:text-green-300 underline">
              explore our landscaping services
            </Link>{" "}
            to see the full range of work we handle, then reach out and we&apos;ll walk you through both quotes for
            your property.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-green-100 mb-8">
            Tell us about your landscaping project and we&apos;ll prepare both a cost-effective and a premium quote
            for you to compare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={quoteHref("Inquiry type: Landscaping project quote (compare both options)")}
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Request Your Project Quote
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
