import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProcessSection from "@/components/ProcessSection";
import ToolsSection from "@/components/ToolsSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <CaseStudiesSection />
      <ProcessSection />
      <ToolsSection />
      <LeadCaptureSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </div>
  );
}