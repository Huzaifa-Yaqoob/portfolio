"use client";

import { useAnimate } from "framer-motion";
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
}

export default function ButtonWithArrow({
  variant = "ghost",
  text = "View Portfolio",
}: ButtonWithArrowProps) {
  const [scope, animate] = useAnimate();

  return (
    <Button
      variant={variant}
      className="flex items-center gap-1"
      onMouseOver={() =>
        animate(scope.current, {
          x: 10,
          rotate: -60,
          y: [2, -2],
        })
      }
      onMouseLeave={() => animate(scope.current, { x: 0, rotate: 0, y: 0 })}
    >
      {text}
      <span ref={scope}>
        <HiArrowNarrowRight />
      </span>
    </Button>
  );
}
