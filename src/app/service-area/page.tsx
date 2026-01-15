import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Area | Clips Lawncare - Central Oregon Coverage",
  description: "Clips Lawncare serves Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon with premium lawn care services.",
};

const serviceAreas = [
  {
    city: "Bend",
    description: "Our home base. We provide comprehensive lawn care services throughout Bend, from the Old Mill District to the westside neighborhoods.",
    highlights: ["Downtown Bend", "Northwest Crossing", "Old Mill District", "Summit West", "Awbrey Butte"],
  },
  {
    city: "Redmond",
    description: "Serving the growing Redmond community with reliable lawn care and landscaping services.",
    highlights: ["Downtown Redmond", "Eagle Crest", "Canyon Rim", "Dry Canyon"],
  },
  {
    city: "Sunriver",
    description: "Expert pine needle removal and lawn care for the Sunriver resort community.",
    highlights: ["Sunriver Resort", "Caldera Springs", "Crosswater"],
  },
  {
    city: "Prineville",
    description: "Quality lawn care services extending to Prineville and the surrounding areas.",
    highlights: ["Downtown Prineville", "Meadow Lakes", "Crook County"],
  },
  {
    city: "La Pine",
    description: "Specialized services for La Pine's unique high desert environment.",
    highlights: ["La Pine State Park Area", "Newberry Estates", "Wickiup Junction"],
  },
];

export default function ServiceAreaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">Service Area</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Proudly Serving Central Oregon
            </h1>
            <p className="text-xl text-green-100">
              From Bend to La Pine, we provide premium lawn care services throughout Central Oregon. Find out if we service your area.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-400 p-8">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-lg font-medium mb-2">Service Area Map</p>
                <p className="text-sm">Interactive map showing our Central Oregon coverage area</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Coverage Area</h2>
              <p className="text-gray-600 text-lg mb-8">
                We proudly serve homeowners and businesses across Central Oregon. Our service area includes:
              </p>

              <div className="space-y-4">
                {serviceAreas.map((area) => (
                  <div key={area.city} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{area.city}, Oregon</h3>
                      <p className="text-sm text-gray-600">Full lawn care services available</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Learn more about our services in each community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <div key={area.city} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.city}, OR</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Areas include:</p>
                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((highlight) => (
                      <span key={highlight} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not in Area Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don&apos;t See Your Area?</h2>
          <p className="text-gray-600 mb-6">
            We may still be able to help! Contact us to discuss your location and lawn care needs. We&apos;re always looking to expand our service area.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors"
          >
            Contact Us to Ask
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            If you&apos;re in our service area, we&apos;d love to help with your lawn care needs. Get a free quote today!
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
