"use client";

import Link from "next/link";
import { useState } from "react";

type YesNo = "yes" | "no";
type AerationChoice = "spring" | "fall" | "both" | "no";
type DethatchChoice = "yes" | "no" | "recommend";
type FallDebrisChoice = "blow" | "mulch" | "bag" | "mow";

const SEASON_WEEKS = 35; // March 1 - November 1
const BASE_WEEKLY = 60;
const AERATION_PRICE = 50;
const DETHATCHING_PRICE = 99;
const BIWEEKLY_CLEANUP_PRICE = 199;

const weeklyAddOns = [
  { key: "irrigationControl" as const, label: "Irrigation Control", low: 12, high: 12 },
  { key: "fertilization" as const, label: "Lawn Fertilization", low: 2, high: 9 },
  { key: "weedControl" as const, label: "Weed Control", low: 3, high: 40 },
];

interface Selections {
  irrigationControl: YesNo | "";
  fertilization: YesNo | "";
  weedControl: YesNo | "";
  aeration: AerationChoice | "";
  dethatching: DethatchChoice | "";
  biWeeklyCleanup: YesNo | "";
  fallDebris: FallDebrisChoice | "";
}

const initialSelections: Selections = {
  irrigationControl: "",
  fertilization: "",
  weedControl: "",
  aeration: "",
  dethatching: "",
  biWeeklyCleanup: "",
  fallDebris: "",
};

const fallDebrisOptions: { value: FallDebrisChoice; title: string; price: string; description: string }[] = [
  {
    value: "blow",
    title: "Blow Off",
    price: "Free",
    description: "Blow leaves and pine needles off the lawn and into an appropriate designated area on the property.",
  },
  {
    value: "mulch",
    title: "Double-Cut & Mulch",
    price: "$20–$30",
    description: "Double-cut the lawn to mulch leaves and pine needles into smaller pieces where appropriate. Price depends on lawn size.",
  },
  {
    value: "bag",
    title: "Bag & Remove Debris",
    price: "$30–$60",
    description: "Collect, bag, and remove accumulated leaves and pine needles from the lawn. Price depends on debris volume and disposal requirements.",
  },
  {
    value: "mow",
    title: "Standard Mowing Only",
    price: "Free",
    description: "Proceed with standard mowing and mow over the leaves or pine needles, leaving them in place. Does not include additional leaf cleanup.",
  },
];

function navigateTo(url: string) {
  window.location.href = url;
}

function formatMoney(n: number) {
  return `$${n.toLocaleString()}`;
}

function formatRange(low: number, high: number) {
  return low === high ? formatMoney(low) : `${formatMoney(low)}–${formatMoney(high)}`;
}

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

function RadioOptionList<T extends string>({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { value: T; title: string; price: string; description: string }[];
  value: T | "";
  onChange: (v: T) => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((opt) => {
        const isSelected = value === opt.value;
        return (
          <label
            key={opt.value}
            className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
              isSelected ? "border-green-500 bg-green-900/10" : "border-gray-700 bg-gray-800 hover:border-gray-600"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={isSelected}
              onChange={() => onChange(opt.value)}
              className="mt-1 w-4 h-4 accent-green-500 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-white">{opt.title}</span>
                <span className="text-green-400 font-semibold text-sm flex-shrink-0">{opt.price}</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">{opt.description}</p>
            </div>
          </label>
        );
      })}
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
  learnMoreHref?: string;
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
      {learnMoreHref && (
        <Link href={learnMoreHref} className="text-green-400 hover:text-green-300 text-sm underline">
          Learn more about this service →
        </Link>
      )}
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function MaintenanceSignupForm() {
  const [selections, setSelections] = useState<Selections>(initialSelections);
  const [fullYearBilling, setFullYearBilling] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<"sent" | "email-client" | null>(null);

  function update<K extends keyof Selections>(key: K, value: Selections[K]) {
    setSelections((prev) => ({ ...prev, [key]: value }));
  }

  // Weekly recurring total (base + selected weekly add-ons only - never includes one-time
  // services or Bi-Weekly Property Cleanup, which are billed separately).
  let weeklyLow = BASE_WEEKLY;
  let weeklyHigh = BASE_WEEKLY;
  weeklyAddOns.forEach((addOn) => {
    if (selections[addOn.key] === "yes") {
      weeklyLow += addOn.low;
      weeklyHigh += addOn.high;
    }
  });

  const seasonLow = weeklyLow * SEASON_WEEKS;
  const seasonHigh = weeklyHigh * SEASON_WEEKS;
  const monthlyLow = Math.round(seasonLow / 12);
  const monthlyHigh = Math.round(seasonHigh / 12);

  const aerationVisits = selections.aeration === "both" ? 2 : selections.aeration === "spring" || selections.aeration === "fall" ? 1 : 0;
  const aerationTotal = aerationVisits * AERATION_PRICE;
  const dethatchingSelected = selections.dethatching === "yes";
  const oneTimeTotal = aerationTotal + (dethatchingSelected ? DETHATCHING_PRICE : 0);

  const biWeeklyCleanupSelected = selections.biWeeklyCleanup === "yes";

  const buildSummary = () => {
    const lines = [`Weekly Lawn Maintenance (base): Included (starting at ${formatMoney(BASE_WEEKLY)}/week)`];
    weeklyAddOns.forEach((addOn) => {
      const sel = selections[addOn.key];
      if (sel) lines.push(`${addOn.label}: ${sel === "yes" ? `Yes (${formatRange(addOn.low, addOn.high)}/week)` : "No"}`);
    });
    lines.push(`Estimated Weekly Recurring Total: ${formatRange(weeklyLow, weeklyHigh)}/week`);

    if (selections.aeration) {
      const label = { spring: "Spring", fall: "Fall", both: "Both spring and fall", no: "No" }[selections.aeration];
      lines.push(`Lawn Aeration (one-time): ${label}${aerationVisits > 0 ? ` - ${formatMoney(aerationTotal)}` : ""}`);
    }
    if (selections.dethatching) {
      const label = { yes: `Yes - ${formatMoney(DETHATCHING_PRICE)}`, no: "No", recommend: "Please recommend whether my lawn needs it" }[selections.dethatching];
      lines.push(`Lawn Dethatching (one-time): ${label}`);
    }
    if (selections.fallDebris) {
      const opt = fallDebrisOptions.find((o) => o.value === selections.fallDebris);
      if (opt) lines.push(`Fall Leaf & Pine Needle Handling: ${opt.title} (${opt.price})`);
    }
    lines.push(`Bi-Weekly Property Cleanup (separate recurring service): ${biWeeklyCleanupSelected ? `Yes - starting at ${formatMoney(BIWEEKLY_CLEANUP_PRICE)}/visit, every 2 weeks` : "No"}`);

    if (fullYearBilling) {
      lines.push(
        `Full-Year Billing: Selected - estimated ${formatRange(monthlyLow, monthlyHigh)}/month for 12 months (based on an estimated ${formatRange(seasonLow, seasonHigh)} season total ÷ 12; one-time services and Bi-Weekly Property Cleanup are billed separately and are not included in this figure)`
      );
    } else {
      lines.push("Full-Year Billing: Not selected (standard weekly-in-advance billing for the season)");
    }

    lines.push(`SMS/Text & Phone Consent: ${smsConsent ? `Yes (recorded ${new Date().toLocaleString()})` : "Not given"}`);
    return lines;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setIsSubmitting(true);

    const summaryLines = buildSummary();
    const message = [
      "Premium Build-Your-Own Maintenance Package - Service Request",
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
    submission.append("service", "Weekly Maintenance Signup - Premium Build-Your-Own Maintenance Package");
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
      navigateTo(`mailto:clipslawncarebend@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyLines.join("\n"))}`);
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
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Build Your Package</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">
            Premium Build-Your-Own Maintenance Package
          </h1>
          <p className="text-xl text-green-100 mb-4">
            Keep your property looking its best with a maintenance plan built around your needs. Start with weekly
            lawn maintenance, then customize your package with lawn treatments, cleanup services, irrigation, and
            other add-ons.
          </p>
          <p className="text-lg text-green-100">
            Our goal is to give you reliable weekly maintenance while allowing you to choose the additional services
            that make the most sense for your property.
          </p>
          <div className="inline-flex items-center bg-green-900/40 border border-green-700 rounded-full px-5 py-2 mt-6 text-green-200 text-sm font-medium">
            Maintenance season: March 1 – November 1
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit}>
        {/* Base Maintenance */}
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
              <h3 className="text-2xl font-bold text-white mb-2">Premium Build-Your-Own Maintenance Package</h3>
              <p className="text-3xl font-bold text-white mb-4">
                Starting at {formatMoney(BASE_WEEKLY)} <span className="text-base font-normal text-gray-400">/ week</span>
              </p>
              <p className="text-gray-300 mb-4">
                The {formatMoney(BASE_WEEKLY)}/week starting price includes lawn mowing, edging as needed to maintain
                clean borders, blowing grass clippings and debris from serviced driveways, walkways, and patios, and
                standard weekly lawn maintenance.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                This base price does not include fertilization, weed control, irrigation, or other specialty
                services. Final pricing depends on lawn size, property condition, accessibility, and expected service
                time. The starting price applies to qualifying small, efficient properties.
              </p>
              <Link href="/services/lawn-mowing" className="text-green-400 hover:text-green-300 text-sm underline">
                Learn more about this service →
              </Link>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mt-10">
              Start with weekly maintenance and select the additional services you&apos;d like Clips to provide.
              We&apos;ll review your selections and prepare a customized price based on your property and the
              services requested. Your package may include any combination of the services below.
            </p>
          </div>
        </section>

        {/* How Seasonal Add-On Pricing Works */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How Our Seasonal Add-On Pricing Works</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To make budgeting easier, many of our optional maintenance services are priced across the entire
              maintenance season and divided into equal weekly payments. Instead of paying the full seasonal cost
              upfront, we calculate the total cost of the selected service for the maintenance season and divide it
              by the number of maintenance weeks. This allows you to enjoy consistent service and predictable weekly
              payments throughout the season.
            </p>
            <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
              <li>Lawn Fertilization is billed as a weekly seasonal add-on.</li>
              <li>Weed Control is billed as a weekly seasonal add-on.</li>
              <li>Irrigation Control is billed as a weekly seasonal add-on.</li>
              <li>Lawn Aeration is a separate one-time charge.</li>
              <li>Lawn Dethatching is a separate one-time charge.</li>
              <li>Bi-Weekly Property Cleanup is a separate recurring service starting at {formatMoney(BIWEEKLY_CLEANUP_PRICE)}.</li>
            </ul>
          </div>
        </section>

        {/* Customize Your Package */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Step 2</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Customize Your Package</h2>
            </div>

            <div className="space-y-8">
              <AddOnSection
                eyebrow="Irrigation"
                title="Irrigation Control"
                body={[
                  "Keep your irrigation system operating properly throughout the season with ongoing monitoring and seasonal irrigation services. Includes spring irrigation startup, irrigation system testing, free irrigation inspections, irrigation monitoring, irrigation-related call-outs, and fall/winter sprinkler blowout.",
                ]}
                pricing={`${formatMoney(12)}/week, billed as a weekly seasonal add-on.`}
                learnMoreHref="/services/irrigation"
              >
                <p className="text-white font-medium mb-3">Would you like to add Irrigation Control?</p>
                <ChoiceButtons<YesNo>
                  options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
                  value={selections.irrigationControl}
                  onChange={(v) => update("irrigationControl", v)}
                />
              </AddOnSection>

              <AddOnSection
                eyebrow="Lawn Health"
                title="Lawn Fertilization"
                body={[
                  "Help maintain a healthier, greener lawn with scheduled seasonal fertilization treatments.",
                ]}
                pricing="$2–$9/week, billed as a weekly seasonal add-on. Exact price depends on property size and treatment plan."
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
                eyebrow="Lawn Health"
                title="Weed Control"
                body={[
                  "Help control unwanted weeds and maintain a cleaner, healthier lawn with scheduled weed control treatments.",
                ]}
                pricing="$3–$40/week, billed as a weekly seasonal add-on. Exact price depends on property size and treatment plan."
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
                eyebrow="One-Time Service"
                title="Lawn Aeration"
                body={[
                  "Help relieve soil compaction and improve the movement of air, water, and nutrients into the soil.",
                ]}
                pricing={`Starting at ${formatMoney(AERATION_PRICE)}. This is a one-time service charge, paid on the day the service is performed - it is not divided across the maintenance season.`}
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
                eyebrow="One-Time Service"
                title="Lawn Dethatching"
                body={[
                  "Remove accumulated dead grass and organic material when needed to improve lawn condition.",
                ]}
                pricing={`Starting at ${formatMoney(DETHATCHING_PRICE)}. This is a one-time service charge, paid on the day the service is performed - it is not divided across the maintenance season.`}
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
                eyebrow="Fall Season"
                title="Fall Leaf & Pine Needle Management"
                body={[
                  "When seasonal leaves and pine needles accumulate on your lawn in the fall, you can choose how you'd like our team to handle them. Additional charges apply to certain options.",
                ]}
                pricing="Blow Off and Standard Mowing Only are free. Double-Cut & Mulch is $20–$30, and Bag & Remove Debris is $30–$60, depending on lawn size and debris volume."
              >
                <p className="text-white font-medium mb-3">
                  When leaves or pine needles accumulate on your lawn in the fall, how would you like our team to
                  handle them?
                </p>
                <RadioOptionList<FallDebrisChoice>
                  name="fallDebris"
                  options={fallDebrisOptions}
                  value={selections.fallDebris}
                  onChange={(v) => update("fallDebris", v)}
                />
                <p className="text-gray-500 text-xs mt-4">
                  Listed amounts are estimates within the stated ranges. Final pricing depends on lawn size or debris
                  volume, as applicable, and will be confirmed in your final quote.
                </p>
              </AddOnSection>

              <AddOnSection
                eyebrow="Property Cleanup"
                title="Bi-Weekly Property Cleanup"
                body={[
                  "Keep your property looking its best with scheduled bi-weekly cleanup services, including landscape trimming, general weeding, debris cleanup, and general property maintenance and cleanup.",
                ]}
                pricing={`Starting at ${formatMoney(BIWEEKLY_CLEANUP_PRICE)} per visit, billed every two weeks. This is a separate recurring service and is not part of your weekly maintenance total.`}
                learnMoreHref="/services/cleanup-maintenance"
              >
                <p className="text-white font-medium mb-3">Would you like to add Bi-Weekly Property Cleanup?</p>
                <ChoiceButtons<YesNo>
                  options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
                  value={selections.biWeeklyCleanup}
                  onChange={(v) => update("biWeeklyCleanup", v)}
                />
              </AddOnSection>
            </div>
          </div>
        </section>

        {/* Your Estimated Pricing */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Live Estimate</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Your Estimated Pricing</h2>
              <p className="text-gray-400">
                Updates automatically as you make selections above. Final pricing is confirmed in your quote.
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-3">Weekly Recurring Services</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Weekly Lawn Maintenance (base)</span>
                    <span>{formatMoney(BASE_WEEKLY)}/week</span>
                  </div>
                  {weeklyAddOns.map((addOn) =>
                    selections[addOn.key] === "yes" ? (
                      <div key={addOn.key} className="flex justify-between text-gray-300">
                        <span>{addOn.label}</span>
                        <span>{formatRange(addOn.low, addOn.high)}/week</span>
                      </div>
                    ) : null
                  )}
                  <div className="flex justify-between text-white font-semibold border-t border-gray-800 pt-2 mt-2">
                    <span>Estimated Weekly Total</span>
                    <span>{formatRange(weeklyLow, weeklyHigh)}/week</span>
                  </div>
                </div>
              </div>

              {oneTimeTotal > 0 && (
                <div className="border-t border-gray-800 pt-6">
                  <h3 className="text-white font-semibold mb-3">One-Time Services (separate from weekly total)</h3>
                  <div className="space-y-2 text-sm">
                    {aerationTotal > 0 && (
                      <div className="flex justify-between text-gray-300">
                        <span>Lawn Aeration ({selections.aeration === "both" ? "spring & fall" : selections.aeration})</span>
                        <span>{formatMoney(aerationTotal)}</span>
                      </div>
                    )}
                    {dethatchingSelected && (
                      <div className="flex justify-between text-gray-300">
                        <span>Lawn Dethatching</span>
                        <span>{formatMoney(DETHATCHING_PRICE)}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {biWeeklyCleanupSelected && (
                <div className="border-t border-gray-800 pt-6">
                  <h3 className="text-white font-semibold mb-3">Separate Recurring Service</h3>
                  <div className="flex justify-between text-gray-300 text-sm">
                    <span>Bi-Weekly Property Cleanup (every 2 weeks)</span>
                    <span>Starting at {formatMoney(BIWEEKLY_CLEANUP_PRICE)}/visit</span>
                  </div>
                </div>
              )}

              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-400 text-sm">
                  Estimated maintenance season total ({SEASON_WEEKS} weeks): <span className="text-white font-semibold">{formatRange(seasonLow, seasonHigh)}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Year Pricing Option */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Save with Full-Year Maintenance Pricing</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Want a lower monthly payment? Choose our full-year maintenance option. Instead of paying for your
              maintenance only during the active season, we divide your total seasonal maintenance cost into 12
              equal monthly payments. This allows you to spread the cost throughout the entire year while securing
              your maintenance service for the season.
            </p>
            <label className="flex items-start gap-3 bg-gray-900 border border-gray-800 rounded-xl p-5 cursor-pointer">
              <input
                type="checkbox"
                checked={fullYearBilling}
                onChange={(e) => setFullYearBilling(e.target.checked)}
                className="mt-1 w-4 h-4 accent-green-500"
              />
              <span className="text-gray-300">
                <span className="font-semibold text-white block mb-1">
                  Yes, spread my seasonal maintenance cost over 12 monthly payments
                </span>
                This is optional and does not change your total seasonal price. It does not apply to one-time
                services (aeration, dethatching) or to Bi-Weekly Property Cleanup, which are billed separately.
              </span>
            </label>
            {fullYearBilling && (
              <div className="mt-4 bg-green-900/20 border border-green-800 rounded-xl p-5 text-green-100 text-sm">
                <p className="mb-1">
                  {formatRange(weeklyLow, weeklyHigh)}/week × {SEASON_WEEKS} weeks = {formatRange(seasonLow, seasonHigh)} season total
                </p>
                <p className="font-semibold text-white">
                  {formatRange(seasonLow, seasonHigh)} ÷ 12 = {formatRange(monthlyLow, monthlyHigh)}/month for 12 months
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Recommendation */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Recommendation: Complete Property Maintenance</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Want to keep your entire property looking its best? We recommend pairing your weekly lawn maintenance
              with our Bi-Weekly Property Cleanup service, including trimming, weeding, debris cleanup, and general
              property cleanup. Starting at {formatMoney(BIWEEKLY_CLEANUP_PRICE)}.
            </p>
            {biWeeklyCleanupSelected ? (
              <div className="bg-black border border-green-800 rounded-xl p-5 text-green-300 text-sm">
                You&apos;ve already added Bi-Weekly Property Cleanup to your package above - no need to add it again
                here.
              </div>
            ) : (
              <label className="flex items-start gap-3 bg-black border border-gray-800 rounded-xl p-5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={false}
                  onChange={(e) => update("biWeeklyCleanup", e.target.checked ? "yes" : "")}
                  className="mt-1 w-4 h-4 accent-green-500"
                />
                <span className="text-gray-300">
                  <span className="font-semibold text-white block mb-1">
                    Add Bi-Weekly Property Cleanup to my inquiry
                  </span>
                  This is a recommendation, not a requirement - leave unchecked if you&apos;d rather not add it.
                </span>
              </label>
            )}
          </div>
        </section>

        {/* Billing & Scheduling */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Weekly Billing & Scheduling</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our preferred payment schedule is weekly billing in advance, with a standardized weekly payment day
              (or monthly, if you select Full-Year Maintenance Pricing above). Before recurring service begins,
              we&apos;ll confirm your service price, payment authorization, service schedule, and cancellation terms
              in your service agreement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our regular maintenance season runs from March 1 through November 1. Add-on services will be scheduled
              according to your approved plan and property needs.
            </p>
          </div>
        </section>

        {/* Contact Details */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Step 3</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Submit Your Request</h2>
              <p className="text-gray-400">
                Tell us about your property and select the services you&apos;re interested in. We&apos;ll follow up to review
                your selections, confirm your pricing, and finalize your schedule.
              </p>
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
                  I understand this is a service request for the maintenance season (March 1 – November 1) and
                  does not automatically enroll me in recurring service. Clips Lawn Care will follow up to confirm
                  pricing, scheduling, and a service agreement before work begins. *
                </span>
              </label>

              <label className="flex items-start gap-3 text-sm text-gray-400">
                <input
                  type="checkbox"
                  checked={smsConsent}
                  onChange={(e) => setSmsConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-green-500"
                />
                <span>
                  I consent to receive calls and/or text messages from Clips Lawn Care LLC regarding my inquiry,
                  estimates, scheduling, and requested services. Message frequency may vary. Message and data rates
                  may apply. Reply STOP to opt out of text messages or HELP for assistance. Consent is not a
                  condition of purchasing services.
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
