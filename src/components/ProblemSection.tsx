"use client";

import { ClockIcon, WrenchScrewdriverIcon, ShieldExclamationIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

const painPoints = [
  {
    icon: ClockIcon,
    title: "Technology Slowing You Down",
    description: "Outdated systems, manual processes, and disconnected tools are costing you time, money, and opportunities.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "No Dedicated IT Team",
    description: "You're running a business, not an IT department. Managing servers, software, and tech issues shouldn't be your job.",
  },
  {
    icon: ShieldExclamationIcon,
    title: "Security & Compliance Worries",
    description: "From HIPAA to data protection, staying compliant with regulations is complex and constantly changing.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-off-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float delay-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Warning headline */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-pulse">
            <span className="font-medium">Sound Familiar?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Technology Should Help Your Business,{" "}
            <span className="text-gradient-animate">Not Hold It Back</span>
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Most small businesses struggle with the same technology challenges. You&apos;re not alone.
          </p>
        </AnimatedSection>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <point.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {point.title}
                </h3>
                <p className="text-text-light leading-relaxed">{point.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Transition text */}
        <AnimatedSection animation="scale" delay={450} className="text-center">
          <p className="text-2xl font-semibold text-primary">
            We&apos;re here to change that.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
