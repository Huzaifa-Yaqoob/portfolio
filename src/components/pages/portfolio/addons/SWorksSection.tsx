import { CarousalData } from "@/data/carousalData";
import ImagesCarousal from "@/components/common/carousals/ImagesCarousal";

interface SWorksSectionProps {
  carousalData: CarousalData[];
}

export default function SWorksSection({ carousalData }: SWorksSectionProps) {
  return (
    <div className="md:grid md:grid-cols-3 md:grid-rows-1 gap-4">
      {carousalData.map((images, index) => (
        <div
          key={index}
          className="bg-peachShades-p96 rounded w-full p-4 space-y-2"
        >
          <h3 className="font-semibold text-greyShades-g20">{images.title}</h3>
          <ImagesCarousal images={images.images} />
        </div>
      ))}
    </div>
  );
}
