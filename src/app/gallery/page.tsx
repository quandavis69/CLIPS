"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "Lawn Care", "Landscape", "Before & After"];

const galleryItems = [
  {
    id: 1,
    category: "Lawn Care",
    title: "Lakeside Lawn Care",
    description: "Precision striping along a Central Oregon waterfront",
    image: "/gallery/lawn-lake.png",
    before: false,
  },
  {
    id: 2,
    category: "Lawn Care",
    title: "Mowing Equipment in Action",
    description: "Clean, crisp lines with professional-grade mowers",
    image: "/gallery/mower-equipment.png",
    before: false,
  },
  {
    id: 3,
    category: "Lawn Care",
    title: "Backyard Mowing",
    description: "Corner-to-corner stripes on a Central Oregon lawn",
    image: "/gallery/striped-lawn-playground.png",
    before: false,
  },
  {
    id: 4,
    category: "Landscape",
    title: "Sod Installation",
    description: "Rolling out fresh sod for a full lawn renovation",
    image: "/gallery/sod-installation.png",
    before: false,
  },
  {
    id: 5,
    category: "Landscape",
    title: "Landscape Bed Refresh",
    description: "New mulch beds and clean stone edging",
    image: "/gallery/landscape-bed.png",
    before: false,
  },
  {
    id: 6,
    category: "Landscape",
    title: "Landscape Prep Work",
    description: "Grading and site prep ahead of installation",
    image: "/gallery/landscape-prep.png",
    before: false,
  },
  {
    id: 7,
    category: "Before & After",
    title: "Backyard Lawn Transformation",
    description: "From bare dirt to a lush, healthy lawn",
    image: "/gallery/lawn-before-after.png",
    before: true,
  },
  {
    id: 8,
    category: "Before & After",
    title: "Patio Restoration",
    description: "Weeds cleared, stone reset, ready to relax",
    image: "/gallery/patio-before-after.jpg",
    before: true,
  },
  {
    id: 9,
    category: "Landscape",
    title: "Pressure Washing",
    description: "Exterior siding and equipment cleaning for a commercial property",
    image: "/gallery/pressure-washing.jpg",
    before: false,
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
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-green-100">
              Browse our portfolio of lawn care and landscaping projects throughout Central Oregon.
            </p>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-[1100/230] rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
            <Image
              src="/gallery/services-collage.png"
              alt="Clips Lawncare services: lawn maintenance, landscape installation, cleanups, and weed control"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900 border-b border-gray-800 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                {/* Project Photo */}
                <div className="relative aspect-[4/3] bg-gray-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Before/After Badge */}
                  {item.before && (
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-green-500/90 text-white text-xs font-medium px-3 py-1 rounded-full">
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
                  <span className="text-green-400 text-sm font-medium">{item.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
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

          <div className="max-w-4xl w-full bg-gray-900 rounded-2xl p-8 border border-gray-800" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
              <Image
                src={galleryItems.find(item => item.id === selectedImage)?.image ?? ""}
                alt={galleryItems.find(item => item.id === selectedImage)?.title ?? ""}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
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
