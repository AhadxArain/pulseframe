import type { Variants, Transition } from "framer-motion";

export const easeExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const easeSmooth: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const baseTransition: Transition = {
  duration: 0.9,
  ease: easeExpo,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: easeExpo } },
};

export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerParentSlow: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

export const wordRise: Variants = {
  hidden: { opacity: 0, y: "55%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: { duration: 1, ease: easeExpo },
  },
};

export const inViewOnce = { once: true, margin: "-15%" } as const;
