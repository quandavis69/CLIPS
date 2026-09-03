import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Clips Lawncare",
  description: "Learn how Clips Lawn Care LLC collects, uses, and protects your personal information, including our SMS/text messaging practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Privacy Policy</h1>
          <p className="text-green-100">
            Effective Date: August 31, 2026 &nbsp;•&nbsp; Last Updated: August 31, 2026
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 space-y-10">
          <p>
            Clips Lawn Care LLC respects your privacy and is committed to protecting the personal
            information you provide to us. This Privacy Policy explains what information we collect,
            how we use it, how we may share it, and how you can contact us regarding your information.
            It also explains how we handle information collected in connection with SMS/text messaging.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property/service address</li>
              <li>Billing and payment information</li>
              <li>Information about your lawn care or landscaping needs</li>
              <li>Service preferences and appointment information</li>
              <li>Communications you send to us</li>
              <li>Information submitted through our website, contact forms, quote requests, booking forms, or other services</li>
            </ul>
            <p className="mt-4">
              We may also automatically collect limited information when you use our website, such as
              your IP address, browser type, device information, and website usage information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="mb-4">Clips Lawn Care may use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide lawn care, landscaping, and related services</li>
              <li>Prepare estimates and quotes</li>
              <li>Schedule and manage appointments</li>
              <li>Communicate with you about your services</li>
              <li>Send appointment reminders and service notifications</li>
              <li>Send invoices, payment information, and account-related communications</li>
              <li>Respond to customer questions and requests</li>
              <li>Provide customer support</li>
              <li>Process payments</li>
              <li>Improve our services and website</li>
              <li>Send promotional or marketing communications when permitted and when you have provided the appropriate consent</li>
              <li>Maintain business records and comply with applicable legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">SMS/Text Messaging</h2>
            <p className="mb-4">
              If you provide your mobile phone number and consent to receive text messages from Clips
              Lawn Care, we may use your phone number to send SMS/text messages related to your account,
              services, appointments, estimates, scheduling, billing, customer support, service updates,
              and, where applicable, promotional or marketing communications.
            </p>
            <p className="mb-4">Message frequency varies depending on your relationship and interactions with Clips Lawn Care.</p>
            <p className="mb-4">Message and data rates may apply.</p>
            <p className="mb-4">
              You can opt out of receiving SMS messages at any time by replying STOP to a message from
              us. After you send STOP, we may send a confirmation message and will no longer send SMS
              messages to that number unless you subsequently provide consent to receive them again.
            </p>
            <p className="mb-4">
              For assistance with SMS messaging, reply HELP to a message from us or contact us using the
              information provided below.
            </p>
            <p>
              Providing consent to receive marketing text messages is not a condition of purchasing
              goods or services from Clips Lawn Care.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Sharing of Information</h2>
            <p className="mb-4">
              We may share personal information with trusted service providers and business partners
              when reasonably necessary to operate our business and provide services to you. Examples
              may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processors</li>
              <li>Scheduling and customer management platforms</li>
              <li>Website and hosting providers</li>
              <li>Communication and messaging providers</li>
              <li>Accounting and administrative service providers</li>
              <li>Other vendors that provide services necessary to operate our business</li>
            </ul>
            <p className="mt-4">
              These providers may only receive information reasonably necessary for them to perform
              services on our behalf.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Mobile Information</h2>
            <p className="mb-4">
              No mobile information will be shared with third parties or affiliates for marketing or
              promotional purposes.
            </p>
            <p className="mb-4">
              All categories of data described above exclude text messaging originator opt-in data and
              consent; this information will not be shared with third parties or affiliates for
              marketing or promotional purposes.
            </p>
            <p>
              We may disclose information when required by law, legal process, court order, or
              governmental request, or when reasonably necessary to protect our rights, property,
              customers, employees, or business.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Payment Information</h2>
            <p className="mb-4">
              When you make a payment, your payment information may be processed through third-party
              payment processors. Clips Lawn Care does not necessarily directly store complete credit
              card or bank account information.
            </p>
            <p>
              Payment processors may collect and process payment information according to their own
              privacy policies and terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies and Website Technologies</h2>
            <p className="mb-4">
              Our website may use cookies, analytics tools, pixels, or similar technologies to help us
              understand website traffic, improve website functionality, and improve our services.
            </p>
            <p>You may be able to control cookies through your browser settings.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="mb-4">
              We take reasonable administrative, technical, and organizational measures designed to
              protect personal information against unauthorized access, disclosure, alteration, or
              destruction.
            </p>
            <p>
              However, no method of transmitting or storing information electronically can be
              guaranteed to be completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">How Long We Keep Information</h2>
            <p>
              We may retain personal information for as long as reasonably necessary to provide
              services, maintain business and financial records, resolve disputes, enforce agreements,
              comply with legal obligations, and otherwise operate our business.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Your Choices and Rights</h2>
            <p className="mb-4">
              Depending on applicable law, you may have rights concerning your personal information,
              including the ability to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to certain personal information we maintain about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of certain information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for certain communications</li>
            </ul>
            <p className="mt-4">To make a privacy-related request, contact us using the information below.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed toward children under the age of 13. We do not
              knowingly collect personal information from children under 13.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Websites</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites or services. Clips Lawn Care is not
              responsible for the privacy practices or content of third-party websites.
            </p>
            <p>We encourage you to review the privacy policies of any third-party websites you visit.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. When we make changes, we will update
              the &quot;Last Updated&quot; date at the top of this policy.
            </p>
            <p>
              Your continued use of our website or services after an updated Privacy Policy is posted
              constitutes acceptance of the updated policy to the extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or how Clips Lawn Care handles your
              information, contact us:
            </p>
            <p>
              Clips Lawn Care LLC
              <br />
              Bend, Oregon
              <br />
              Email:{" "}
              <a href="mailto:clipslawncarebend@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">
                clipslawncarebend@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:5413058500" className="text-green-400 hover:text-green-300 transition-colors">
                (541) 305-8500
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
