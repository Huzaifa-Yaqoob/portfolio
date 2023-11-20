"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import React from "react";

interface NavVisibilityProps {
  children: React.ReactNode;
  classes?: string;
}

export default function NavVisibility({
  children,
  classes = "w-full",
}: NavVisibilityProps) {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    latest > previous && latest > 100 ? setHidden(true) : setHidden(false);
  });

  return (
    <motion.nav
      className={classes}
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.nav>
  );
}
