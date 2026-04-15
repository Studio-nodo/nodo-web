import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import VisualEffects from "@/components/VisualEffects";

export default function Home() {
  return (
    <main className="relative" style={{ background: "#000000" }}>
      <VisualEffects />
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <TechStackSection />
        <FAQSection />
        <ContactSection />
      </div>
    </main>
  );
}
