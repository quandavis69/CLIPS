import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blogPosts";

const BASE_URL = "https://clipslawncare.com";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Clips Lawn Care Blog`,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);
  const url = `${BASE_URL}/blog/${post.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url,
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    author: { "@type": "Organization", name: "Clips Lawn Care LLC" },
    publisher: { "@type": "Organization", name: "Clips Lawn Care LLC", url: BASE_URL },
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="flex items-center text-green-300 hover:text-white mb-4 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">{post.title}</h1>
          <p className="text-green-200 text-sm">
            Published {formatDate(post.publishDate)}
            {post.updatedDate && post.updatedDate !== post.publishDate ? ` · Updated ${formatDate(post.updatedDate)}` : ""}
            {" · Clips Lawn Care LLC"}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.intro.map((paragraph, i) => (
            <p key={i} className="text-gray-300 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}

          <div className="space-y-10">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold text-white mb-3">{section.heading}</h2>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Related Services */}
          {post.relatedServices.length > 0 && (
            <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-lg font-bold text-white mb-4">Related Services</h2>
              <div className="flex flex-wrap gap-3">
                {post.relatedServices.map((service) => (
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
          )}

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-green-900/40 to-black border border-green-800 rounded-2xl p-8 text-center">
            <p className="text-gray-200 text-lg mb-4">
              Need help maintaining your lawn? Clips Lawn Care provides professional lawn maintenance and
              landscaping services throughout Bend, Oregon.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-green-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-400 transition-colors"
            >
              Request a Quote Today
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-900 border-t border-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="block bg-black rounded-xl p-6 border border-gray-800 hover:border-green-500 transition-colors"
                >
                  <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">{related.category}</span>
                  <h3 className="text-white font-semibold mt-2">{related.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
