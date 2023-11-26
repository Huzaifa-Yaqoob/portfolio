"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { useAnimate } from "framer-motion";
import { type ContactInfo } from "@/data/info";

interface ArrowForwardProps {
  heading: string;
  href: string;
  info: string;
}

export default function MyContactsBox({
  heading,
  href,
  info,
}: ArrowForwardProps) {
  const [scope, animate] = useAnimate();

  return (
    <div
      className="p-4 bg-peachShades-p96 rounded flex items-center justify-between gap-2"
      onMouseOver={() =>
        animate(scope.current, {
          x: 8,
        })
      }
      onMouseLeave={() => animate(scope.current, { x: 0 })}
    >
      <div className="space-y-1">
        <h1 className="text-sm">{heading}</h1>
        <p className="text-greyShades-g20 font-medium">{info}</p>
      </div>
      <div className="p-2 rounded border border-peachShades-p85 text-greyShades-g20">
        <div ref={scope}>
          <HiArrowRight />
        </div>
      </div>
    </div>
  );
}
