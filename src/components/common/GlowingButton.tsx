import Link from "next/link";
import { FiDribbble } from "react-icons/fi";
import { type IconType } from "react-icons";

interface GlowingButtonProps {
  Icon: IconType;
  size?: string;
}

export default function GlowingButton({
  Icon,
  size = "",
}: GlowingButtonProps): React.ReactElement {
  return (
    <div className="bg-primary p-2 rounded text-primary-foreground shadow-inerglow shadow-peachShades-p99 hover:shadow-inerglowRemove transition-shadow duration-500 w-fit">
      <Icon className={size} />
    </div>
  );
}
