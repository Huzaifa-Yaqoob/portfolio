import Reveal from "../../animations/Reveal";
import SubHeading from "../../common/SubHeading";
import { toolsAndTechnologiesHeader } from "@/data/headingData";
import { toolsAndTechnologies } from "@/data/toolsAndTechnologyData";
import GlowingButton from "@/components/common/GlowingButton";

export default function ToolsAndTechnology() {
  return (
    <section className="my-container space-y-8">
      <SubHeading header={toolsAndTechnologiesHeader} />
      <div className="space-y-4">
        <div className="flex gap-4 flex-wrap">
          {toolsAndTechnologies.map((t, index) => (
            <Reveal
              delay={0.5 + index}
              key={index}
              classes="p-4 bg-peachShades-p96 rounded-lg flex flex-grow items-center gap-2 max-w-xs"
            >
              <GlowingButton Icon={t.icon} color={t.color} />
              <span>{t.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
