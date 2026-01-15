import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Clips Lawncare - Customer Reviews",
  description: "See what our customers in Bend, Redmond, Sunriver, Prineville, and La Pine are saying about Clips Lawncare services.",
};

const testimonials = [
  {
    name: "Sarah M.",
    location: "Bend, OR",
    text: "Clips transformed our overgrown yard into a beautiful outdoor space. Their attention to detail is amazing! They showed up on time, worked efficiently, and left our property looking better than we ever imagined.",
    rating: 5,
    service: "Yard Cleanup",
  },
  {
    name: "Mike T.",
    location: "Redmond, OR",
    text: "Best lawn care service in Central Oregon. Reliable, professional, and always on time. They've been maintaining our lawn for months now and it's never looked better.",
    rating: 5,
    service: "Premium Lawn Care",
  },
  {
    name: "Jennifer L.",
    location: "Sunriver, OR",
    text: "Their pine needle removal service saved us so much time. Living among the pines means constant cleanup, but Clips handles it all. Highly recommend!",
    rating: 5,
    service: "Pine Needle Removal",
  },
  {
    name: "David R.",
    location: "Prineville, OR",
    text: "Professional, affordable, and thorough. They tackled our weed problem and now our lawn is the envy of the neighborhood. Great communication throughout the process.",
    rating: 5,
    service: "Weed Control",
  },
  {
    name: "Amanda K.",
    location: "Bend, OR",
    text: "We hired Clips for a complete landscape installation and couldn't be happier. They helped us design the perfect outdoor space and executed it flawlessly.",
    rating: 5,
    service: "Installation",
  },
  {
    name: "Robert H.",
    location: "La Pine, OR",
    text: "Living in La Pine, we deal with a lot of pine needles and debris. Clips Lawncare has been a lifesaver. They're always responsive and do excellent work.",
    rating: 5,
    service: "Cleanups",
  },
  {
    name: "Lisa P.",
    location: "Redmond, OR",
    text: "I've tried several lawn care companies over the years, but Clips is by far the best. Fair pricing, quality work, and they actually show up when they say they will!",
    rating: 5,
    service: "Premium Lawn Care",
  },
  {
    name: "Tom S.",
    location: "Sunriver, OR",
    text: "The team at Clips is fantastic. They're knowledgeable about what works best in our Central Oregon climate and it shows in the results. Our yard has never looked better.",
    rating: 5,
    service: "Weed Control",
  },
  {
    name: "Karen W.",
    location: "Bend, OR",
    text: "From the first estimate to the completed job, Clips was professional and easy to work with. They transformed our neglected backyard into a beautiful space we actually want to use.",
    rating: 5,
    service: "Yard Cleanup",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-green-100">
              Don&apos;t just take our word for it - hear from homeowners throughout Central Oregon who trust Clips Lawncare.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-green-400">500+</p>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400">5.0</p>
              <p className="text-gray-400">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400">100%</p>
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400">5</p>
              <p className="text-gray-400">Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Service Badge */}
                <span className="inline-block bg-green-900/50 text-green-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {testimonial.service}
                </span>

                <p className="text-gray-300 mb-6">&quot;{testimonial.text}&quot;</p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center">
                    <span className="text-green-400 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Experience the Clips difference for yourself. Get a free quote today!
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
