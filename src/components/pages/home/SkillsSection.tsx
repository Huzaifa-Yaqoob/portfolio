import Reveal from "../../animations/Reveal";
import GlowingButton from "../../common/GlowingButton";
import { skillData } from "@/data/skillData";
import SubHeading from "../../common/SubHeading";
import { skillsHeader } from "@/data/headingData";

export default function SkillsSection() {
  return (
    <section className="my-container space-y-8">
      <SubHeading header={skillsHeader} />
      <div className="grid grid-flow-row grid-cols-1 md:grid-flow-row md:grid-cols-3 md:grid-rows-2 gap-4">
        {skillData.map((skill, index) => (
          <Reveal
            key={index}
            delay={0.5 + index / 2}
            classes="text-3xl flex flex-col justify-center items-center p-8 gap-4 bg-peachShades-p96 rounded-lg"
          >
            <GlowingButton Icon={skill.icon} />
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-greyShades-g20">
                {skill.title}
              </h3>
              <p className="text-base">{skill.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
