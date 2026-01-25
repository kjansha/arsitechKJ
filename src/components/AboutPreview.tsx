"use client";

import Link from "next/link";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import AnimatedSection from "./AnimatedSection";

const credentials = [
  "Full-Stack Software Development",
  "Microsoft 365 & Cloud Infrastructure Expert",
  "HIPAA Compliance Specialist",
  "Minnesota-Based, Serving Businesses Nationwide",
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-off-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-float delay-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar placeholder */}
          <AnimatedSection animation="fade-right" className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 aspect-square max-w-md mx-auto flex items-center justify-center relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />

              {/* Animated blobs */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-blob" />
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-blob delay-300" />

              <div className="text-center relative z-10">
                <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center border-4 border-white/20 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <span className="text-5xl font-bold text-white">ATG</span>
                </div>
                <p className="text-white/70 text-sm">Arsi Technology Group</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-left" delay={200} className="order-1 lg:order-2">
            <span className="inline-block text-accent font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Your Technology Partner
            </h2>
            <p className="text-lg text-text-dark leading-relaxed mb-6">
              Arsi Technology Group was founded to help businesses navigate the complex world of technology. We saw too many companies struggling with outdated systems, security concerns, and compliance requirements — often paying too much for solutions that didn&apos;t fit their needs.
            </p>
            <p className="text-lg text-text-dark leading-relaxed mb-8">
              Our mission is simple: provide accessible, expert technology solutions that help businesses thrive. From custom software development to IT infrastructure to HIPAA compliance, we&apos;re your complete technology partner.
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-8">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-center group">
                  <CheckBadgeIcon className="w-6 h-6 text-accent mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-text-dark group-hover:text-accent transition-colors">{credential}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors group"
            >
              Learn More About Us
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
