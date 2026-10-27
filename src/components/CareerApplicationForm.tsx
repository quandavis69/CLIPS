"use client";

import { useState } from "react";

const POSITIONS = [
  "Lawn Care Field Technician - Entry Level ($20/hour starting)",
  "Experienced Landscaping Field Technician ($23/hour starting)",
  "Licensed Landscaping Professional ($30/hour starting)",
];

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];

function formatBytes(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  position: "",
  experience: "",
  yearsExperience: "",
  equipment: "",
  licenses: "",
  skills: "",
  startDate: "",
  availability: "",
  whyWorkHere: "",
  relevantSkills: "",
  additionalInfo: "",
};

export default function CareerApplicationForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [website, setWebsite] = useState(""); // honeypot - real applicants leave this blank
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleResumeSelected = (file: File | null) => {
    if (!file) return;
    const lowerName = file.name.toLowerCase();
    const hasValidExtension = ALLOWED_RESUME_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
    if (!hasValidExtension) {
      setResumeError("Resume must be a PDF or Word document (.pdf, .doc, or .docx).");
      return;
    }
    if (file.size > MAX_RESUME_BYTES) {
      setResumeError(`Resume must be under ${formatBytes(MAX_RESUME_BYTES)}.`);
      return;
    }
    setResumeError("");
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!resume) {
      setResumeError("A resume is required to submit your application.");
      return;
    }
    if (!acknowledged) {
      setSubmitError("Please confirm the acknowledgment checkbox before submitting.");
      return;
    }

    setIsSubmitting(true);

    const submission = new FormData();
    Object.entries(formData).forEach(([key, value]) => submission.append(key, value));
    submission.append("resume", resume);
    submission.append("acknowledged", "true");
    submission.append("website", website);

    try {
      const res = await fetch("/api/career-application", {
        method: "POST",
        body: submission,
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitError(result.error || "Something went wrong submitting your application. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
      setFormData(initialFormState);
      setResume(null);
      setAcknowledged(false);
    } catch {
      setSubmitError(
        "We couldn't reach our server. Please check your connection and try again, or email your resume directly to clipslawncarebend@gmail.com."
      );
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
        <p className="text-gray-400 mb-6">
          Thank you for applying to Clips Lawn Care LLC. We&apos;ve received your application and resume, and we&apos;ll
          be in touch if you&apos;re a good fit for the role.
        </p>
        <button onClick={() => setIsSubmitted(false)} className="text-green-400 font-semibold hover:text-green-300">
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from real users, bots often fill every field */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] w-px h-px overflow-hidden"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Legal Name *</label>
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
          <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">City of Residence *</label>
          <input
            type="text"
            id="city"
            required
            list="applicant-cities"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
            placeholder="Bend"
          />
          <datalist id="applicant-cities">
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
        <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">Position You&apos;re Applying For *</label>
        <select
          id="position"
          required
          value={formData.position}
          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white"
        >
          <option value="">Select the position that best matches your qualifications</option>
          {POSITIONS.map((position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="yearsExperience" className="block text-sm font-medium text-gray-300 mb-2">
            Years of Lawn Care / Landscaping Experience
          </label>
          <input
            type="text"
            id="yearsExperience"
            value={formData.yearsExperience}
            onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
            placeholder="e.g. None, 1 year, 5+ years"
          />
        </div>
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-300 mb-2">Earliest Available Start Date</label>
          <input
            type="date"
            id="startDate"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
          Relevant Work Experience <span className="text-gray-500 font-normal">(optional)</span>
        </label>
        <textarea
          id="experience"
          rows={3}
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none text-white placeholder-gray-500"
          placeholder="Previous jobs, companies, or roles relevant to this position"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="equipment" className="block text-sm font-medium text-gray-300 mb-2">
            Equipment You Have Experience Operating <span className="text-gray-500 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="equipment"
            value={formData.equipment}
            onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
            placeholder="e.g. mowers, trimmers, skid steer, trucks/trailers"
          />
        </div>
        <div>
          <label htmlFor="licenses" className="block text-sm font-medium text-gray-300 mb-2">
            Applicable Licenses or Certifications <span className="text-gray-500 font-normal">(if any)</span>
          </label>
          <input
            type="text"
            id="licenses"
            value={formData.licenses}
            onChange={(e) => setFormData({ ...formData, licenses: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
            placeholder="e.g. pesticide applicator license, CDL - leave blank if none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="skills" className="block text-sm font-medium text-gray-300 mb-2">
          Relevant Landscaping or Technical Skills <span className="text-gray-500 font-normal">(optional)</span>
        </label>
        <textarea
          id="skills"
          rows={3}
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none text-white placeholder-gray-500"
          placeholder="Irrigation, hardscaping, planting, equipment maintenance, etc."
        />
      </div>

      <div>
        <label htmlFor="availability" className="block text-sm font-medium text-gray-300 mb-2">
          General Availability / Preferred Schedule <span className="text-gray-500 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          id="availability"
          value={formData.availability}
          onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
          placeholder="e.g. Full-time, Monday-Friday"
        />
      </div>

      <div>
        <label htmlFor="whyWorkHere" className="block text-sm font-medium text-gray-300 mb-2">
          Why do you want to work for Clips Lawn Care LLC? *
        </label>
        <textarea
          id="whyWorkHere"
          required
          rows={4}
          value={formData.whyWorkHere}
          onChange={(e) => setFormData({ ...formData, whyWorkHere: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none text-white placeholder-gray-500"
        />
      </div>

      <div>
        <label htmlFor="relevantSkills" className="block text-sm font-medium text-gray-300 mb-2">
          What relevant skills or experience would you bring to the team? *
        </label>
        <textarea
          id="relevantSkills"
          required
          rows={4}
          value={formData.relevantSkills}
          onChange={(e) => setFormData({ ...formData, relevantSkills: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none text-white placeholder-gray-500"
        />
      </div>

      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
          Optional Additional Information
        </label>
        <textarea
          id="additionalInfo"
          rows={3}
          value={formData.additionalInfo}
          onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none text-white placeholder-gray-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Resume *</label>
        <label
          htmlFor="resume"
          className="flex flex-col items-center justify-center gap-2 w-full px-4 py-6 bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-green-500/50 transition-colors text-center"
        >
          <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span className="text-gray-300 text-sm font-medium">Click to upload your resume</span>
          <span className="text-gray-500 text-xs">PDF or Word document (.pdf, .doc, .docx), up to {formatBytes(MAX_RESUME_BYTES)}</span>
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="hidden"
            onChange={(e) => {
              handleResumeSelected(e.target.files?.[0] ?? null);
              e.target.value = "";
            }}
          />
        </label>

        {resumeError && <p className="text-red-400 text-sm mt-2">{resumeError}</p>}

        {resume && (
          <div className="mt-3 flex items-center justify-between gap-3 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
            <span className="text-sm text-gray-300 truncate">{resume.name}</span>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-xs text-gray-500">{formatBytes(resume.size)}</span>
              <button
                type="button"
                onClick={() => setResume(null)}
                className="text-gray-500 hover:text-red-400 transition-colors"
                aria-label="Remove resume"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <label className="flex items-start gap-3 text-sm text-gray-400">
        <input
          type="checkbox"
          required
          checked={acknowledged}
          onChange={(e) => setAcknowledged(e.target.checked)}
          className="mt-1 w-4 h-4 accent-green-500"
        />
        <span>I confirm the information provided in this application is accurate to the best of my knowledge. *</span>
      </label>

      {submitError && (
        <div className="bg-red-900/20 border border-red-800 rounded-lg px-4 py-3 text-sm text-red-300">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
