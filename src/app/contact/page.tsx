"use client";

import { useState } from "react";

const services = [
  "Residential Maintenance",
  "Commercial Maintenance",
  "Landscape Services",
  "Other",
];

const propertyTypes = ["Residential", "Commercial", "HOA"];
const contactMethods = ["Phone", "Email", "Text"];

const estimateTypes = [
  {
    value: "in-person",
    label: "In-Person Estimate",
    description: "We'll visit your property to walk the site and give you an accurate quote.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: "virtual",
    label: "Virtual Estimate",
    description: "Send us photos or a quick video of your property and we'll quote it remotely - no visit required.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const MAX_FILES = 4;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024; // 4MB combined, to stay under typical serverless body limits

function formatBytes(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    propertyType: "",
    contactMethod: "",
    estimateType: "in-person",
    address: "",
    city: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<"sent" | "email-client" | null>(null);

  const totalFileBytes = files.reduce((sum, f) => sum + f.size, 0);

  const handleFilesSelected = (selected: FileList | null) => {
    if (!selected || selected.length === 0) return;
    const incoming = Array.from(selected);
    const combined = [...files, ...incoming];

    if (combined.length > MAX_FILES) {
      setFileError(`You can attach up to ${MAX_FILES} files.`);
      return;
    }
    const combinedBytes = combined.reduce((sum, f) => sum + f.size, 0);
    if (combinedBytes > MAX_TOTAL_BYTES) {
      setFileError(`Attached files must total under ${formatBytes(MAX_TOTAL_BYTES)}. Photos usually work better than video here.`);
      return;
    }
    setFileError("");
    setFiles(combined);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setFileError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submission = new FormData();
    Object.entries(formData).forEach(([key, value]) => submission.append(key, value));
    files.forEach((file) => submission.append("photos", file));

    let delivered = false;
    try {
      const res = await fetch("/api/quote-request", {
        method: "POST",
        body: submission,
      });
      delivered = res.ok;
    } catch {
      delivered = false;
    }

    if (!delivered) {
      // Last resort: open the visitor's own email client. Can't carry attachments this way.
      const estimateTypeLabel = estimateTypes.find((t) => t.value === formData.estimateType)?.label || formData.estimateType;
      const subject = encodeURIComponent(`Quote Request - ${formData.service || 'General Inquiry'}`);
      const bodyLines = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Service: ${formData.service}`,
        `Property Type: ${formData.propertyType}`,
        `Preferred Contact Method: ${formData.contactMethod}`,
        `Estimate Type: ${estimateTypeLabel}`,
        `Address: ${formData.address}`,
        `City: ${formData.city}`,
        "",
        "Message:",
        formData.message,
      ];
      if (files.length > 0) {
        bodyLines.push("", `Note: ${files.length} photo(s) could not be attached automatically - please reply to this email with them attached.`);
      }
      window.location.href = `mailto:michaelclipslawncare@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    }

    setDeliveryMethod(delivered ? "sent" : "email-client");
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      propertyType: "",
      contactMethod: "",
      estimateType: "in-person",
      address: "",
      city: "",
      message: "",
    });
    setFiles([]);
    setFileError("");
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-green-100">
              Ready to transform your lawn? Fill out the form below or give us a call. We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <a href="tel:541-305-8500" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">541-305-8500</p>
                    <p className="text-sm text-gray-500">Call or text anytime</p>
                  </div>
                </a>

                <a href="mailto:clipslawncarebend@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">clipslawncarebend@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Service Area</h3>
                    <p className="text-gray-300">Central Oregon</p>
                    <p className="text-sm text-gray-500">Bend, Redmond, Sunriver, Prineville, La Pine</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Hours</h3>
                    <p className="text-gray-300">Monday - Saturday</p>
                    <p className="text-sm text-gray-500">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">Request a Free Quote</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {deliveryMethod === "sent" ? (
                      <>
                        <h3 className="text-xl font-bold text-white mb-2">Quote Request Sent!</h3>
                        <p className="text-gray-400 mb-6">
                          We&apos;ve received your request and will get back to you within 24 hours.
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-bold text-white mb-2">Email Client Opened!</h3>
                        <p className="text-gray-400 mb-6">
                          Please send the email that opened in your email client. We&apos;ll get back to you within 24 hours.
                        </p>
                      </>
                    )}
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-green-400 font-semibold hover:text-green-300"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                          placeholder="(541) 555-0123"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                          Property Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                          placeholder="123 Main St"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          list="cities"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                          placeholder="Bend"
                        />
                        <datalist id="cities">
                          <option value="Bend" />
                          <option value="Redmond" />
                          <option value="Sunriver" />
                          <option value="Prineville" />
                          <option value="La Pine" />
                        </datalist>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Property Type
                        </label>
                        <div className="flex gap-2">
                          {propertyTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, propertyType: type })}
                              className={`flex-1 px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                                formData.propertyType === type
                                  ? "border-green-500 bg-green-900/20 text-white"
                                  : "border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Preferred Contact Method
                        </label>
                        <div className="flex gap-2">
                          {contactMethods.map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => setFormData({ ...formData, contactMethod: method })}
                              className={`flex-1 px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                                formData.contactMethod === method
                                  ? "border-green-500 bg-green-900/20 text-white"
                                  : "border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600"
                              }`}
                            >
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Estimate Type *
                      </label>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {estimateTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, estimateType: type.value })}
                            className={`text-left p-4 rounded-lg border-2 transition-colors ${
                              formData.estimateType === type.value
                                ? "border-green-500 bg-green-900/20"
                                : "border-gray-700 bg-gray-800 hover:border-gray-600"
                            }`}
                          >
                            <div className="flex items-center gap-3 mb-1.5">
                              <div
                                className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                  formData.estimateType === type.value
                                    ? "bg-green-500 text-black"
                                    : "bg-gray-700 text-green-400"
                                }`}
                              >
                                {type.icon}
                              </div>
                              <span className="font-semibold text-white">{type.label}</span>
                            </div>
                            <p className="text-sm text-gray-400">{type.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Photos or Video <span className="text-gray-500 font-normal">(optional - helpful for virtual estimates)</span>
                      </label>
                      <label
                        htmlFor="photos"
                        className="flex flex-col items-center justify-center gap-2 w-full px-4 py-6 bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-green-500/50 transition-colors text-center"
                      >
                        <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="text-gray-300 text-sm font-medium">Click to upload photos</span>
                        <span className="text-gray-500 text-xs">Up to {MAX_FILES} files, {formatBytes(MAX_TOTAL_BYTES)} total</span>
                        <input
                          type="file"
                          id="photos"
                          multiple
                          accept="image/*,video/*"
                          className="hidden"
                          onChange={(e) => {
                            handleFilesSelected(e.target.files);
                            e.target.value = "";
                          }}
                        />
                      </label>

                      {fileError && <p className="text-red-400 text-sm mt-2">{fileError}</p>}

                      {files.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {files.map((file, index) => (
                            <div key={`${file.name}-${index}`} className="flex items-center justify-between gap-3 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
                              <span className="text-sm text-gray-300 truncate">{file.name}</span>
                              <div className="flex items-center gap-3 flex-shrink-0">
                                <span className="text-xs text-gray-500">{formatBytes(file.size)}</span>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="text-gray-500 hover:text-red-400 transition-colors"
                                  aria-label={`Remove ${file.name}`}
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          ))}
                          <p className="text-xs text-gray-500">{formatBytes(totalFileBytes)} of {formatBytes(MAX_TOTAL_BYTES)} used</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Tell us about your project *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none text-white placeholder-gray-500"
                        placeholder="Describe your lawn care needs, property size, and any specific concerns..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !!fileError}
                      className="w-full bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Quote Request"}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to be contacted regarding your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
