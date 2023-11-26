import ContactForm from "./addons/ContactForm";
import MyContacts from "./addons/MyContacts";
import Reveal from "@/components/animations/Reveal";

export default function ContactSection() {
  return (
    <section className="my-container space-y-8 md:space-y-0 md:flex md:flex-row-reverse md:gap-8">
      <Reveal classes="flex-grow">
        <ContactForm />
      </Reveal>
      <MyContacts />
    </section>
  );
}
