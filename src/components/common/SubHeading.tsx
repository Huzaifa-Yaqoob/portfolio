import Reveal from "../animations/Reveal";
import { Header } from "@/data/headingData";

interface SubHeadingProps {
  header: Header;
}

export default function SubHeading({ header }: SubHeadingProps) {
  return (
    <div className="text-center space-y-4">
      <Reveal classes="w-full" delay={1}>
        <h1 className="text-5xl font-semibold text-greyShades-g20">
          {header.heading}
        </h1>
      </Reveal>
      <Reveal classes="w-full" delay={2}>
        <p>{header.paragraph}</p>
      </Reveal>
    </div>
  );
}
