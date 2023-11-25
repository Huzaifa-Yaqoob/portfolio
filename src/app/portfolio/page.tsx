import IntroSection from "@/components/pages/common/IntroSection";
import { portfolioInfo } from "@/data/info";

export default function Portfolio() {
  return (
    <main className="space-y-32 mb-16 mt-16">
      <IntroSection intro={portfolioInfo} />
    </main>
  );
}
