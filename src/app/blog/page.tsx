import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Lawn Care & Landscaping Blog | Clips Lawn Care",
  description: "Helpful lawn care and landscaping guides for Bend, Oregon and Central Oregon homeowners, covering mowing, fertilization, weed control, aeration, irrigation, and property maintenance.",
  alternates: { canonical: "/blog" },
};

const BASE_URL = "https://clipslawncare.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
  ],
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndexPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
  const categoriesInUse = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <div className="min-h-screen pt-20 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Lawn Care Resources</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">
            The Clips Lawn Care Blog
          </h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Beginner-friendly lawn care and landscaping guides for Bend, Oregon and the surrounding Central Oregon
            area - mowing, fertilization, weed control, aeration, irrigation, and property maintenance.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 bg-gray-900 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categoriesInUse.map((category) => (
              <span
                key={category}
                className="inline-flex items-center bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 transition-colors"
              >
                <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                <h2 className="text-xl font-bold text-white mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <p className="text-gray-500 text-sm">{formatDate(post.publishDate)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need Help With Your Lawn?</h2>
          <p className="text-xl text-green-100 mb-8">
            Clips Lawn Care provides professional lawn maintenance and landscaping services throughout Bend, Oregon.
            Request a quote today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
