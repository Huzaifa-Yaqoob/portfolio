import { Github } from "lucide-react";
import { CarousalData } from "@/data/carousalData";
import ImagesCarousal from "@/components/common/carousals/ImagesCarousal";

interface SWorksSectionProps {
  carousalData: CarousalData[];
}

export default function SWorksSection({ carousalData }: SWorksSectionProps) {
  return (
    <div className="md:grid md:grid-cols-3 md:grid-rows-1 gap-4 space-y-4 md:space-y-0">
      {carousalData.map((images, index) => (
        <div
          key={index}
          className="bg-peachShades-p96 rounded w-full p-4 space-y-4"
        >
          <main>
            <h3 className="font-semibold text-greyShades-g20 text-lg flex gap-1 items-center">
              {images.title}{" "}
              <a
                href={images.gitLink}
                target="_blank"
                className="hover:text-primary"
              >
                <Github size={18} />
              </a>
            </h3>
            <p className="">{images.description}</p>
          </main>
          <ImagesCarousal images={images.images} />
        </div>
      ))}
    </div>
  );
}
