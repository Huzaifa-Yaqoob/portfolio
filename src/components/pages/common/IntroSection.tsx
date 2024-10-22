// This section is common in portfolio page and contact page
import { type Intro } from "@/data/info";
import Reveal from "@/components/animations/Reveal";
import SubHeading from "@/components/common/SubHeading";
import GlowingButton from "@/components/common/GlowingButton";

interface IntroSectionProps {
  intro: Intro;
}

export default function IntroSection({ intro }: IntroSectionProps) {
  return (
    <section className="my-container">
      <div className="flex flex-col justify-center items-center gap-8 bg-peachShades-p96 rounded-lg py-8 md:py-16">
        <Reveal>
          <GlowingButton Icon={intro.MainIcon} size="text-5xl" />
        </Reveal>
        <SubHeading header={intro.header} />
        <div className="flex flex-col md:flex-row gap-4">
          {intro.info.map((inf, index) => (
            <Reveal
              key={index}
              delay={index + 1}
              classes="flex items-center gap-2 p-2 border border-peachShades-p90 rounded space-x-2"
            >
              <inf.icon className="text-primary text-lg" />
              <span>{inf.text}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
