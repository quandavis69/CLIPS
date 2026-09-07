import Link from "next/link";
import type { Metadata } from "next";
import { getGooglePlaceReviews } from "@/lib/googleReviews";
import { curatedGoogleReviews } from "@/data/googleReviews";

export const metadata: Metadata = {
  title: "Testimonials | Clips Lawncare - Customer Reviews",
  description: "See what our customers in Bend, Redmond, Sunriver, Prineville, and La Pine are saying about Clips Lawncare services.",
};

export default async function TestimonialsPage() {
  const googleData = await getGooglePlaceReviews();
  const usingGoogleReviews = Boolean(googleData?.reviews.length);

  const displayTestimonials = usingGoogleReviews
    ? googleData!.reviews.map((review) => ({
        name: review.authorName,
        subtext: review.relativeTime || "Google review",
        text: review.text,
        rating: review.rating,
        badge: null as string | null,
      }))
    : curatedGoogleReviews.map((review) => ({
        name: review.name,
        subtext: review.relativeTime,
        text: review.text,
        rating: review.rating,
        badge: (review.service ?? null) as string | null,
      }));

  const averageRating = googleData?.rating ?? 5.0;
  const totalReviews = googleData?.userRatingCount;

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
            <div className="flex items-center gap-2 mt-4 text-sm text-green-100">
              <svg className="w-4 h-4" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" />
                <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" />
                <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z" />
                <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.581C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z" />
              </svg>
              <span>Real reviews from Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-green-400">
                {totalReviews ? `${totalReviews}+` : "500+"}
              </p>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400">{averageRating.toFixed(1)}</p>
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
          {googleData?.mapsUri && (
            <div className="text-center mt-8">
              <a
                href={googleData.mapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
              >
                See all our reviews on Google →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(Math.round(testimonial.rating))].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Service Badge */}
                {testimonial.badge && (
                  <span className="inline-block bg-green-900/50 text-green-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {testimonial.badge}
                  </span>
                )}

                <p className="text-gray-300 mb-6">&quot;{testimonial.text}&quot;</p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center">
                    <span className="text-green-400 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    {testimonial.subtext && (
                      <p className="text-sm text-gray-500">{testimonial.subtext}</p>
                    )}
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
