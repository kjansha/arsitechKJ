"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonLink?: string;
  showPhone?: boolean;
}

export default function CTASection({
  headline = "Ready to Solve Your Technology Challenges?",
  subtext = "Schedule a free consultation to discuss how we can help your business grow.",
  buttonText = "Get a Free Consultation",
  buttonLink = "/contact",
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-95" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan/10 rounded-full blur-2xl animate-float-slow delay-300" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-accent/30 rounded-full animate-float-fast" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-highlight/30 rounded-full animate-float delay-200" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection animation="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {headline}
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {subtext}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={buttonLink}
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 btn-glow hover:scale-105"
            >
              {buttonText}
            </Link>

            {showPhone && (
              <span className="text-gray-400">
                Or call us:{" "}
                <a
                  href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                  className="text-white hover:text-accent transition-colors font-medium underline-animate"
                >
                  {COMPANY.phone}
                </a>
              </span>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
