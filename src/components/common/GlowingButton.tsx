import Link from "next/link";
import { FiDribbble } from "react-icons/fi";

interface GlowingButtonProps {
  Icon: any;
}

export default function GlowingButton({
  Icon,
}: GlowingButtonProps): React.ReactElement {
  return (
    <div className="bg-primary p-2 rounded text-primary-foreground shadow-inerglow shadow-peachShades-p99 hover:shadow-none transition-shadow">
      <Icon />
    </div>
  );
}
