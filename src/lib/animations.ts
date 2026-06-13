import { useReducedMotion } from "framer-motion";

export const ease = [0.25, 0.1, 0.25, 1] as const;
export const easeOut = [0.16, 1, 0.3, 1] as const;

export function useAnimations() {
  const prefersReducedMotion = useReducedMotion();

  const transition = (overrides?: Record<string, unknown>) => ({
    duration: prefersReducedMotion ? 0 : 0.35,
    ease,
    ...overrides,
  });

  const fadeInUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const slideDown = {
    initial: { y: prefersReducedMotion ? 0 : -100 },
    animate: { y: 0 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 },
    animate: { opacity: 1, scale: 1 },
  };

  return { transition, fadeInUp, fadeIn, slideDown, scaleIn, prefersReducedMotion };
}

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.12, ease },
};

export const navSlideDown = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.25, ease: easeOut },
};
