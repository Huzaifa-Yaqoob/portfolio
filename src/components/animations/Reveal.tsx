"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return <motion.div>{children}</motion.div>;
}
