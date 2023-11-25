import { HiStar } from "react-icons/hi";
import GlowingButton from "@/components/common/GlowingButton";

interface MileStoneIconProps {
  bg: string;
  from: string;
  to: string;
}

export default function MileStoneIcon({ bg, from, to }: MileStoneIconProps) {
  return (
    <div
      className={`${bg} p-2 rounded text-primary-foreground shadow-inerglow shadow-peachShades-p99 aspect-square gap-0`}
    >
      <div className="flex flex-col items-center justify-center w-8 h-8">
        <HiStar className="text-lg" />
        <div
          className={`h-4 w-4 bg-gradient-to-b ${from} ${to} p-[1px] relative rounded-[2px]`}
        >
          <div className="w-2 h-full bg-gradient-to-b from-white to-transparent absolute left-1/2 top-0 -ml-1 mt-[1px] rounded-[1px]"></div>
          <div
            className={`h-full w-full ${bg} backdrop-filter rounded-[1px] backdrop-blur-xl opacity-60`}
          ></div>
        </div>
      </div>
    </div>
  );
}
