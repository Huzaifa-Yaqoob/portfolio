import SubHeading from "@/components/common/SubHeading";
import { MileStonesHeader } from "@/data/headingData";
import { mileStonesData } from "@/data/mileStonesData";
import Point from "./addons/Point";
import Reveal, { RevealFromSides } from "@/components/animations/Reveal";
import MileStoneIcon from "./addons/MileStoneIcon";

export default function MileStonesSection() {
  const lastIndex = mileStonesData.length - 1;
  return (
    <section className="my-container space-y-16">
      <SubHeading header={MileStonesHeader} />
      <div>
        <div className="relative flex">
          <div className="absolute bg-peachShades-p85 h-full w-[2px] left-1/2 ml-[-1px] z-[-1]"></div>
          <div className="space-y-8">
            {mileStonesData.map((mileStone, index) => (
              <div
                key={index}
                className={` flex-col gap-8 relative ${
                  index === 0 ? "relative" : ""
                } ${index === lastIndex ? "flex md:hidden" : "flex"}`}
              >
                {index === 0 ? (
                  <div
                    className={`absolute ${mileStone.color} h-full w-[2px] left-1/2 ml-[-1px] z-[-1]`}
                  ></div>
                ) : (
                  <></>
                )}

                {/* time period of that milestone */}
                <div className="py-1 px-2 rounded bg-peachShades-p96 m-auto w-fit text-greyShades-g30 font-semibold">
                  {mileStone.when}
                </div>
                <div className="md:grid md:grid-flow-row md:grid-cols-5 text-greyShades-g20 ">
                  {/* milestone title */}
                  <RevealFromSides
                    side={index % 2 === 0 ? "right" : "left"}
                    classes={`md:col-span-2 text-greyShades-g30 font-semibold flex items-center  order-1 mb-8 md:mb-0 justify-center ${
                      index % 2
                        ? "md:order-1 md:justify-end"
                        : "md:order-3 md:justify-start"
                    }`}
                  >
                    <h2 className="rounded bg-peachShades-p96 py-2 px-4">
                      {mileStone.title}
                    </h2>
                  </RevealFromSides>

                  {/* point */}
                  <div className="md:col-span-1 flex items-center justify-center order-2">
                    <Point bg={mileStone.color} />
                  </div>
                  {/* milestone description */}
                  <RevealFromSides
                    side={index % 2 === 0 ? "left" : "right"}
                    classes={`rounded bg-peachShades-p96 p-8 md:col-span-2 relative flex order-3 items-center gap-2 flex-col ${
                      index % 2
                        ? "md:order-3 md:flex-row"
                        : "md:order-1 md:flex-row-reverse"
                    }`}
                  >
                    <div>
                      <MileStoneIcon
                        bg={mileStone.color}
                        from={mileStone.from}
                        to={mileStone.to}
                      />
                    </div>
                    <div
                      className={`text-xs text-center ${
                        index % 2 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      {mileStone.description}
                    </div>
                    <div
                      className={`hidden md:block absolute w-4 h-4 top-1/2 -mt-2 rotate-45 bg-peachShades-p96 rounded ${
                        index % 2 ? "-left-2" : "-right-2"
                      }`}
                    ></div>
                  </RevealFromSides>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8 m-auto hidden md:block">
          {/* time period of that milestone */}
          <div className="py-1 px-2 rounded bg-peachShades-p96 m-auto w-fit text-greyShades-g30 font-semibold">
            {mileStonesData[lastIndex].when}
          </div>
          <Reveal classes="text-greyShades-g20 max-w-lg m-auto">
            <div className="rounded bg-peachShades-p96 p-8 col-span-2 relative flex items-center gap-2">
              <div>
                <MileStoneIcon
                  bg={mileStonesData[lastIndex].color}
                  from={mileStonesData[lastIndex].from}
                  to={mileStonesData[lastIndex].to}
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-greyShades-g30 font-semibold">
                  {mileStonesData[lastIndex].title}
                </h2>
                <p className="text-xs ">
                  {mileStonesData[lastIndex].description}
                </p>
              </div>
              <div className="absolute w-4 h-4 -top-2 left-1/2 -ml-2 rotate-45 bg-peachShades-p96 rounded "></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
