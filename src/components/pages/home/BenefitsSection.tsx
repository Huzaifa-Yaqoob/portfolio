import Reveal from "../../animations/Reveal";
import { BenefitsData } from "@/data/benefitsData";
import { benefitsHeader } from "@/data/headingData";
import SubHeading from "../../common/SubHeading";

export default function BenefitsSection() {
  return (
    <section className="my-container space-y-8">
      <SubHeading header={benefitsHeader} />
      <div className="space-y-4">
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
          {BenefitsData.slice(0, 2).map((benefit, index) => (
            <Reveal
              delay={3 + index}
              key={index}
              classes="p-8 bg-peachShades-p96 rounded-lg"
            >
              <article>
                <h3 className="text-2xl font-semibold text-greyShades-g20">
                  {benefit.title}
                </h3>
                <p>{benefit.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
          {BenefitsData.slice(2, 5).map((benefit, index) => (
            <Reveal
              delay={3 + index}
              classes="p-8 bg-peachShades-p96 rounded-lg"
              key={index}
            >
              <article>
                <h3 className="text-2xl font-semibold text-greyShades-g20">
                  {benefit.title}
                </h3>
                <p>{benefit.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
