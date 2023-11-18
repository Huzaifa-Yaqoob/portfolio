import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../ui/button";

interface ButtonWithArrowProps {
  variant?:
    | "ghost"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "link"
    | null
    | undefined;
  text?: string;
  href?: string;
}

export default function ButtonWithArrow({
  variant = "ghost",
  text = "View Portfolio",
  href = "/portfolio",
}: ButtonWithArrowProps) {
  return (
    <Button variant={variant} className="flex items-center gap-1">
      {text}
      <HiArrowNarrowRight className="" />
    </Button>
  );
}
