import { Metadata } from "next";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import CTASection from "@/components/CTASection";
import { ABOUT_VALUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Arsi Technology Group",
  description: "Learn about Arsi Technology Group. Minnesota-based technology consulting, software development, and HIPAA compliance services for businesses.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-[70px] bg-primary bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Arsi Technology Group
            </h1>
            <p className="text-xl text-gray-300">
              Your Complete Technology Partner
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div>
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 aspect-square max-w-md mx-auto flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="text-center relative z-10">
                  <div className="w-40 h-40 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center border-4 border-white/20">
                    <span className="text-6xl font-bold text-white">ATG</span>
                  </div>
                  <p className="text-white/70 text-sm">Arsi Technology Group</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-accent font-medium mb-2">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Built to Solve Real Business Problems
              </h2>

              <div className="prose prose-lg text-text-dark">
                <p className="text-lg leading-relaxed mb-6">
                  Arsi Technology Group was founded to help businesses navigate the complex world of technology. We saw too many companies struggling with outdated systems, security concerns, and compliance requirements — often paying too much for solutions that didn&apos;t fit their needs.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  With expertise in software development, cloud infrastructure, and security compliance, we provide comprehensive technology solutions that actually make sense for businesses of all sizes.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Our mission is simple: make expert technology accessible, understandable, and achievable for every business — from startups to established companies, including specialized HIPAA compliance for healthcare practices.
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckBadgeIcon className="w-6 h-6 text-accent mr-3" />
                  <span className="text-text-dark">Full-Stack Software Development</span>
                </div>
                <div className="flex items-center">
                  <CheckBadgeIcon className="w-6 h-6 text-accent mr-3" />
                  <span className="text-text-dark">Microsoft 365 & Cloud Infrastructure</span>
                </div>
                <div className="flex items-center">
                  <CheckBadgeIcon className="w-6 h-6 text-accent mr-3" />
                  <span className="text-text-dark">HIPAA Compliance Specialists</span>
                </div>
                <div className="flex items-center">
                  <CheckBadgeIcon className="w-6 h-6 text-accent mr-3" />
                  <span className="text-text-dark">Minnesota-Based, Serving Nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why "Arsi" */}
      <section className="py-16 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-6">Why &quot;Arsi&quot;?</h2>
          <p className="text-lg text-text-dark leading-relaxed">
            The name &quot;Arsi&quot; comes from the Arsi region of Ethiopia — a nod to our heritage and the values of community, trust, and dedication that we bring to every client relationship. Just as the Arsi region is known for its resilience and strength, Arsi Technology Group is built to be your steadfast technology partner.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ABOUT_VALUES.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-text-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Software Development</h3>
              <p className="text-text-light text-sm">Custom web applications, automation tools, and integrations tailored to your business needs.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">IT Consulting</h3>
              <p className="text-text-light text-sm">Complete IT infrastructure management, Microsoft 365, cloud services, and technical support.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">HIPAA Compliance</h3>
              <p className="text-text-light text-sm">Comprehensive HIPAA compliance solutions for healthcare practices — compliant in just 4 days.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Security Services</h3>
              <p className="text-text-light text-sm">Security assessments, compliance consulting, and ongoing protection for your business data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Let's Build Something Great Together"
        subtext="Ready to see how we can help your business grow with the right technology solutions?"
        buttonText="Contact Us"
      />
    </>
  );
}
