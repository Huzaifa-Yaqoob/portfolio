import { worksCarousalData } from "@/data/worksData";
import Carousal from "@/components/common/carousals/Carousal";
import ImagesCarousal from "@/components/common/carousals/ImagesCarousal";
import Reveal from "@/components/animations/Reveal";

export default function LWorksSection() {
  return (
    <div className="space-y-16 md:space-y-24 hidden md:block">
      <Reveal classes="">
        <Carousal
          carousalName="works"
          slideCount={worksCarousalData.works2023.carousalData.length}
          title={worksCarousalData.works2023.title}
        >
          {worksCarousalData.works2023.carousalData.map((work, index) => (
            <div key={index} className="block p-2">
              <ImagesCarousal images={work.images} />
            </div>
          ))}
        </Carousal>
      </Reveal>
      <Reveal classes="">
        <Carousal
          carousalName="works"
          slideCount={worksCarousalData.works2022.carousalData.length}
          title={worksCarousalData.works2022.title}
        >
          {worksCarousalData.works2022.carousalData.map((work, index) => (
            <div key={index} className="block p-2">
              <ImagesCarousal images={work.images} />
            </div>
          ))}
        </Carousal>
      </Reveal>
      <Reveal classes="">
        <Carousal
          carousalName="works"
          slideCount={worksCarousalData.works2021.carousalData.length}
          title={worksCarousalData.works2021.title}
        >
          {worksCarousalData.works2021.carousalData.map((work, index) => (
            <div key={index} className="block p-2">
              <ImagesCarousal images={work.images} />
            </div>
          ))}
        </Carousal>
      </Reveal>
    </div>
  );
}
