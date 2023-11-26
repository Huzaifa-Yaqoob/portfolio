import { worksCarousalData } from "@/data/worksData";
import ButtonWithArrow from "@/components/common/ButtonWithArrow";
import WorksCarousal from "@/components/common/carousals/WorksCarousal";
import { Separator } from "@/components/ui/separator";

export default function SWorksSection() {
  return (
    <div className="space-y-16 block md:hidden">
      <div className="space-y-8">
        <h3 className="text-center md:text-left">
          {worksCarousalData.works2023.title}
        </h3>
        <Separator />
        <WorksCarousal
          carousalData={worksCarousalData.works2023.carousalData.slice(0, 3)}
        />
        <div className="flex justify-center items-center">
          <ButtonWithArrow text="View All Projects" variant={"default"} />
        </div>
      </div>
      <div className="space-y-8">
        <h3 className="text-center md:text-left">
          {worksCarousalData.works2022.title}
        </h3>
        <Separator />
        <WorksCarousal
          carousalData={worksCarousalData.works2022.carousalData.slice(0, 3)}
        />
        <div className="flex justify-center items-center">
          <ButtonWithArrow text="View All Projects" variant={"default"} />
        </div>
      </div>
      <div className="space-y-8">
        <h3 className="text-center md:text-left">
          {worksCarousalData.works2021.title}
        </h3>
        <Separator />
        <WorksCarousal
          carousalData={worksCarousalData.works2021.carousalData.slice(0, 3)}
        />
        <div className="flex justify-center items-center">
          <ButtonWithArrow text="View All Projects" variant={"default"} />
        </div>
      </div>
    </div>
  );
}
