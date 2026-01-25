import { Metadata } from "next";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Arsi Technology Group",
  description: "Get in touch with Arsi Technology Group. Schedule a free consultation for software development, IT consulting, or HIPAA compliance services.",
};

const expectations = [
  "We'll respond within 24 hours",
  "Schedule a free discovery call",
  "We'll assess your technology needs",
  "You'll receive a customized proposal",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-[70px] bg-primary bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Talk Technology
            </h1>
            <p className="text-xl text-gray-300">
              Schedule a free consultation or send us a message
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">Get In Touch</h2>
              <p className="text-text-light mb-8">
                Tell us about your business and technology needs. We&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="text-2xl font-bold text-primary mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary">Email</h3>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-accent hover:text-accent-dark transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary">Phone</h3>
                    <a
                      href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                      className="text-accent hover:text-accent-dark transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary">Location</h3>
                    <p className="text-text-light">{COMPANY.location}</p>
                    <p className="text-text-muted text-sm">(Serving nationwide)</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-10 bg-off-white rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <ClockIcon className="h-6 w-6 text-accent mr-3" />
                  <h3 className="font-semibold text-primary">Business Hours</h3>
                </div>
                <div className="space-y-2 text-text-dark">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="font-medium">By appointment</span>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-primary mb-4">What happens next?</h3>
                <ul className="space-y-3">
                  {expectations.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-text-dark">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-text-light text-sm italic">
                  No pressure, no obligation — just an honest assessment of your technology needs.
                </p>
              </div>

              {/* LinkedIn */}
              <div className="mt-8">
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent-dark transition-colors font-medium"
                >
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
