import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import BenefitsSection from "@/components/home/BenefitsSection";

export default function Home() {
  return (
    <main className="space-y-32">
      <HeroSection />
      <SkillsSection />
      <BenefitsSection />
    </main>
  );
}
