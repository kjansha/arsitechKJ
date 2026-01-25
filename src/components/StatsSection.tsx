"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "50+", suffix: "", label: "Projects Delivered" },
  { value: "100", suffix: "%", label: "Client Satisfaction" },
  { value: "24/7", suffix: "", label: "Support Available" },
  { value: "4", suffix: " Days", label: "HIPAA Compliance" },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-primary bg-grid-pattern relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-95" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 stat-number">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
