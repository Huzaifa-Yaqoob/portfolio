import HeroSection from "@/components/pages/home/HeroSection";
import SkillsSection from "@/components/pages/home/SkillsSection";
import ToolsAndTechnology from "@/components/pages/home/ToolsAndTechnology";
import FAQSection from "@/components/pages/common/FAQSection";

export default function Home() {
  return (
    <main className="space-y-32 mb-16">
      <HeroSection />
      <SkillsSection />
      <ToolsAndTechnology />
      <FAQSection />
    </main>
  );
}
