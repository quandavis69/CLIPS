import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Clips Lawncare",
  description: "The terms and conditions that govern your use of the Clips Lawn Care LLC website and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Terms of Service</h1>
          <p className="text-green-100">
            Effective Date: August 31, 2026 &nbsp;•&nbsp; Last Updated: August 31, 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 space-y-10">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the Clips Lawn Care LLC
            website and your purchase or use of services provided by Clips Lawn Care LLC (&quot;Clips
            Lawn Care,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>
          <p>
            By using our website, requesting a quote, scheduling services, communicating with us, or
            purchasing our services, you agree to these Terms.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
            <p className="mb-4">
              Clips Lawn Care provides lawn care, landscaping, maintenance, cleanup, installation, and
              related outdoor property services.
            </p>
            <p>
              Specific services, pricing, scope of work, scheduling, and other project details may be
              established through an individual estimate, proposal, service agreement, invoice, or other
              written communication.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Estimates and Pricing</h2>
            <p className="mb-4">
              Quotes and estimates are based on the information available to Clips Lawn Care at the time
              the estimate is prepared.
            </p>
            <p className="mb-4">
              Additional work requested by the customer or work reasonably necessary because of
              conditions not apparent during the initial estimate may result in additional charges.
            </p>
            <p>Unless otherwise stated in a written agreement, estimates are not guarantees of final pricing.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Scheduling and Access</h2>
            <p className="mb-4">
              Customers are responsible for providing reasonable access to the property when services
              are scheduled.
            </p>
            <p className="mb-4">
              Customers should remove or secure items that could interfere with our employees or
              equipment, including toys, hoses, pet waste, personal property, and other objects.
            </p>
            <p>
              Clips Lawn Care may charge additional fees when conditions at a property materially
              interfere with the scheduled work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Weather and Other Conditions</h2>
            <p className="mb-4">
              Lawn care and landscaping services may be affected by weather, soil conditions, irrigation
              issues, property conditions, equipment availability, safety concerns, or other
              circumstances outside our reasonable control.
            </p>
            <p>
              Clips Lawn Care may reschedule services when necessary to protect employees, customers,
              property, or equipment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Customer Responsibilities</h2>
            <p className="mb-4">
              Customers are responsible for providing accurate information regarding their property and
              requested services.
            </p>
            <p>
              Customers must notify Clips Lawn Care of known hazards or conditions that could affect the
              safety of employees or equipment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Payments</h2>
            <p className="mb-4">
              Customers agree to pay invoices according to the payment terms provided on their invoice,
              estimate, service agreement, or other written agreement.
            </p>
            <p>
              Past-due balances may be subject to applicable late fees, administrative fees, collection
              costs, or other charges disclosed to the customer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Cancellations and Service Changes</h2>
            <p className="mb-4">Cancellation and rescheduling policies may vary depending on the service or agreement.</p>
            <p>
              Where a customer has entered into a recurring service agreement, the cancellation
              requirements contained in that agreement will apply.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Property Damage and Pre-Existing Conditions</h2>
            <p className="mb-4">Clips Lawn Care will take reasonable care when performing services.</p>
            <p className="mb-4">
              Customers acknowledge that landscaping and lawn care work may involve risks associated
              with underground utilities, irrigation systems, drainage systems, fragile landscaping,
              existing property conditions, hidden objects, or other conditions that may not be visible
              before work begins.
            </p>
            <p>
              Customers are responsible for identifying and disclosing known underground or hidden
              systems when applicable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Website Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use our website for unlawful purposes</li>
              <li>Attempt to interfere with the operation or security of our website</li>
              <li>Submit false or misleading information</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Copy or misuse our website content without permission</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Communications and SMS/Text Messaging</h2>
            <p className="mb-4">
              Clips Lawn Care may communicate with customers by telephone, email, and SMS/text message.
            </p>
            <p className="mb-4">Our SMS messaging program may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointment confirmations</li>
              <li>Appointment reminders</li>
              <li>Scheduling communications</li>
              <li>Estimate and quote updates</li>
              <li>Service notifications</li>
              <li>Customer support</li>
              <li>Invoice and payment-related communications</li>
              <li>Other messages related to services requested by the customer</li>
              <li>Promotional or marketing messages when the customer has provided the appropriate consent</li>
            </ul>
            <p className="mt-4 mb-4">Message frequency varies.</p>
            <p className="mb-4">Message and data rates may apply.</p>
            <p className="mb-4">You may opt out of SMS messages at any time by replying STOP to any message from Clips Lawn Care.</p>
            <p className="mb-4">For assistance, reply HELP or contact Clips Lawn Care using the contact information below.</p>
            <p>Consent to receive marketing text messages is not required to purchase services from Clips Lawn Care.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">SMS Consent</h2>
            <p className="mb-4">
              By voluntarily providing your mobile phone number and consenting to receive text messages,
              you authorize Clips Lawn Care to send SMS messages to that number for the purposes
              described above.
            </p>
            <p className="mb-4">You understand that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consent is not a condition of purchasing services.</li>
              <li>Message frequency varies.</li>
              <li>Message and data rates may apply.</li>
              <li>You can opt out at any time by replying STOP.</li>
              <li>You can request assistance by replying HELP.</li>
            </ul>
            <p className="mt-4">
              Your mobile information and SMS opt-in/consent information will not be shared with third
              parties or affiliates for their own marketing or promotional purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
            <p className="mb-4">
              Your use of our website and services is also subject to our Privacy Policy, which explains
              how Clips Lawn Care collects, uses, stores, and protects personal information.
            </p>
            <p>
              Privacy Policy:{" "}
              <a href="/privacy-policy" className="text-green-400 hover:text-green-300 transition-colors">
                https://clipslawncare.com/privacy-policy
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="mb-4">
              The content on our website, including text, graphics, logos, photographs, branding, and
              other materials, is owned by or licensed to Clips Lawn Care unless otherwise stated.
            </p>
            <p>
              You may not reproduce, distribute, modify, or commercially exploit our website content
              without our prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="mb-4">
              Clips Lawn Care may use third-party services for scheduling, customer management, payment
              processing, communications, website hosting, analytics, and other business functions.
            </p>
            <p>
              Your use of those third-party services may also be subject to their respective terms and
              privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by applicable law, Clips Lawn Care will not be responsible
              for indirect, incidental, special, consequential, or punitive damages arising from the use
              of our website or services.
            </p>
            <p>
              Nothing in these Terms is intended to exclude or limit liability that cannot legally be
              excluded or limited under applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to These Terms</h2>
            <p className="mb-4">Clips Lawn Care may update these Terms from time to time.</p>
            <p>
              When changes are made, the updated version will be posted on our website with a revised
              &quot;Last Updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
            <p>
              These Terms will be governed by the laws of the State of Oregon, except to the extent
              otherwise required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
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
