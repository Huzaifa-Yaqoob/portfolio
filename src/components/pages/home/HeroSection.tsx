import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/data/info";
import { AspectRatio } from "../../ui/aspect-ratio";
import Reveal, { RevealPersonImage } from "../../animations/Reveal";
import { achievementInfo } from "@/data/info";

export default function HeroSection() {
  return (
    <section className="hero-container md:grid md:grid-rows-1 md:grid-flow-row md:grid-cols-2 lg:grid-cols-3">
      <div className="md:order-2">
        <Reveal classes="w-full">
          <AspectRatio
            ratio={120 / 163}
            className="p-0 m-0 flex items-end bg-hero-pattern bg-cover bg-center bg-no-repeat heroImageMask"
          >
            <RevealPersonImage>
              <Image
                src="/assets/person.png"
                alt="person"
                width={500}
                height={500}
                loading="lazy"
                className="object-contain saturate-0 transition-all duration-500 h-auto w-auto"
              />
            </RevealPersonImage>
          </AspectRatio>
        </Reveal>
      </div>
      <div className="flex flex-col gap-8 md:col-span-1 lg:col-span-2 py-6 md:py-12 md:order-1">
        <div className="flex flex-col gap-8 text-center md:text-left">
          <Reveal classes="w-full">
            <div className="bg-peachShades-p95 py-1 px-2 rounded w-fit m-auto md:m-0">
              Hello There 🤗
            </div>
          </Reveal>
          <div className="space-y-4">
            <Reveal>
              <h1 className="text-6xl font-semibold text-greyShades-g10">
                Muhammad Huziafa Yaqoob Welcome`s You!
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="md:mr-8">
                I am a passionate <b>full-stack web developer</b>, committed to
                building robust, scalable, and user-friendly web applications.
                Explore my portfolio to see how I bring complex ideas to life
                through code.
              </p>
            </Reveal>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="p-2 flex flex-col gap-6 items-center md:items-start">
              {contactInfo.map((item, index) => (
                <Reveal key={index} delay={index + 2}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center border p-1 rounded"
                  >
                    <item.icon className="text-primary" />
                    <span className="">{item.info}</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 md:rounded-tl-lg md:rounded-bl-lg gap-2 md:gap-0">
          {achievementInfo.map((achievement, index) => (
            <div
              key={index}
              className={`py-4 bg-peachShades-p96 rounded-lg md:rounded-none flex items-center justify-center ${
                index === 0 ? "col-span-2 md:col-auto" : ""
              }`}
            >
              <Reveal
                delay={index + 1}
                classes="flex flex-col gap-2 items-center md:items-start"
              >
                <span className="text-5xl font-bold">
                  {achievement.quantity}
                </span>
                <span>{achievement.title}</span>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
