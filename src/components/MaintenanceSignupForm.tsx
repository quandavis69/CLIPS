"use client";

import { useState } from "react";

const MAN_HOUR_RATE = 70;
const MIN_MAN_HOURS = 2;
const MAX_MAN_HOURS = 12;

const premiumIncludes = [
  {
    title: "Mowing",
    description: "Regular mowing to keep your lawn healthy and even.",
  },
  {
    title: "Edging",
    description: "Completed as necessary. We avoid consistent weekly edging, as it can be harmful to lawn health.",
  },
  {
    title: "Blowing",
    description: "From the landscape and patios, driveways, and walkways to keep your area clean and orderly.",
  },
  {
    title: "Pre/Post Emergent Weed Control",
    description: "Application of weed control products in beds as necessary each season. Long-term overgrowth may lead to an additional spray charge; hand-pull cleanups are offered separately.",
  },
  {
    title: "Lawn Fertilization",
    description: "Scheduled for spring, mid-summer, and fall to maintain a healthy lawn.",
  },
];

export default function MaintenanceSignupForm() {
  const [planType, setPlanType] = useState<"basic" | "premium" | "">("");
  const [manHours, setManHours] = useState(MIN_MAN_HOURS);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<"sent" | "email-client" | null>(null);

  const weeklyPremiumPrice = manHours * MAN_HOUR_RATE;

  const planSummary =
    planType === "basic"
      ? "Basic Weekly Maintenance - $50/service (mow, edge, blow)"
      : planType === "premium"
      ? `Premium Weekly Maintenance - up to ${manHours} man-hour${manHours === 1 ? "" : "s"}/week (~$${weeklyPremiumPrice}/week at $${MAN_HOUR_RATE}/man-hour)`
      : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!planType || !agreed) return;
    setIsSubmitting(true);

    const message = [
      `Weekly Maintenance Sign-Up`,
      `Selected Plan: ${planSummary}`,
      "",
      formData.message ? `Additional notes: ${formData.message}` : "Additional notes: none",
    ].join("\n");

    const submission = new FormData();
    submission.append("name", formData.name);
    submission.append("email", formData.email);
    submission.append("phone", formData.phone);
    submission.append("address", formData.address);
    submission.append("city", formData.city);
    submission.append("service", `Weekly Maintenance Signup - ${planType === "basic" ? "Basic" : "Premium"}`);
    submission.append("message", message);

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
      const subject = encodeURIComponent("Weekly Maintenance Sign-Up Request");
      const bodyLines = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Address: ${formData.address}`,
        `City: ${formData.city}`,
        "",
        message,
      ];
      window.location.href = `mailto:clipslawncarebend@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    }

    setDeliveryMethod(delivered ? "sent" : "email-client");
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        {deliveryMethod === "sent" ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">Sign-Up Request Sent!</h2>
            <p className="text-gray-400">
              Your details have been sent to your crew manager. They&apos;ll reach out to confirm scheduling and any other details.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">Email Client Opened!</h2>
            <p className="text-gray-400">
              Please send the email that opened in your email client and we&apos;ll be in touch to confirm scheduling.
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Weekly Maintenance</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">
              Sign Up for Weekly Service
            </h1>
            <p className="text-xl text-green-100">
              Choose a Basic or Premium weekly maintenance package and tell us about your property. Your crew manager will follow up to confirm scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section className="bg-gray-900 border-b border-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-900/20 border border-green-800 rounded-xl px-6 py-5 text-green-100 text-sm leading-relaxed">
            <p className="mb-2">
              After we receive your fully completed form, your details will be sent to your crew manager. They will then contact you to confirm scheduling and any other relevant details.
            </p>
            <p>
              Our Weekly Maintenance service runs from <strong className="text-white">March 1st to November 30th</strong>. This service will automatically renew each year unless you notify us of cancellation via email or phone call.
            </p>
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit}>
        {/* Plan Selection */}
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Step 1</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Select Basic or Premium Service</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Basic */}
              <button
                type="button"
                onClick={() => setPlanType("basic")}
                className={`text-left p-8 rounded-2xl border-2 transition-colors ${
                  planType === "basic" ? "border-green-500 bg-green-900/10" : "border-gray-800 bg-gray-900 hover:border-gray-700"
                }`}
              >
                <span className="inline-block bg-green-900/50 text-green-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Basic Included
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                <p className="text-3xl font-bold text-white mb-4">
                  $50 <span className="text-base font-normal text-gray-400">/ service</span>
                </p>
                <p className="text-gray-300">Strictly mow, edge, blow service.</p>
                <div
                  className={`mt-6 text-center rounded-full px-6 py-3 font-semibold transition-colors ${
                    planType === "basic" ? "bg-green-500 text-black" : "bg-gray-800 text-gray-300"
                  }`}
                >
                  {planType === "basic" ? "Selected" : "Select"}
                </div>
              </button>

              {/* Premium */}
              <button
                type="button"
                onClick={() => setPlanType("premium")}
                className={`text-left p-8 rounded-2xl border-2 transition-colors ${
                  planType === "premium" ? "border-green-500 bg-green-900/10" : "border-gray-800 bg-gray-900 hover:border-gray-700"
                }`}
              >
                <span className="inline-block bg-green-500 text-black text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Your Premium Service
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                <p className="text-gray-300 mb-4">
                  To ensure consistent service, we provide a single premium package covering a comprehensive approach to landscape care.
                </p>
                <div
                  className={`mt-6 text-center rounded-full px-6 py-3 font-semibold transition-colors ${
                    planType === "premium" ? "bg-green-500 text-black" : "bg-gray-800 text-gray-300"
                  }`}
                >
                  {planType === "premium" ? "Selected" : "Select"}
                </div>
              </button>
            </div>

            {/* Premium details, shown once selected */}
            {planType === "premium" && (
              <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-6">What&apos;s Included</h4>
                <ul className="space-y-4 mb-10">
                  {premiumIncludes.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-white">{item.title}: </span>
                        <span className="text-gray-300">{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-800 pt-8">
                  <h4 className="text-xl font-bold text-white mb-3">Your Weekly Service Pricing</h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Billing is charged on a man-hours basis at a rate of <strong className="text-white">${MAN_HOUR_RATE} per man-hour</strong>. Our standard teams consist of two crew members. Occasionally we may deploy teams of three, and the time spent on your property will be adjusted to reflect this. Each of our trucks is equipped with a GPS unit that accurately tracks the time our crews spend on your property. This pricing model was adopted to enhance customer satisfaction - since every landscape is unique, we&apos;ve standardized our pricing to accommodate these differences.
                  </p>
                  <p className="text-gray-400 mb-6">
                    Select and set a maximum number of man-hours to be spent on your property each week:
                  </p>

                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <label htmlFor="manHours" className="font-semibold text-white">
                        Max man-hours per week
                      </label>
                      <span className="text-2xl font-bold text-green-400">{manHours}</span>
                    </div>
                    <input
                      id="manHours"
                      type="range"
                      min={MIN_MAN_HOURS}
                      max={MAX_MAN_HOURS}
                      step={1}
                      value={manHours}
                      onChange={(e) => setManHours(Number(e.target.value))}
                      className="w-full accent-green-500"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{MIN_MAN_HOURS} hrs</span>
                      <span>{MAX_MAN_HOURS} hrs</span>
                    </div>
                    <p className="text-gray-300 mt-4">
                      Estimated weekly maximum: <span className="text-white font-semibold">${weeklyPremiumPrice}/week</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Details */}
        {planType && (
          <section className="py-20 bg-gray-900">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Step 2</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Your Property & Contact Info</h2>
              </div>

              <div className="bg-black rounded-2xl p-8 border border-gray-800 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                      placeholder="(541) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">City</label>
                    <input
                      type="text"
                      id="city"
                      list="signup-cities"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                      placeholder="Bend"
                    />
                    <datalist id="signup-cities">
                      <option value="Bend" />
                      <option value="Redmond" />
                      <option value="Sunriver" />
                      <option value="Prineville" />
                      <option value="La Pine" />
                    </datalist>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">Property Address *</label>
                  <input
                    type="text"
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                    placeholder="123 Main St"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Anything else we should know? <span className="text-gray-500 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none text-white placeholder-gray-500"
                    placeholder="Gate codes, pets, access notes, etc."
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-gray-400">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-green-500"
                  />
                  <span>
                    I understand this Weekly Maintenance service runs March 1st through November 30th and automatically renews each year unless I cancel by phone (
                    <a href="tel:541-305-8500" className="text-green-400 hover:text-green-300">541-305-8500</a>
                    ) or email (
                    <a href="mailto:clipslawncarebend@gmail.com" className="text-green-400 hover:text-green-300">clipslawncarebend@gmail.com</a>
                    ). *
                  </span>
                </label>

                {planSummary && (
                  <div className="bg-green-900/20 border border-green-800 rounded-lg px-4 py-3 text-sm text-green-200">
                    {planSummary}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !agreed}
                  className="w-full bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Sign-Up Request"}
                </button>
              </div>
            </div>
          </section>
        )}
      </form>
    </div>
  );
}
