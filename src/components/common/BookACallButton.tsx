"use client";

import { useAnimate } from "framer-motion";
import { HiPhone } from "react-icons/hi";
import { Button } from "../ui/button";

export default function BookACallButton() {
  const [scope, animate] = useAnimate();

  return (
    <Button
      className="space-x-1 shadow"
      onMouseOver={() =>
        animate(
          scope.current,
          {
            rotate: [15, 0, 15],
          },
          { repeat: 4, repeatType: "loop", duration: 0.2 }
        )
      }
      onMouseLeave={() => animate(scope.current, { rotate: 0 })}
    >
      <span ref={scope}>
        <HiPhone />
      </span>
      <span>Book a call</span>
    </Button>
  );
}
