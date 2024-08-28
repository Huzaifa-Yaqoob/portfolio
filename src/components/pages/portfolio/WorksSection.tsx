import Reveal from "../../animations/Reveal";
import { worksHeader } from "@/data/headingData";
import SubHeading from "../../common/SubHeading";
import SWorksSection from "./addons/SWorksSection";
import { carousalData } from "@/data/carousalData";

export default function MyWorksSection() {
  return (
    <section className="my-container space-y-8">
      <SubHeading header={worksHeader} />
      <Reveal classes="">
        <SWorksSection carousalData={carousalData} />
      </Reveal>
    </section>
  );
}
