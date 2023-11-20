import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import MyWorksSection from "@/components/home/MyWorksSection";
import ReviewSection from "@/components/home/ReviewSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <main className="space-y-32">
      <HeroSection />
      <SkillsSection />
      <BenefitsSection />
      <MyWorksSection />
      <ReviewSection />
      <FAQSection />
    </main>
  );
}
