import Image from "next/image";
import BookACallButton from "../common/BookACallButton";
import ButtonWithArrow from "../common/ButtonWithArrow";
import { AspectRatio } from "../ui/aspect-ratio";

const achievementInfo = [
  {
    id: "projects",
    quantity: "55",
    title: "Completed Projects",
  },
  {
    id: "customers",
    quantity: "20",
    title: "Happy Customers",
  },
  {
    id: "experience",
    quantity: "08",
    title: "Years of Experience",
  },
];

export default function HeroSection() {
  return (
    <section className="hero-container md:grid md:grid-rows-1 md:grid-flow-row md:grid-cols-3">
      <div className="md:order-2">
        <AspectRatio
          ratio={120 / 163}
          className="p-0 m-0 flex items-end bg-hero-pattern bg-cover bg-center bg-no-repeat heroImageMask"
        >
          <Image
            src="/assets/person.png"
            alt="person"
            width={500}
            height={500}
            className="object-contain saturate-0"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col gap-8 md:col-span-2 py-6 md:py-12 md:order-1">
        <div className="flex flex-col gap-8 text-center md:text-left">
          <div className="bg-peachShades-p95 py-1 px-2 rounded w-fit m-auto md:m-0">
            Hello There 🤗
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl font-semibold text-greyShades-g10">
              Jeffery Cannon Welcome's You!
            </h1>
            <p className="md:mr-8">
              I am a passionate and experienced web designer, dedicated to
              creating visually stunning and highly functional websites. Explore
              my portfolio to see the power of effective design in action
            </p>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <BookACallButton />
            <ButtonWithArrow />
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 md:rounded-tl-lg md:rounded-bl-lg gap-2 md:gap-0">
          {achievementInfo.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`py-4 bg-peachShades-p96 rounded-lg md:rounded-none flex items-center justify-center ${
                index === 0 ? "col-span-2 md:col-auto" : ""
              }`}
            >
              <div className="flex flex-col gap-2 items-center md:items-start">
                <span className="text-5xl font-bold">
                  {achievement.quantity}
                  <span className="text-primary">+</span>
                </span>
                <span>{achievement.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
