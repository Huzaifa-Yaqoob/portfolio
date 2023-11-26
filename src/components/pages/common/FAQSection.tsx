// This section is common in home page and contact page

import { HiStar } from "react-icons/hi";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import { FAQHeader } from "@/data/headingData";
import SubHeading from "../../common/SubHeading";
import { faqData } from "@/data/faqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GlowingButton from "@/components/common/GlowingButton";
import { Button } from "@/components/ui/button";

export default function FAQSection() {
  return (
    <section className="my-container space-y-8">
      <SubHeading header={FAQHeader} />
      <Reveal classes="space-y-4 md:space-y-0 md:grid md:grid-flow-row grid-cols-3 md:gap-4">
        <div className="md:col-span-2">
          <Accordion
            type="single"
            defaultValue="item-0"
            collapsible
            className="bg-peachShades-p96 rounded p-4 space-y-4"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={"item-" + index}
                className="bg-peachShades-p92 px-2 rounded border-none"
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Reveal classes="flex flex-col gap-4 items-center md:items-start bg-peachShades-p96 rounded p-8 h-fit">
          <GlowingButton Icon={HiStar} size="text-4xl" />
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-greyShades-g20 font-semibold text-2xl">
              Still have any Questions ?
            </h2>
            <p>
              Let's collaborate to create an exceptional website that sets you
              apart from the competition. Contact me today to discuss your web
              design needs and bring your digital vision to life!
            </p>
          </div>
          <Button asChild>
            <Link href="/contact-me">Contact Me</Link>
          </Button>
        </Reveal>
      </Reveal>
    </section>
  );
}
