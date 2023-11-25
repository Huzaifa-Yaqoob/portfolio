import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { RevealPersonImage } from "@/components/animations/Reveal";
import Reveal from "@/components/animations/Reveal";
import { achievementInfo } from "@/data/info";

export default function IntroSection() {
  return (
    <section className="my-container md:grid md:grid-rows-1 md:grid-flow-row md:grid-cols-2 md:gap-4">
      <Reveal classes="w-full" delay={0}>
        <AspectRatio
          ratio={615 / 596}
          className="flex items-end bg-hero-pattern bg-cover bg-center bg-no-repeat introImageMask"
        >
          <Image
            src="/assets/person.png"
            alt="person"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            loading="lazy"
            className="object-contain saturate-0 transition-all duration-500 relative"
          />
        </AspectRatio>
      </Reveal>

      <div className="flex flex-col gap-8 py-6 md:py-12 md:order-1 text-center md:text-left">
        <Reveal>
          <p className="bg-peachShades-p95 py-1 px-2 rounded w-full md:w-fit m-auto md:m-0">
            Welcome to the world of captivating web design!
          </p>
        </Reveal>
        <div className="space-y-4">
          <Reveal>
            <h1 className="text-6xl font-semibold text-greyShades-g10">
              I'm Jeffery Cannon
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p>
              A skilled web designer with a passion for creating visually
              stunning and user-friendly websites. With a keen eye for detail
              and a commitment to excellence, I specialize in crafting online
              experiences that leave a lasting impression. From concept to
              launch, I collaborate closely with clients to bring their visions
              to life and ensure their digital presence stands out from the
              crowd. With my expertise and dedication, I am here to help you
              elevate your online presence and make a powerful impact in the
              digital landscape.
            </p>
          </Reveal>
        </div>
        <div className="flex flex-col gap-0 md:flex-row md:gap-4 lg:gap-8 md:border-b md:border-primary md:border-t bg-peachShades-p96 rounded-lg md:bg-transparent md:rounded-none">
          {achievementInfo.map((achievement, index) => (
            <div
              key={index}
              className={`py-4 mx-4 flex items-center h-fit ${
                index === 1 ? "border-t border-b border-peachShades-p90" : ""
              }`}
            >
              <Reveal
                delay={index + 1}
                classes="flex flex-row md:flex-col justify-evenly gap-2 items-center md:items-start w-full h-full"
              >
                <span className="text-5xl font-bold">
                  {achievement.quantity}
                  <span className="text-primary">+</span>
                </span>
                <span className="whitespace-nowrap">{achievement.title}</span>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
