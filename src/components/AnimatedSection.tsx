"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "none";
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return "opacity-0 translate-y-8";
        case "fade-down":
          return "opacity-0 -translate-y-8";
        case "fade-left":
          return "opacity-0 translate-x-8";
        case "fade-right":
          return "opacity-0 -translate-x-8";
        case "scale":
          return "opacity-0 scale-95";
        case "none":
          return "";
        default:
          return "opacity-0 translate-y-8";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100";
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
