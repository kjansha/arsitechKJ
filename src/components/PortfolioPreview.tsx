"use client";

import Link from "next/link";
import { HeartIcon, AcademicCapIcon, HomeModernIcon, TruckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

const clients = [
  {
    name: "CareConnect Live",
    industry: "Healthcare",
    icon: HeartIcon,
  },
  {
    name: "SaveYours",
    industry: "CPR Training",
    icon: AcademicCapIcon,
  },
  {
    name: "Entrusted Home Healthcare",
    industry: "Home Healthcare",
    icon: HomeModernIcon,
  },
  {
    name: "Rift Valley Transportation",
    industry: "Transportation",
    icon: TruckIcon,
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted By Minnesota Businesses
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From healthcare platforms to business technology solutions, we deliver results
          </p>
        </AnimatedSection>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {clients.map((client, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 text-center group">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <client.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-400">{client.industry}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={400} className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-accent font-semibold hover:text-cyan transition-colors group"
          >
            View Our Work
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
