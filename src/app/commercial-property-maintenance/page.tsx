import Link from "next/link";
import type { Metadata } from "next";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "HOA & Commercial Property Maintenance | Clips Lawn Care LLC",
  description: "Explore HOA, rental property, property management, and commercial landscaping maintenance in Central Oregon. Learn how Clips Lawn Care LLC structures seasonal maintenance plans with predictable monthly billing.",
};

const billingReasons = [
  {
    title: "Predictable Monthly Expenses",
    description: "Clients know the monthly payment amount in advance, which helps with budgeting and accounting.",
  },
  {
    title: "Easier Rental Property Budgeting",
    description: "Rental property owners and managers can plan their maintenance costs across the year instead of budgeting around irregular seasonal invoices. Where appropriate, a property manager or landlord may use the predictable expense when determining a consistent monthly property maintenance fee for tenants, subject to the property's lease arrangements and applicable law. Clips Lawn Care LLC does not set rental rates, determine tenant fees, or provide legal advice about lease terms.",
  },
  {
    title: "Simplified HOA Budgeting",
    description: "HOA boards can plan annual maintenance spending more consistently and incorporate the monthly amount into their annual budget.",
  },
  {
    title: "Better Annual Planning",
    description: "Property managers can review the expected scope of work, seasonal price, and monthly payment before approving the maintenance plan.",
  },
  {
    title: "Consistent Billing",
    description: "The client pays the same agreed monthly amount throughout the 12-month billing period, making the expense easier to track.",
  },
];

const customerTypes = [
  {
    title: "HOAs & Community Associations",
    description: "Keep common areas, community entrances, shared green spaces, and other landscaped areas maintained through a customized seasonal maintenance plan.",
    note: "Inquiry type: HOA / Community Association",
    propertyType: "HOA",
  },
  {
    title: "Rental Properties & Landlords",
    description: "Create a more predictable annual maintenance budget for rental homes and investment properties with a plan tailored to each property's requirements.",
    note: "Inquiry type: Rental Property Owner / Landlord",
    propertyType: "Commercial",
  },
  {
    title: "Property Management Companies",
    description: "Coordinate recurring property maintenance with an agreed scope of work, a planned seasonal schedule, and predictable monthly billing.",
    note: "Inquiry type: Property Management Company",
    propertyType: "Commercial",
  },
  {
    title: "Commercial Properties",
    description: "Maintain professional outdoor spaces for commercial sites through a maintenance plan designed around the property's needs and approved service requirements.",
    note: "Inquiry type: Commercial Property",
    propertyType: "Commercial",
  },
];

const services = [
  "Lawn mowing",
  "Edging and string trimming",
  "Weed management",
  "Fertilization when included in the approved scope",
  "Shrub and hedge trimming",
  "Seasonal cleanups",
  "Irrigation maintenance",
  "Other agreed-upon lawn care and landscaping maintenance services",
];

const processSteps = [
  {
    title: "Property Assessment",
    description: "We review the property's size, condition, landscaped areas, access, and maintenance needs.",
  },
  {
    title: "Service Planning",
    description: "We identify the appropriate services and planned maintenance frequency for the property.",
  },
  {
    title: "Customized Seasonal Quote",
    description: "We prepare an estimate based on the agreed scope of work, labor, materials, equipment, and service schedule.",
  },
  {
    title: "Approval & Annual Calculation",
    description: "Once the seasonal scope and total price are approved, we divide the total by 12 to establish the monthly payment.",
  },
  {
    title: "Seasonal Scheduling",
    description: "We schedule the approved maintenance work throughout the standard March 1 through November 1 service season.",
  },
  {
    title: "Monthly Billing",
    description: "The client pays the agreed monthly amount throughout the 12-month billing period.",
  },
];

const faqs = [
  {
    question: "Why do you divide the seasonal price by 12?",
    answer: "We spread the approved cost of the seasonal maintenance plan across 12 equal monthly payments, giving the client a predictable annual expense.",
  },
  {
    question: "Do you perform maintenance during all 12 months?",
    answer: "Our standard maintenance season runs from March 1 through November 1. The 12-month billing structure spreads the cost of the approved seasonal services throughout the year; it does not mean routine seasonal visits occur in every month.",
  },
  {
    question: "How is my price determined?",
    answer: "We assess the property, identify the requested services, determine the planned schedule, and prepare a customized seasonal quote.",
  },
  {
    question: "Will every property receive the same pricing?",
    answer: "No. Pricing depends on the property's individual needs, the approved scope of work, service frequency, labor, materials, and other relevant requirements.",
  },
  {
    question: "Can I request additional services?",
    answer: "Yes. Additional work can be discussed and quoted separately before proceeding.",
  },
  {
    question: "How do I get started?",
    answer: "Contact Clips Lawn Care LLC to arrange a property assessment and request a customized maintenance quote.",
  },
];

function quoteHref(note: string, propertyType?: string) {
  const params = new URLSearchParams({ service: "Commercial Maintenance", note });
  if (propertyType) params.set("propertyType", propertyType);
  return `/contact?${params.toString()}`;
}

export default function CommercialPropertyMaintenancePage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
            HOAs, Property Managers &amp; Commercial Properties
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">
            Reliable Property Maintenance. Predictable Year-Round Billing.
          </h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Clips Lawn Care LLC provides customized lawn care and landscaping maintenance plans for HOAs, rental
            properties, property managers, and commercial properties throughout Central Oregon. Our pricing structure
            spreads the approved cost of seasonal maintenance across 12 equal monthly payments, making annual
            budgeting simpler and more predictable.
          </p>
          <Link
            href={quoteHref("Commercial property maintenance inquiry")}
            className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors mt-8"
          >
            Request a Commercial Quote
          </Link>
        </div>
      </section>

      {/* Maintenance Season */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Our Season &amp; Billing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">How Our Seasonal Billing Works</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Our standard maintenance season runs from <strong className="text-white">March 1 through November 1</strong>.
            For pricing and billing purposes, we structure our maintenance program as an eight-month seasonal service
            plan, with the approved seasonal maintenance cost divided into 12 equal payments.
          </p>
          <ol className="space-y-3 mt-8">
            {[
              "We review the property and identify the maintenance services required.",
              "We prepare an initial quote based on the requested work, property requirements, and planned maintenance schedule.",
              "We calculate the total price for the approved eight-month seasonal maintenance plan, including the services covered by that agreement.",
              "We divide the total approved seasonal price by 12.",
              "The result becomes the client's fixed monthly payment.",
              "The client pays that same amount throughout the 12-month billing period.",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-500 text-black font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
          <div className="bg-black border border-gray-800 rounded-xl px-6 py-5 mt-8 text-gray-300 leading-relaxed">
            <strong className="text-white">Important:</strong> the 12-month arrangement is a billing structure for
            the agreed seasonal services. It does not mean routine maintenance visits are performed during all 12
            months.
          </div>
        </div>
      </section>

      {/* Pricing Example */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Illustrative Example</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Example Seasonal Maintenance Plan</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              This example is illustrative only. It is not a starting price, standard package price, or guarantee of
              pricing for any actual property.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-black rounded-xl p-6 border border-gray-800">
                <p className="text-sm text-gray-500 mb-1">Approved Seasonal Maintenance Price</p>
                <p className="text-2xl font-bold text-white">$24,000</p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-gray-800">
                <p className="text-sm text-gray-500 mb-1">Seasonal Service Period</p>
                <p className="text-2xl font-bold text-white">March 1 – November 1</p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-gray-800">
                <p className="text-sm text-gray-500 mb-1">Billing Period</p>
                <p className="text-2xl font-bold text-white">12 Months</p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-gray-800">
                <p className="text-sm text-gray-500 mb-1">Monthly Payment</p>
                <p className="text-2xl font-bold text-white">$24,000 ÷ 12 = $2,000</p>
              </div>
            </div>

            <div className="text-center border-t border-gray-800 pt-10">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-3">
                Total Approved Seasonal Price ÷ 12 = Fixed Monthly Payment
              </p>
              <p className="text-4xl md:text-5xl font-extrabold text-green-400 mb-2">$2,000 per month for 12 months</p>
              <p className="text-gray-400">The total paid across the 12 monthly payments is $24,000.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Billing Structure */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Why This Structure</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Why We Use Predictable Monthly Billing</h2>
          </div>
          <div className="space-y-6">
            {billingReasons.map((reason) => (
              <div key={reason.title} className="bg-black border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Who We Serve</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Built for Every Property Type</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Every property receives a customized plan - services, visit frequency, and pricing vary by property.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {customerTypes.map((type) => (
              <div key={type.title} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400 mb-6 flex-1">{type.description}</p>
                <Link
                  href={quoteHref(type.note, type.propertyType)}
                  className="text-green-400 font-semibold hover:text-green-300 transition-colors inline-flex items-center gap-1"
                >
                  Request a Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Customized Plans</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Services Available Through Your Plan</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Each property receives a tailored quote. Services may include, where offered and appropriate:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{service}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center max-w-2xl mx-auto">
            Routine seasonal maintenance is separate from landscaping installations, repairs, upgrades, and other
            additional work, which may require a separate quote. Learn more about our{" "}
            <Link href="/services/landscape" className="text-green-400 hover:text-green-300 underline">
              landscape project services
            </Link>.
          </p>
        </div>
      </section>

      {/* Quoting Process */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">The Commercial Quoting Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.title} className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <div className="w-10 h-10 rounded-full bg-green-500 text-black font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Step {i + 1}: {step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-10 max-w-2xl mx-auto">
            Work outside the approved agreement, changes to the scope, or additional projects may require a separate
            quote or written approval. Additional services are not automatically included in the monthly payment.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Commercial Property Maintenance FAQ</h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Build a Maintenance Plan for Your Property
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you manage an HOA, oversee rental properties, manage a commercial facility, or own an investment
            property, Clips Lawn Care LLC can help you establish a customized seasonal maintenance plan with
            predictable monthly billing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={quoteHref("Commercial property maintenance inquiry")}
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Request a Commercial Quote
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
