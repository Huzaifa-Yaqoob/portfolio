import { motion } from "framer-motion";

interface DrawSVGProps {
  svg: string; // SVG string or JSX element
  duration?: number; // Duration of the drawing animation
}

export default function DrawSVG({ svg, duration = 2, ...props }: DrawSVGProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={24}
      height={24}
      initial={{ rotate: 90 }}
      animate={{ rotate: 0 }} // Full 360-degree rotation
      transition={{
        duration: 0.5,
        ease: "linear",
      }}
      {...props}
    >
      <motion.path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={svg}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
