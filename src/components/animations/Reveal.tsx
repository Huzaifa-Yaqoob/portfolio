"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  classes?: string;
  delay?: number;
}

export default function Reveal({
  children,
  classes = "w-fit",
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
    <motion.div
      className={classes}
      ref={ref}
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
  );
}

export function RevealPersonImage({
  children,
  classes = "w-fit",
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
    <motion.div
      ref={ref}
      className={classes}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={control}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
