import { Metadata } from "next";
import IntroSection from "@/components/pages/about/IntroSection";
import MileStonesSection from "@/components/pages/about/MileStonesSection";

export const metadata: Metadata = {
  title: "All About Me 🤗",
  description:
    "Get to know Muhammad Huzaifa Yaqoob — a passionate developer with a focus on Next.js and the MERN stack. Learn about my journey, skills, and what drives me to create impactful digital experiences",
  keywords: "About, Developer, MERN Stack, Next.js, Muhammad Huzaifa Yaqoob",
};

export default function AboutMe() {
  return (
    <main className="space-y-32 mb-16 mt-16">
      <IntroSection />
      <MileStonesSection />
    </main>
  );
}
