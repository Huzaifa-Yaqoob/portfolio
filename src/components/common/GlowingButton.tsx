import Link from "next/link";
import { FiDribbble } from "react-icons/fi";
import { type IconType } from "react-icons";

interface GlowingButtonProps {
  Icon: IconType;
}

export default function GlowingButton({
  Icon,
}: GlowingButtonProps): React.ReactElement {
  return (
    <div className="bg-primary p-2 rounded text-primary-foreground shadow-inerglow shadow-peachShades-p99 hover:shadow-inerglowRemove transition-shadow w-fit">
      <Icon />
    </div>
  );
}
