"use client";

import Link from "next/link";
import { useState } from "react";

type YesNo = "yes" | "no";
type AerationChoice = "spring" | "fall" | "both" | "no";
type DethatchChoice = "yes" | "no" | "recommend";
type CleanupChoice = "spring" | "fall" | "both" | "assess";

interface Selections {
  fertilization: YesNo | "";
  weedControl: YesNo | "";
  aeration: AerationChoice | "";
  dethatching: DethatchChoice | "";
  cleanups: CleanupChoice | "";
  sprinklerStartup: YesNo | "";
  sprinklerBlowOut: YesNo | "";
  irrigationMonitoring: YesNo | "";
  shrubPruning: YesNo | "";
}

const initialSelections: Selections = {
  fertilization: "",
  weedControl: "",
  aeration: "",
  dethatching: "",
  cleanups: "",
  sprinklerStartup: "",
  sprinklerBlowOut: "",
  irrigationMonitoring: "",
  shrubPruning: "",
};

function ChoiceButtons<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T | "";
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-colors border ${
            value === opt.value
              ? "bg-green-500 text-black border-green-500"
              : "bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-600"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function AddOnSection({
  eyebrow,
  title,
  body,
  pricing,
  learnMoreHref,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string[];
  pricing: string;
  learnMoreHref: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
      <span className="text-green-400 font-semibold text-xs uppercase tracking-wider">{eyebrow}</span>
      <h3 className="text-2xl font-bold text-white mt-1 mb-4">{title}</h3>
      {body.map((p, i) => (
        <p key={i} className="text-gray-300 mb-3 leading-relaxed">
          {p}
        </p>
      ))}
      <p className="text-green-300 text-sm mb-2">Pricing: {pricing}</p>
      <Link href={learnMoreHref} className="text-green-400 hover:text-green-300 text-sm underline">
        Learn more about this service →
      </Link>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function MaintenanceSignupForm() {
  const [selections, setSelections] = useState<Selections>(initialSelections);
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

  function update<K extends keyof Selections>(key: K, value: Selections[K]) {
    setSelections((prev) => ({ ...prev, [key]: value }));
  }

  const buildSummary = () => {
    const lines = ["Basic Maintenance: Included (starting at $60/visit)"];
    if (selections.fertilization) lines.push(`Lawn Fertilization: ${selections.fertilization === "yes" ? "Yes" : "No"}`);
    if (selections.weedControl) lines.push(`Weed Control: ${selections.weedControl === "yes" ? "Yes" : "No"}`);
    if (selections.aeration) {
      const label = { spring: "Spring", fall: "Fall", both: "Both spring and fall", no: "No" }[selections.aeration];
      lines.push(`Aeration: ${label}`);
    }
    if (selections.dethatching) {
      const label = { yes: "Yes", no: "No", recommend: "Please recommend whether my lawn needs it" }[selections.dethatching];
      lines.push(`Dethatching: ${label}`);
    }
    if (selections.cleanups) {
      const label = { spring: "Spring cleanup", fall: "Fall cleanup", both: "Both", assess: "Please assess my property first" }[selections.cleanups];
      lines.push(`Seasonal Cleanups: ${label}`);
    }
    if (selections.sprinklerStartup) lines.push(`Sprinkler System Startup: ${selections.sprinklerStartup === "yes" ? "Yes" : "No"}`);
    if (selections.sprinklerBlowOut) lines.push(`Sprinkler System Blow-Out: ${selections.sprinklerBlowOut === "yes" ? "Yes" : "No"}`);
    if (selections.irrigationMonitoring) lines.push(`Seasonal Irrigation Monitoring: ${selections.irrigationMonitoring === "yes" ? "Yes" : "No"}`);
    if (selections.shrubPruning) lines.push(`Shrub Pruning & Hedging: ${selections.shrubPruning === "yes" ? "Yes" : "No"}`);
    return lines;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setIsSubmitting(true);

    const summaryLines = buildSummary();
    const message = [
      "2027 Build Your Own Premium Maintenance Package - Service Request",
      ...summaryLines,
      "",
      formData.message ? `Additional notes: ${formData.message}` : "Additional notes: none",
    ].join("\n");

    const submission = new FormData();
    submission.append("name", formData.name);
    submission.append("email", formData.email);
    submission.append("phone", formData.phone);
    submission.append("address", formData.address);
    submission.append("city", formData.city);
    submission.append("service", "Weekly Maintenance Signup - Build Your Own Premium Package");
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
            <h2 className="text-2xl font-bold text-white mb-2">Service Request Sent!</h2>
            <p className="text-gray-400">
              We&apos;ll review your property and selections and follow up with a customized quote and schedule. Submitting
              this form is a service request and does not automatically enroll you in recurring service.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">Email Client Opened!</h2>
            <p className="text-gray-400">
              Please send the email that opened in your email client and we&apos;ll follow up with a customized quote.
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">2027 Season</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">
            Build Your Own Premium Maintenance Package
          </h1>
          <p className="text-xl text-green-100 mb-4">
            Keep your property looking its best with a maintenance plan built around your needs. Start with our Basic
            Maintenance service, then customize your package with lawn treatments, seasonal cleanups, irrigation
            services, and other landscape improvements.
          </p>
          <p className="text-lg text-green-100">
            Our goal is to give you reliable weekly maintenance while allowing you to choose the additional services
            that make the most sense for your property.
          </p>
          <div className="inline-flex items-center bg-green-900/40 border border-green-700 rounded-full px-5 py-2 mt-6 text-green-200 text-sm font-medium">
            Maintenance season: March 1 – November 1, 2027
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit}>
        {/* Basic Maintenance */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Step 1</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Your Weekly Maintenance Plan</h2>
            </div>

            <div className="bg-gray-900 border-2 border-green-500 rounded-2xl p-8">
              <span className="inline-block bg-green-900/50 text-green-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Included With Every Package
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Basic Maintenance</h3>
              <p className="text-3xl font-bold text-white mb-4">
                Starting at $60 <span className="text-base font-normal text-gray-400">/ visit</span>
              </p>
              <p className="text-gray-300 mb-4">
                Our straightforward maintenance service keeps your lawn neat, clean, and consistently maintained
                throughout the season. Includes lawn mowing, edging as needed to maintain clean borders, and blowing
                grass clippings and debris from serviced driveways, walkways, and patios.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Basic Maintenance does not include fertilization, weed treatments, shrub pruning, seasonal cleanups,
                irrigation work, or other specialty services. Final pricing depends on lawn size, property condition,
                accessibility, and expected service time. The starting price applies to qualifying small, efficient
                properties.
              </p>
              <Link href="/services/lawn-mowing" className="text-green-400 hover:text-green-300 text-sm underline">
                Learn more about this service →
              </Link>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mt-10">
              Start with Basic Maintenance and select the additional services you&apos;d like Clips to provide. We&apos;ll
              review your selections and prepare a customized price based on your property and the services requested.
              Your premium package may include any combination of the services below.
            </p>
          </div>
        </section>

        {/* Customize Your Package */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Step 2</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Customize Your Package</h2>
            </div>

            <div className="space-y-8">
              <AddOnSection
                eyebrow="Lawn Health & Weed Control"
                title="Lawn Fertilization"
                body={[
                  "Help support healthy lawn growth with scheduled fertilizer applications throughout the growing season (spring, midseason, and fall applications).",
                ]}
                pricing="Custom quote based on lawn size, product requirements, and application schedule."
                learnMoreHref="/services/lawn-fertilization"
              >
                <p className="text-white font-medium mb-3">Would you like to add lawn fertilization?</p>
                <ChoiceButtons<YesNo>
                  options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
                  value={selections.fertilization}
                  onChange={(v) => update("fertilization", v)}
                />
              </AddOnSection>

              <AddOnSection
                eyebrow="Lawn Health & Weed Control"
                title="Weed Control"
                body={[
                  "Pre-emergent and seasonal weed control to keep your lawn healthy: a spring pre-emergent application, two summer herbicide applications, and two fall herbicide applications.",
                ]}
                pricing="Custom quote based on lawn size and treatment schedule."
                learnMoreHref="/services/weed-control"
              >
                <p className="text-white font-medium mb-3">Would you like to add weed control?</p>
                <ChoiceButtons<YesNo>
                  options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
                  value={selections.weedControl}
                  onChange={(v) => update("weedControl", v)}
                />
              </AddOnSection>

              <AddOnSection
                eyebrow="Seasonal Lawn Treatments"
                title="Core Aeration"
                body={[
                  "Help relieve soil compaction and improve the movement of air, water, and nutrients into the soil. Soil plugs are generally left on the lawn to break down naturally - plug removal or additional cleanup is quoted separately.",
                ]}
                pricing="Preliminary starting price of $199 per service, subject to confirmation based on lawn size and equipment time."
                learnMoreHref="/services/aeration"
              >
                <p className="text-white font-medium mb-3">Would you like aeration?</p>
                <ChoiceButtons<AerationChoice>
                  options={[
                    { value: "spring", label: "Spring" },
                    { value: "fall", label: "Fall" },
                    { value: "both", label: "Both" },
                    { value: "no", label: "No" },
                  ]}
                  value={selections.aeration}
                  onChange={(v) => update("aeration", v)}
                />
              </AddOnSection>

              <AddOnSection
                eyebrow="Seasonal Lawn Treatments"
                title="Dethatching"
                body={[
                  "Remove accumulated dead grass and organic material when needed to improve lawn condition. Dethatching requirements vary considerably by property - we'll confirm the scope and price before scheduling.",
                ]}
                pricing="Preliminary starting price of $249 per service, subject to confirmation based on lawn size, labor, and debris disposal."
                learnMoreHref="/services/dethatching"
              >
                <p className="text-white font-medium mb-3">Would you like dethatching?</p>
                <ChoiceButtons<DethatchChoice>
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                    { value: "recommend", label: "Please recommend" },
                  ]}
                  value={selections.dethatching}
                  onChange={(v) => update("dethatching", v)}
                />
              </AddOnSection>

              <AddOnSection
                eyebrow="Seasonal Cleanups"
                title="Spring & Fall Cleanups"
                body={[
                  "Spring Cleanup prepares your property for the growing season by removing accumulated debris, clearing eligible landscape beds, and addressing seasonal maintenance needs. Fall Cleanup removes seasonal leaves and debris and prepares your property for winter. We'll provide a quote or agreed spending limit before starting - additional work requires your approval.",
                ]}
                pricing="Based on the labor required, debris volume, disposal costs, and the approved scope of work."
                learnMoreHref="/services/seasonal-cleanups"
              >
                <p className="text-white font-medium mb-3">Would you like seasonal cleanups?</p>
                <ChoiceButtons<CleanupChoice>
                  options={[
                    { value: "spring", label: "Spring cleanup" },
                    { value: "fall", label: "Fall cleanup" },
                    { value: "both", label: "Both" },
                    { value: "assess", label: "Please assess my property first" },
                  ]}
                  value={selections.cleanups}
                  onChange={(v) => update("cleanups", v)}
                />
              </AddOnSection>

              <AddOnSection
                eyebrow="Irrigation Services"
                title="Sprinkler System Startup"
                body={[
                  "Get your irrigation system ready for the growing season. Where accessible and applicable, startup includes activating the main isolation valve and backflow device, operating and checking irrigation zones, inspecting accessible valves and wiring, making routine sprinkler-head adjustments, checking for visible leaks, and setting the irrigation controller when accessible. Parts, repairs, extensive troubleshooting, and certified backflow testing are excluded unless separately quoted.",
                ]}
                pricing="Starting at $70 for up to seven zones, plus $5 per additional zone."
                learnMoreHref="/services/irrigation"
              >
                <p className="text-white font-medium mb-3">Would you like sprinkler startup?</p>
                <ChoiceButtons<YesNo>
                  options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
                  value={selections.sprinklerStartup}
                  onChange={(v) => update("sprinklerStartup", v)}
                />
              </AddOnSection>

              <AddOnSection
                eyebrow="Irrigation Services"
                title="Sprinkler System Blow-Out"
                body={[
                  "Clear water from your irrigation lines before winter to help protect your system from freeze damage.",
                ]}
                pricing="Starting at $60."
                learnMoreHref="/services/irrigation"
              >
                <p className="text-white font-medium mb-3">Would you like sprinkler blow-out?</p>
                <ChoiceButtons<YesNo>
                  options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
                  value={selections.sprinklerBlowOut}
                  onChange={(v) => update("sprinklerBlowOut", v)}
                />
              </AddOnSection>

              <AddOnSection
                eyebrow="Irrigation Services"
                title="Seasonal Irrigation Monitoring"
                body={[
                  "Routine inspections during the growing season can help identify visible leaks, poorly adjusted heads, and timer issues. Repairs, replacement parts, and specialized troubleshooting are quoted separately. Backflow testing is not included.",
                ]}
                pricing="Customized according to the inspection schedule and scope of service."
                learnMoreHref="/services/irrigation"
              >
                <p className="text-white font-medium mb-3">Would you like seasonal irrigation monitoring?</p>
                <ChoiceButtons<YesNo>
                  options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
                  value={selections.irrigationMonitoring}
                  onChange={(v) => update("irrigationMonitoring", v)}
                />
              </AddOnSection>

              <AddOnSection
                eyebrow="Shrub Pruning & Hedging"
                title="Shrub Pruning & Hedging"
                body={[
                  "Keep shrubs and hedges neat with scheduled trimming and pruning. This service is not unlimited - your quote will specify the included plants, service frequency, and scope of work.",
                ]}
                pricing="Custom quote based on the number, size, condition, and accessibility of plants, as well as the required frequency."
                learnMoreHref="/services/shrub-pruning"
              >
                <p className="text-white font-medium mb-3">Would you like pruning and hedging?</p>
                <ChoiceButtons<YesNo>
                  options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
                  value={selections.shrubPruning}
                  onChange={(v) => update("shrubPruning", v)}
                />
              </AddOnSection>
            </div>
          </div>
        </section>

        {/* Your Customized Price */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Your Customized Price</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Once you submit your selections, our team will review your property and prepare a quote showing your
              weekly Basic Maintenance price, the additional services you&apos;ve selected, the schedule and frequency of
              those services, any applicable material, disposal, or specialty-service charges, and your total recurring
              price plus any separately scheduled seasonal charges.
            </p>
            <p className="text-gray-400">No additional services will be performed without your approval.</p>
          </div>
        </section>

        {/* Billing & Scheduling */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Weekly Billing & Scheduling</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our preferred payment schedule for 2027 is weekly billing in advance, with a standardized weekly payment
              day. Before recurring service begins, we&apos;ll confirm your service price, payment authorization, service
              schedule, and cancellation terms in your service agreement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our regular maintenance season runs from March 1 through November 1. Seasonal treatments and cleanups
              will be scheduled according to your approved plan and property needs.
            </p>
          </div>
        </section>

        {/* Contact Details */}
        <section className="py-20 bg-black">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Step 3</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Submit Your Request</h2>
              <p className="text-gray-400">
                Tell us about your property and select the services you&apos;re interested in. We&apos;ll follow up to review
                your selections, confirm your pricing, and finalize your schedule.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 space-y-6">
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
                    <option value="Powell Butte" />
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
                  I understand this is a service request for the 2027 maintenance season (March 1 – November 1) and
                  does not automatically enroll me in recurring service. Clips Lawn Care will follow up to confirm
                  pricing, scheduling, and a service agreement before work begins. *
                </span>
              </label>

              <div className="bg-green-900/20 border border-green-800 rounded-lg px-4 py-3 text-sm text-green-200">
                <p className="font-semibold mb-1">Your selections:</p>
                <ul className="list-disc list-inside space-y-0.5">
                  {buildSummary().map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !agreed}
                className="w-full bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Your Request"}
              </button>
            </div>

            <p className="text-center text-gray-500 text-sm mt-10">
              Clips Lawn Care LLC — Reliable maintenance. Customized care.
            </p>
          </div>
        </section>
      </form>
    </div>
  );
}
