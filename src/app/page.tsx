import { Suspense } from "react";
import HeroSection from "@/components/pages/home/HeroSection";
import SkillsSection from "@/components/pages/home/SkillsSection";
import BenefitsSection from "@/components/pages/home/BenefitsSection";
import MyWorksSection from "@/components/pages/home/MyWorksSection";
import ReviewSection from "@/components/pages/home/ReviewSection";
import FAQSection from "@/components/pages/common/FAQSection";

export default function Home() {
  return (
    <main className="space-y-32 mb-16">
      <HeroSection />
      <SkillsSection />
      <BenefitsSection />
      <MyWorksSection />
      <ReviewSection />
      <FAQSection />
    </main>
  );
}
