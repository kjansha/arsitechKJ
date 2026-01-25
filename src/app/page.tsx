import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesPreview from "@/components/ServicesPreview";
import ProcessSteps from "@/components/ProcessSteps";
import StatsSection from "@/components/StatsSection";
import WhoWeServe from "@/components/WhoWeServe";
import AboutPreview from "@/components/AboutPreview";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Problem/Pain Section */}
      <ProblemSection />

      {/* Solution/Services Overview */}
      <ServicesPreview />

      {/* Process Steps */}
      <ProcessSteps />

      {/* Stats/Social Proof Section */}
      <StatsSection />

      {/* Who We Serve */}
      <WhoWeServe />

      {/* About Preview */}
      <AboutPreview />

      {/* FAQ Preview */}
      <FAQSection />

      {/* Final CTA Section */}
      <CTASection />
    </>
  );
}
