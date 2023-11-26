import { portfolioInfo } from "@/data/info";
import IntroSection from "@/components/pages/common/IntroSection";
import WorksSection from "@/components/pages/portfolio/WorksSection";

export default function Portfolio() {
  return (
    <main className="space-y-32 mb-16 mt-16">
      <IntroSection intro={portfolioInfo} />
      <WorksSection />
    </main>
  );
}
