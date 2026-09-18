import Link from "next/link";
import Image from "next/image";
import { getGooglePlaceReviews } from "@/lib/googleReviews";
import { curatedGoogleReviews } from "@/data/googleReviews";
import Accordion from "@/components/Accordion";

const services = [
  {
    title: "Residential",
    description: "Home lawn care built around Basic and Premium maintenance plans, with add-ons for weed control, trimming, and irrigation.",
    href: "/services/residential",
    image: "/gallery/mower-equipment.png",
  },
  {
    title: "Commercial & HOA",
    description: "The same reliable maintenance plans, scaled for businesses, HOAs, and multi-unit properties throughout Central Oregon.",
    href: "/services/commercial",
    image: "/gallery/commercial-maintenance.png",
  },
  {
    title: "Landscape Projects",
    description: "Mulching, rock installation, garden beds, planting, pressure washing, cleanups, restorations, and more.",
    href: "/services/landscape",
    image: "/gallery/landscape-bed.png",
  },
];

const trustBadges = [
  { title: "Licensed & Insured", icon: "shield" },
  { title: "Free Estimates", icon: "document" },
  { title: "Locally Owned", icon: "home" },
  { title: "5-Star Service", icon: "star" },
];

const processSteps = [
  {
    number: "01",
    title: "Request a Quote",
    description: "Tell us about your property and choose an in-person visit or a virtual estimate.",
  },
  {
    number: "02",
    title: "We Review Your Property",
    description: "We walk the site in person, or review the photos and video you send us.",
  },
  {
    number: "03",
    title: "Get Your Plan",
    description: "You receive a clear quote and a maintenance plan built around your property.",
  },
  {
    number: "04",
    title: "Our Crew Gets to Work",
    description: "We show up on schedule and take care of the work, start to finish.",
  },
  {
    number: "05",
    title: "Enjoy Your Property",
    description: "Ongoing maintenance keeps it looking sharp all season long.",
  },
];

const whyClips = [
  {
    title: "Local Expertise",
    description: "We know Central Oregon's high desert climate and what it takes to keep a property looking good through it.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    description: "You'll always know what's happening with your property and how to reach us.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Attention to Detail",
    description: "Clean edges, straight lines, and a finished look on every property we touch.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Reliable Service",
    description: "Scheduled maintenance you can count on, visit after visit.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Professional Crews",
    description: "Organized and equipped to handle residential, commercial, and HOA properties alike.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1a4 4 0 100-8 4 4 0 000 8zm6 3c0-1.657-3.134-3-7-3s-7 1.343-7 3" />
      </svg>
    ),
  },
];

const galleryTeaser = [
  { src: "/gallery/lawn-before-after.png", alt: "Before and after lawn transformation from bare dirt to lush grass" },
  { src: "/gallery/patio-before-after.jpg", alt: "Before and after flagstone patio restoration" },
  { src: "/gallery/sod-installation.png", alt: "Fresh sod installation in progress" },
  { src: "/gallery/striped-lawn-playground.png", alt: "Freshly striped backyard lawn" },
];

const faqs = [
  {
    question: "What areas does Clips Lawn Care serve?",
    answer: "We serve Bend, Redmond, Sunriver, Prineville, La Pine, and the surrounding Central Oregon area.",
  },
  {
    question: "Do you offer recurring lawn maintenance?",
    answer: "Yes. Our Basic and Premium maintenance plans cover mowing, edging, and seasonal care, with add-on packages available for weed control, trimming, and irrigation.",
  },
  {
    question: "Do you work with commercial properties and HOAs?",
    answer: "Yes. Our Commercial division offers the same maintenance plans, scaled for businesses, HOAs, and multi-unit properties throughout Central Oregon.",
  },
  {
    question: "Do you provide landscape projects?",
    answer: "Yes. Our landscape crew handles mulching, rock installation, garden beds, planting, pressure washing, cleanups, restorations, pine needle removal, and sod.",
  },
  {
    question: "How do I get a quote?",
    answer: "Fill out our contact form and choose an in-person visit or a virtual estimate. We'll follow up with a clear quote and plan for your property.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Clips Lawn Care is licensed and insured.",
  },
  {
    question: "What happens after I request a quote?",
    answer: "We'll reach out to schedule your estimate, walk you through pricing, and get you set up with the right maintenance plan or project timeline.",
  },
  {
    question: "Do you offer seasonal services?",
    answer: "Yes. In addition to our regular maintenance plans, we offer spring and fall aeration and dethatching, irrigation turn-on and blow-out, and seasonal cleanups.",
  },
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
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-black via-gray-900 to-black pt-20 overflow-hidden">
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
                Bend, Oregon Based
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                Central Oregon&apos;s Lawn Care &amp; Landscape Crew
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-lg">
                Residential and commercial lawn maintenance, landscape projects, and property care for Bend, Redmond, Sunriver, Prineville, and La Pine.
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
                  Get a Free Quote
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
                    alt="Crisply striped lawn maintained by Clips Lawn Care along a Central Oregon waterfront"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: "500+",
                label: "Happy Customers",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1a4 4 0 100-8 4 4 0 000 8zm6 3c0-1.657-3.134-3-7-3s-7 1.343-7 3" />
                  </svg>
                ),
              },
              {
                value: `${averageRating.toFixed(1)}★`,
                label: "Google Rating",
                icon: (
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ),
              },
              {
                value: "100%",
                label: "Satisfaction Rate",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                value: "5",
                label: "Cities Served",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-3 py-6 px-4 rounded-2xl border border-gray-800 bg-gray-900/40 hover:border-green-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center">
                  {stat.icon}
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From regular maintenance to complete landscape transformations, we provide comprehensive lawn care solutions for Central Oregon homes and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                </div>
                <div className="p-8">
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
                </div>
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

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-green-500"></span>
              How It Works
              <span className="w-8 h-0.5 bg-green-500"></span>
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">From Quote to Finished Property</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Here&apos;s exactly what to expect when you work with Clips.
            </p>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            {processSteps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-gray-900 border-2 border-green-500 flex items-center justify-center text-green-400 font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition-colors"
            >
              Start Your Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Clips Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-24 bg-black rounded-bl-[100px] hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
                <Image
                  src="/gallery/pressure-washing.jpg"
                  alt="A Clips Lawn Care crew member pressure washing a commercial property"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-green-500"></span>
                Why Clips
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
                A Crew You Can Actually Count On
              </h2>
              <div className="space-y-5">
                {whyClips.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-green-500"></span>
                Our Work
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Real Work. Real Results.</h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors flex-shrink-0"
            >
              View Full Gallery
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryTeaser.map((photo) => (
              <div key={photo.src} className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800 group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">What Our Customers Say</h2>
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
            {/* Service Area Map */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full aspect-[4/3] rounded-2xl border border-gray-700 overflow-hidden shadow-xl">
                <iframe
                  src="https://maps.google.com/maps?q=Bend,+Oregon&z=9&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clips Lawn Care service area map centered on Bend, Oregon"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-green-500"></span>
                Service Area
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
                Proudly Serving Central Oregon
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We provide lawn care and landscape services throughout Central Oregon, including:
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

      {/* FAQ Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-24 bg-black rounded-br-[100px] hidden md:block"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-green-500"></span>
              FAQ
              <span className="w-8 h-0.5 bg-green-500"></span>
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Common Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Answers to what people usually ask before getting started with Clips.
            </p>
          </div>

          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-900 to-green-800 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free, no-obligation quote. We&apos;ll assess your property and put together a plan built around it.
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
