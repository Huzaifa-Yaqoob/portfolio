import { RevealViaScale } from "@/components/animations/Reveal";

interface PointProps {
  bg: string;
}

export default function Point({ bg }: PointProps) {
  return (
    <RevealViaScale classes="z-[1]">
      <div
        className={`w-2 h-2 ${bg} -mb-[8px] md:-mb-0 rounded-full border-[4px] border-white outline-[4px] outline-peachShades-p96 outline box-content`}
      ></div>
    </RevealViaScale>
  );
}
