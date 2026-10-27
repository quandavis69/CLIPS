import Image from "next/image";
import type { Metadata } from "next";
import CareerApplicationForm from "@/components/CareerApplicationForm";

export const metadata: Metadata = {
  title: "Join the Team | Clips Lawn Care LLC",
  description: "Join Clips Lawn Care LLC in Central Oregon. Explore 2027 lawn care and landscaping technician positions, starting wages, qualifications, and apply online.",
};

const positions = [
  {
    title: "Lawn Care Field Technician",
    tier: "Entry Level",
    wage: "$20",
    experience: "No previous lawn care or landscaping experience required. Experience is preferred but not mandatory.",
    responsibilities: [
      "Mowing lawns",
      "String trimming and edging",
      "Routine lawn care and property maintenance",
      "Assisting with property cleanups",
      "Learning proper equipment operation and safe work practices",
      "Maintaining professional standards at residential and commercial properties",
    ],
    ideal: [
      "Dependable and punctual",
      "Willing to learn",
      "Comfortable working outdoors",
      "Able to work as part of a team",
      "Takes pride in completing quality work",
    ],
  },
  {
    title: "Experienced Landscaping Field Technician",
    tier: "Experienced",
    wage: "$23",
    experience: "Previous relevant landscaping or lawn care experience required.",
    responsibilities: [
      "Perform landscaping and maintenance work efficiently",
      "Assist with planting, irrigation-related work, sod installation, rock and mulch installation, walls, pavers, and landscape installations where appropriate",
      "Operate relevant equipment safely",
      "Help complete residential, commercial, and HOA projects",
      "Maintain quality and productivity standards",
    ],
    ideal: [
      "Has relevant field experience",
      "Understands professional job-site procedures",
      "Can work independently when appropriate",
      "Takes responsibility for quality, safety, and reliability",
    ],
  },
  {
    title: "Licensed Landscaping Professional",
    tier: "Licensed",
    wage: "$30",
    experience: "Relevant professional experience and applicable qualifications required.",
    responsibilities: [
      "Perform specialized landscaping or technical work within the employee's qualifications and legal authorization",
      "Support higher-skill projects",
      "Help maintain professional standards and compliance",
      "Assist with technical work appropriate to the individual's license or certification",
    ],
    ideal: [
      "Holds a relevant license, certification, or professional qualification applicable to the work performed",
      "Applicants must identify relevant licenses, certifications, experience, and qualifications when applying",
    ],
  },
];

const opportunities = [
  "Incentives and performance bonuses where applicable",
  "A team-oriented work environment",
  "Active, outdoor work",
  "Opportunities for professional growth",
  "Experience working on residential, commercial, and HOA properties",
  "Opportunities to develop technical skills and equipment experience",
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Careers</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">
            Join the Team at Clips Lawn Care LLC
          </h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Clips Lawn Care LLC is growing, and we&apos;re looking for dependable people to join our lawn care and
            landscaping crews for the 2027 season. Whether you&apos;re new to the industry or an experienced
            professional, we offer opportunities to develop your skills, work on a variety of properties, and grow
            with a local Central Oregon company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#open-positions"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="#apply"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Hiring Advertisement Image */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
            <Image
              src="/careers/clips-2027-bilingual-hiring.jpg"
              alt="Clips Lawn Care LLC 2027 bilingual (English and Spanish) hiring advertisement for lawn care and landscaping field technician positions, including starting wages of $20, $23, and $30 per hour"
              width={1200}
              height={1500}
              className="w-full h-auto"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            Our official 2027 hiring advertisement, available in English and Spanish. Full job details are also
            listed below as text.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">2027 Season</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Open Positions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Three field technician positions are open for the 2027 season.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-green-900/20 border border-green-800 rounded-xl px-6 py-5 text-green-100 text-sm leading-relaxed text-center">
              All listed wages are starting rates. Higher starting compensation may be available depending on
              experience, qualifications, demonstrated skills, and the outcome of an interview and consultation.
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {positions.map((position) => (
              <div key={position.title} className="bg-black rounded-2xl p-8 border border-gray-800 flex flex-col">
                <span className="inline-block w-fit bg-green-900/50 text-green-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {position.tier}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">{position.title}</h3>
                <p className="text-3xl font-extrabold text-green-400 mb-1">
                  {position.wage} <span className="text-base font-normal text-gray-400">/ hour starting</span>
                </p>
                <p className="text-gray-400 text-sm mb-6">{position.experience}</p>

                <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Responsibilities</h4>
                <ul className="space-y-2 mb-6">
                  {position.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Ideal Candidate</h4>
                <ul className="space-y-2 mb-8">
                  {position.ideal.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#apply"
                  className="mt-auto block w-full text-center bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors"
                >
                  Apply for This Position
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employment Opportunities */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Why Work With Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Employment Opportunities</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {opportunities.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-gray-900 border border-gray-800 rounded-xl p-5">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Requirement */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Resume Required</h2>
          <p className="text-gray-400 leading-relaxed">
            Please include an up-to-date resume with your application so we can review your relevant experience,
            qualifications, and suitability for the position. Applications submitted without a resume cannot be
            completed.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-black scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Apply Now</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Employment Application</h2>
            <p className="text-gray-400">
              Fill out the form below to apply. A resume is required to submit your application.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <CareerApplicationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
