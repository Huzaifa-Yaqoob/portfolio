import type { Metadata } from "next";
import { contactMeInfo } from "@/data/info";
import IntroSection from "@/components/pages/common/IntroSection";
import FAQSection from "@/components/pages/common/FAQSection";
import ContactSection from "@/components/pages/contact/ContactSection";

export const metadata: Metadata = {
  title: "Let`s Connect 🤝",
  description:
    "Ready to collaborate or have a project in mind? Let`s connect and turn your ideas into reality. Drop me a message, and I`ll get back to you soon!",
  keywords:
    "Contact, Collaboration, Developer, MERN Stack, Muhammad Huzaifa Yaqoob",
};

export default function ContactMe() {
  return (
    <main className="space-y-32 mb-16 mt-16">
      <IntroSection intro={contactMeInfo} />
      <ContactSection />
      <FAQSection />
    </main>
  );
}
