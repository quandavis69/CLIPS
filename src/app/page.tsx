import Link from "next/link";
import Image from "next/image";
import { getGooglePlaceReviews } from "@/lib/googleReviews";
import { curatedGoogleReviews } from "@/data/googleReviews";

const services = [
  {
    title: "Residential",
    description: "Home lawn care built around Basic and Premium maintenance plans, with add-ons for weed control, trimming, and irrigation.",
    href: "/services/residential",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Commercial",
    description: "The same reliable maintenance plans, scaled for businesses, HOAs, and commercial properties.",
    href: "/services/commercial",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7M9 9v.01M9 12v.01M9 15v.01" />
      </svg>
    ),
  },
  {
    title: "Landscape",
    description: "Project-based work from our landscape crew: mulching, rock installation, garden beds, planting, restorations, and more.",
    href: "/services/landscape",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l4 5h-2.5l3.5 5h-3l3 5H7l3-5H7l3.5-5H8l4-5z" />
      </svg>
    ),
  },
];

const trustBadges = [
  { title: "Licensed & Insured", icon: "shield" },
  { title: "Free Estimates", icon: "document" },
  { title: "Locally Owned", icon: "home" },
  { title: "5-Star Service", icon: "star" },
];

export default async function Home() {
  const googleData = await getGooglePlaceReviews();
  const homeTestimonials = googleData?.reviews.length
    ? googleData.reviews.slice(0, 3).map((review) => ({
        name: review.authorName,
        location: review.relativeTime || "Google review",
        text: review.text,
        rating: review.rating,
      }))
    : curatedGoogleReviews.slice(0, 3).map((review) => ({
        name: review.name,
        location: review.relativeTime,
        text: review.text,
        rating: review.rating,
      }));
  const averageRating = googleData?.rating ?? 5.0;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-black via-gray-900 to-black pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2322c55e" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-700/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30">
                Serving Central Oregon
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Lawn Care for Your{" "}
                <span className="text-green-400">Central Oregon</span> Home
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-lg">
                Professional lawn care, weed control, pine needle removal, and landscape installation services in Bend, Redmond, Sunriver, Prineville & La Pine Oregon.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-green-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-300 text-sm">
                  <span className="text-white font-semibold">{averageRating.toFixed(1)}</span> rating from real Google reviews
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-green-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-400 transition-colors shadow-lg shadow-green-500/25"
                >
                  Get Free Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:541-305-8500"
                  className="inline-flex items-center justify-center border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-green-500 hover:text-green-400 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  541-305-8500
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {trustBadges.map((badge) => (
                  <div key={badge.title} className="flex items-center gap-2 text-gray-300">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                      {badge.icon === "shield" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {badge.icon === "document" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                      {badge.icon === "home" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )}
                      {badge.icon === "star" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium">{badge.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Offset accent panel */}
                <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-green-900/10 rounded-3xl border border-green-500/10 -z-10"></div>
                <div className="w-full aspect-square rounded-2xl border border-gray-700 overflow-hidden shadow-2xl shadow-black/50">
                  <Image
                    src="/gallery/lawn-lake.png"
                    alt="Crisply striped lawn maintained by Clips Lawncare along a Central Oregon waterfront"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: '50% 40%' }}
                    priority
                  />
                </div>
                {/* Floating Rating Card */}
                <div className="absolute -top-6 -right-6 bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white">{averageRating.toFixed(1)} Rating</p>
                      <p className="text-sm text-green-400">From real customers</p>
                    </div>
                  </div>
                </div>
                {/* Floating Guarantee Card */}
                <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-white">Licensed & Insured</p>
                      <p className="text-sm text-gray-400">Central Oregon owned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Stats Band */}
      <section className="relative bg-black border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Happy Customers" },
              { value: `${averageRating.toFixed(1)}★`, label: "Google Rating" },
              { value: "100%", label: "Satisfaction Rate" },
              { value: "5", label: "Cities Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-green-400 mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-green-500"></span>
              What We Offer
              <span className="w-8 h-0.5 bg-green-500"></span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From regular maintenance to complete landscape transformations, we provide comprehensive lawn care solutions for Central Oregon homes and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300"
              >
                <span className="absolute top-6 right-8 text-4xl font-bold text-gray-700/50 group-hover:text-green-500/20 transition-colors">
                  0{index + 1}
                </span>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/25 to-green-600/10 rounded-xl flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-black transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-green-400 font-medium">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition-colors"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-green-500"></span>
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Your Trusted Local Lawn Care Experts
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Based in Bend, Oregon, Clips Lawncare is dedicated to providing premium lawn care services throughout Central Oregon. We understand the unique challenges of maintaining beautiful outdoor spaces in our high desert climate.
              </p>
              <p className="text-gray-400 text-lg mb-8">
                From regular lawn maintenance to specialized pine needle removal and landscape installation, we bring expertise and attention to detail to every project.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Reliable Service</h4>
                    <p className="text-sm text-gray-500">Always on time, every time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Quality Work</h4>
                    <p className="text-sm text-gray-500">Attention to every detail</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Fair Pricing</h4>
                    <p className="text-sm text-gray-500">Competitive rates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Local Experts</h4>
                    <p className="text-sm text-gray-500">We know Central Oregon</p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* About Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tl from-green-500/20 to-green-900/10 rounded-3xl border border-green-500/10 -z-10"></div>
              <div className="w-full aspect-square rounded-2xl border border-gray-700 overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="/gallery/mower-equipment.png"
                  alt="Clips Lawncare mowing equipment on a striped lawn"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 60%' }}
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-black rounded-xl p-6 shadow-xl border border-green-400">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-green-900 text-sm">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-green-500"></span>
              Testimonials
              <span className="w-8 h-0.5 bg-green-500"></span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">What Our Customers Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Don&apos;t just take our word for it - hear from our satisfied customers throughout Central Oregon.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
              <svg className="w-4 h-4" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" />
                <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" />
                <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z" />
                <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.581C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z" />
              </svg>
              <span>Real reviews from Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {homeTestimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
                <svg className="absolute top-6 right-6 w-10 h-10 text-gray-700/40" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(Math.round(testimonial.rating))].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-green-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition-colors"
            >
              See More Reviews
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Service Area Diagram */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
                  <line x1="200" y1="150" x2="200" y2="55" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="200" y1="150" x2="320" y2="115" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="200" y1="150" x2="300" y2="230" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="200" y1="150" x2="100" y2="235" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>

                {/* Bend (HQ) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-5 h-5 bg-green-400 rounded-full ring-4 ring-green-400/20 shadow-lg shadow-green-500/50"></div>
                  <span className="mt-2 text-sm font-bold text-white bg-gray-900 px-2 py-0.5 rounded-md border border-gray-700">Bend (HQ)</span>
                </div>

                {/* Redmond */}
                <div className="absolute top-[18%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="mt-1.5 text-xs font-medium text-gray-300">Redmond</span>
                </div>

                {/* Prineville */}
                <div className="absolute top-[38%] right-[8%] flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="mt-1.5 text-xs font-medium text-gray-300">Prineville</span>
                </div>

                {/* Sunriver */}
                <div className="absolute bottom-[10%] right-[18%] flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="mt-1.5 text-xs font-medium text-gray-300">Sunriver</span>
                </div>

                {/* La Pine */}
                <div className="absolute bottom-[8%] left-[20%] flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="mt-1.5 text-xs font-medium text-gray-300">La Pine</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-green-500"></span>
                Service Area
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Proudly Serving Central Oregon
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We provide premium lawn care services throughout Central Oregon, including:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Bend", "Redmond", "Sunriver", "Prineville", "La Pine"].map((city) => (
                  <div key={city} className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium text-white">{city}, OR</span>
                  </div>
                ))}
              </div>

              <Link
                href="/service-area"
                className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors"
              >
                View Full Service Area
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-900 to-green-800 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Lawn?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free, no-obligation quote for your property. We&apos;ll assess your needs and provide a customized lawn care plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Your Free Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:541-305-8500"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 541-305-8500
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
