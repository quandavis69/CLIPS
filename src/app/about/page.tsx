import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Clips Lawncare - Central Oregon Lawn Care Experts",
  description: "Learn about Clips Lawncare, your trusted local lawn care experts serving Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon.",
};

const values = [
  {
    title: "Quality First",
    description: "We never cut corners. Every lawn we service receives our full attention and expertise.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description: "Count on us to show up on time, every time. We understand your time is valuable.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Local Expertise",
    description: "We understand Central Oregon's unique climate and what your lawn needs to thrive.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Fair Pricing",
    description: "Transparent, competitive pricing with no hidden fees. We provide value for your investment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Your Trusted Central Oregon Lawn Care Partner
            </h1>
            <p className="text-xl text-green-100">
              Dedicated to providing premium lawn care services that keep your property looking its best, all year round.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Built on a Passion for Beautiful Lawns
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Clips Lawncare was founded with a simple mission: to provide Central Oregon homeowners with reliable, high-quality lawn care services they can count on.
                </p>
                <p>
                  Based in Bend, Oregon, we understand the unique challenges of maintaining beautiful outdoor spaces in our high desert climate. From hot, dry summers to cold, snowy winters, we know what your lawn needs to thrive in every season.
                </p>
                <p>
                  What started as a commitment to excellence has grown into a trusted local business serving homeowners throughout Bend, Redmond, Sunriver, Prineville, and La Pine.
                </p>
              </div>
            </div>

            {/* Team Photo */}
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
                <Image
                  src="/gallery/landscape-prep.png"
                  alt="A Clips Lawncare crew member preparing a yard for landscaping"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Meet the Founder</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">A Letter From Our Owner</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 lg:sticky lg:top-28">
              <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden">
                <Image
                  src="/team/will-carney.png"
                  alt="Will Carney, owner and founder of Clips Lawn Care"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 20%" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse farthest-corner at 50% 30%, transparent 30%, #111827 100%)" }}
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-white font-semibold">Will Carney</p>
                <p className="text-gray-400 text-sm">Owner & Founder</p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4 text-gray-300 text-lg">
              <p>
                Clips Lawn Care was built with a simple purpose: to provide people with dependable, professional, and honest lawn care and landscaping they can truly count on.
              </p>
              <p>
                I was born and raised in Bend, Oregon, and I&apos;ve always wanted to build a business of my own. From a young age, I knew I wanted to lead people, create opportunities, and build something that could provide value to the community around me.
              </p>
              <p>
                I started working in landscaping at 16 while I was still in high school. What began as a job quickly became something I genuinely enjoyed and wanted to pursue as a career. After graduating, I decided to take that experience and build something of my own.
              </p>
              <p>
                In 2026, I started Clips Lawn Care with the goal of bringing a different standard of service to Central Oregon. I had heard the same frustrations from homeowners and businesses over and over again&mdash;poor communication, unreliable service, inconsistent quality, and companies that simply didn&apos;t seem to care.
              </p>
              <p>
                I believe landscaping should be more than just showing up, doing the work, and sending an invoice. It should be about earning trust, taking pride in the work, communicating clearly, and creating a service that genuinely makes people&apos;s lives easier.
              </p>
              <p>
                Our long-term goal is to build Clips into a company that can serve homeowners, businesses, HOAs, and commercial properties throughout Central Oregon while creating meaningful opportunities for the people who work alongside us.
              </p>
              <p>
                We&apos;re not building Clips simply to make money. We&apos;re building it to create something that provides for our employees, serves our customers, and contributes to the community we call home.
              </p>
              <p>
                We&apos;re proud to be local, proud to be growing, and committed to doing things the right way&mdash;one property and one customer at a time.
              </p>
              <div className="pt-4">
                <p className="text-white font-semibold">&mdash; Will Carney</p>
                <p className="text-gray-500">Owner &amp; Founder, Clips Lawn Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">What We Stand For</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              These core values guide everything we do at Clips Lawncare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="w-14 h-14 bg-green-900/50 rounded-xl flex items-center justify-center text-green-400 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Work Photo */}
            <div className="order-2 lg:order-1">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
                <Image
                  src="/gallery/landscape-bed.png"
                  alt="A finished landscape bed with fresh mulch and clean stone edging"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Our Commitment</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Your Satisfaction is Our Priority
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  At Clips Lawncare, we believe in delivering exceptional service on every job. Our commitment to you includes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>High-quality services at competitive prices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Punctual, reliable service delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clear communication throughout the process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free estimates with no obligation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Clips Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today for a free quote and see why Central Oregon homeowners trust Clips Lawncare.
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
