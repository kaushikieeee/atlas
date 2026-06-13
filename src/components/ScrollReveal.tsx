import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { ease, useAnimations } from "../lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  scale?: boolean;
}

export default function ScrollReveal({ children, className, delay = 0, direction = "up", scale }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const { prefersReducedMotion } = useAnimations();

  const initialOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {}
  };

  const initial = {
    opacity: 0,
    ...(prefersReducedMotion ? {} : initialOffset[direction]),
    ...(scale && !prefersReducedMotion ? { scale: 0.96 } : {}),
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
