import WorksCarousal from "@/components/common/carousals/WorksCarousal";
import { Separator } from "@/components/ui/separator";
import { worksCarousalData } from "@/data/worksData";
import Carousal from "@/components/common/carousals/Carousal";
import ImagesCarousal from "@/components/common/carousals/ImagesCarousal";

export default function LWorksSection() {
  return (
    <div className="md:space-y-16 hidden md:block">
      {/* <ImagesCarousal
        images={worksCarousalData.works2021.carousalData[0].images}
      /> */}
      <Carousal
        slideCount={worksCarousalData.works2023.carousalData.length}
        title={worksCarousalData.works2023.title}
      >
        {worksCarousalData.works2023.carousalData.map((work, index) => (
          <ImagesCarousal
            key={index}
            images={worksCarousalData.works2021.carousalData[0].images}
          />
        ))}
      </Carousal>
      {/* <Carousal
        slideCount={worksCarousalData.works2022.carousalData.length}
        title={worksCarousalData.works2022.title}
      >
        {worksCarousalData.works2022.carousalData.map((work, index) => (
          <div
            key={index}
            className="bg-peachShades-p96 rounded w-full p-4 space-y-4"
          >
            <h3 className="font-semibold text-greyShades-g20">{work.title}</h3>
            <ImagesCarousal images={work.images} />
          </div>
        ))}
      </Carousal>
      <Carousal
        slideCount={worksCarousalData.works2021.carousalData.length}
        title={worksCarousalData.works2021.title}
      >
        {worksCarousalData.works2021.carousalData.map((work, index) => (
          <div
            key={index}
            className="bg-peachShades-p96 rounded w-full p-4 space-y-4"
          >
            <h3 className="font-semibold text-greyShades-g20">{work.title}</h3>
            <ImagesCarousal images={work.images} />
          </div>
        ))}
      </Carousal> */}
    </div>
  );
}
