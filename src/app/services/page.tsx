import { Metadata } from "next";
import Link from "next/link";
import { CodeBracketIcon, ServerStackIcon, ShieldCheckIcon, LockClosedIcon, CheckIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import CTASection from "@/components/CTASection";
import { HIPAA_PACKAGE_DETAILS, COMPARISON_TABLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Technology & Consulting Services | Arsi Technology Group",
  description: "Complete technology solutions for businesses. Custom software development, IT consulting, HIPAA compliance, and security services.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-[70px] bg-primary bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology & Consulting Services
            </h1>
            <p className="text-xl text-gray-300">
              Complete solutions for your business — from custom software to IT infrastructure and compliance
            </p>
          </div>
        </div>
      </section>

      {/* Software Development */}
      <section id="software-development" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CodeBracketIcon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-accent font-medium">Custom Solutions</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Software Development
              </h2>

              <p className="text-lg text-text-dark mb-8">
                We build custom software solutions that solve your unique business challenges. From web applications to internal tools and integrations, our development team delivers solutions that drive real results.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Discuss Your Project
              </Link>
            </div>

            {/* What's Included */}
            <div className="bg-off-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-primary mb-6">What We Build</h3>
              <ul className="space-y-3">
                {[
                  "Custom Web Applications",
                  "Business Process Automation",
                  "API Development & Integration",
                  "Database Design & Management",
                  "Mobile-Responsive Solutions",
                  "E-commerce Platforms",
                  "Client Portals & Dashboards",
                  "Ongoing Maintenance & Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IT Consulting & Infrastructure */}
      <section id="it-consulting" className="py-20 bg-off-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* What's Included */}
            <div className="bg-white rounded-2xl p-8 order-2 lg:order-1">
              <h3 className="text-xl font-semibold text-primary mb-6">Services Include</h3>
              <ul className="space-y-3">
                {[
                  "Microsoft 365 Administration",
                  "Cloud Infrastructure Setup (Azure, AWS)",
                  "Network Design & Security",
                  "Hardware & Software Procurement",
                  "Help Desk & Technical Support",
                  "Backup & Disaster Recovery",
                  "Email Migration & Configuration",
                  "Remote Work Solutions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <ServerStackIcon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-accent font-medium">Infrastructure & Support</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                IT Consulting & Infrastructure
              </h2>

              <p className="text-lg text-text-dark mb-8">
                We serve as your complete IT department — managing your technology infrastructure so you can focus on running your business. From Microsoft 365 to cloud infrastructure, we handle it all.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Get IT Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance - Primary Service */}
      <section id="hipaa-compliance" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-highlight text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Featured Service
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-accent font-medium">Healthcare Compliance</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {HIPAA_PACKAGE_DETAILS.title}
              </h2>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-primary">
                  {HIPAA_PACKAGE_DETAILS.price}
                </span>
                <span className="text-text-light">({HIPAA_PACKAGE_DETAILS.priceNote})</span>
              </div>

              <div className="inline-block bg-highlight/10 text-highlight px-4 py-2 rounded-lg font-medium mb-8">
                Timeline: {HIPAA_PACKAGE_DETAILS.timeline}
              </div>

              <p className="text-lg text-text-dark mb-8">
                Everything you need for complete HIPAA compliance, delivered in just 4 business days. We specialize in helping healthcare practices navigate complex compliance requirements.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Get HIPAA Compliant
              </Link>
            </div>

            {/* What's Included */}
            <div className="bg-off-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-primary mb-6">What&apos;s Included</h3>
              <ul className="space-y-3">
                {HIPAA_PACKAGE_DETAILS.includes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Who It's For */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center">Who It&apos;s For</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {HIPAA_PACKAGE_DETAILS.targetAudience.map((audience, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-6 py-3 bg-off-white rounded-full text-text-dark font-medium"
                >
                  <CheckCircleIcon className="w-5 h-5 text-accent mr-2" />
                  {audience}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security-compliance" className="py-20 bg-off-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <LockClosedIcon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-accent font-medium">Protection & Compliance</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Security & Compliance
              </h2>

              <p className="text-lg text-text-dark mb-8">
                Protect your business and customer data with comprehensive security assessments, compliance consulting, and ongoing monitoring. We help you meet regulatory requirements and defend against threats.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Secure Your Business
              </Link>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-primary mb-6">Services Include</h3>
              <ul className="space-y-3">
                {[
                  "Security Assessments & Audits",
                  "Compliance Consulting (SOC 2, PCI-DSS)",
                  "Vulnerability Scanning & Penetration Testing",
                  "Security Policy Development",
                  "Incident Response Planning",
                  "Employee Security Training",
                  "Ongoing Security Monitoring",
                  "Regulatory Compliance Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Why Choose Arsi Technology Group?
          </h2>
          <p className="text-lg text-text-light text-center mb-12">
            See how we compare to generic IT companies
          </p>

          <div className="bg-off-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  {COMPARISON_TABLE.headers.map((header, index) => (
                    <th
                      key={index}
                      className={`px-6 py-4 text-left font-semibold ${
                        index === 0 ? "w-1/3" : ""
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-white" : "bg-off-white"}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`px-6 py-4 ${
                          cellIndex === 0
                            ? "font-medium text-primary"
                            : cellIndex === 1
                            ? "text-text-light"
                            : "text-accent font-medium"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Not Sure What You Need?"
        subtext="Book a free consultation and we'll help you find the right solution for your business."
        buttonText="Schedule Consultation"
      />
    </>
  );
}
