import Reveal from "../../animations/Reveal";
import { worksHeader } from "@/data/headingData";
import SubHeading from "../../common/SubHeading";
import ButtonWithArrow from "../../common/ButtonWithArrow";
import SWorksSection from "./addons/SWorksSection";
import { carousalData } from "@/data/carousalData";
import WorksCarousal from "@/components/common/carousals/WorksCarousal";

export default function MyWorksSection() {
  return (
    <section className="my-container space-y-8">
      <SubHeading header={worksHeader} />
      <Reveal classes="">
        <WorksCarousal carousalData={carousalData} />
        <SWorksSection carousalData={carousalData} />
      </Reveal>
      <Reveal classes="flex justify-center items-center">
        <ButtonWithArrow variant={"default"} text="View All Projects " />
      </Reveal>
    </section>
  );
}
