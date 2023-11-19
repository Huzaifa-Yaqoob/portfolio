"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "w-fit" | "w-full";
  delay?: number;
}

export default function Reveal({
  children,
  width = "w-fit",
  delay = 1,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const control = useAnimation();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  });
  return (
    <div ref={ref} className={width}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.5, delay: 0.1 * delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function RevealPersonImage({
  children,
  width = "w-fit",
  delay = 1,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const control = useAnimation();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  });
  return (
    <div ref={ref} className={width}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
