import IntroSection from "@/components/pages/common/IntroSection";
import FAQSection from "@/components/pages/common/FAQSection";
import { contactMeInfo } from "@/data/info";

export default function ContactMe() {
  return (
    <main className="space-y-32 mb-16 mt-16">
      <IntroSection intro={contactMeInfo} />
      <FAQSection />
    </main>
  );
}
