import { Metadata } from "next";
import { portfolioInfo } from "@/data/info";
import IntroSection from "@/components/pages/common/IntroSection";
import WorksSection from "@/components/pages/portfolio/WorksSection";

export const metadata: Metadata = {
  title: "Explore My Work 🌟",
  description:
    "Explore a showcase of my projects, where design meets functionality. From pixel-perfect designs to robust web applications, discover the work that defines me as a developer",
  keywords:
    "Portfolio, Projects, MERN Stack, Next.js Developer, Muhammad Huzaifa Yaqoob",
};

export default function Portfolio() {
  return (
    <main className="space-y-32 mb-16 mt-16">
      <IntroSection intro={portfolioInfo} />
      <WorksSection />
    </main>
  );
}
