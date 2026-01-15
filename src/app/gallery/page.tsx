"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Lawn Care", "Cleanups", "Installation", "Before & After"];

const galleryItems = [
  {
    id: 1,
    category: "Lawn Care",
    title: "Premium Lawn Maintenance",
    description: "Regular mowing and edging in Bend",
    before: true,
  },
  {
    id: 2,
    category: "Cleanups",
    title: "Spring Cleanup",
    description: "Full yard cleanup in Redmond",
    before: true,
  },
  {
    id: 3,
    category: "Installation",
    title: "New Sod Installation",
    description: "Complete lawn renovation in Sunriver",
    before: true,
  },
  {
    id: 4,
    category: "Lawn Care",
    title: "Weed Control Treatment",
    description: "Weed-free lawn in Prineville",
    before: false,
  },
  {
    id: 5,
    category: "Cleanups",
    title: "Pine Needle Removal",
    description: "Pine needle cleanup in La Pine",
    before: true,
  },
  {
    id: 6,
    category: "Installation",
    title: "Mulch Installation",
    description: "Fresh mulch beds in Bend",
    before: false,
  },
  {
    id: 7,
    category: "Lawn Care",
    title: "Edge Trimming",
    description: "Crisp edges along walkways",
    before: false,
  },
  {
    id: 8,
    category: "Cleanups",
    title: "Fall Leaf Removal",
    description: "Seasonal cleanup in Redmond",
    before: true,
  },
  {
    id: 9,
    category: "Installation",
    title: "Landscape Design",
    description: "Complete landscape makeover",
    before: true,
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : activeCategory === "Before & After"
    ? galleryItems.filter(item => item.before)
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-green-100">
              Browse our portfolio of lawn care and landscaping projects throughout Central Oregon.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Project Photo</p>
                    </div>
                  </div>

                  {/* Before/After Badge */}
                  {item.before && (
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-gray-900/80 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Before & After
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/60 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-green-700 text-sm font-medium">{item.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-4xl w-full bg-gray-800 rounded-2xl p-8" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-gray-400">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>Full Size Image Placeholder</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">
              {galleryItems.find(item => item.id === selectedImage)?.title}
            </h3>
            <p className="text-gray-400">
              {galleryItems.find(item => item.id === selectedImage)?.description}
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want Results Like These?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let us transform your property. Get a free quote today and see what we can do for you.
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
