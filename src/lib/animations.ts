/**
 * Fintech-grade scroll animation presets.
 * Inspired by Stripe / Zerodha / TradingView motion language.
 *
 * All animations use:
 *  - ease-out cubic (0.33, 1, 0.68, 1) for entering
 *  - 300-500ms duration for sections, 200-300ms for elements
 *  - transform + opacity only (GPU-composited, no repaints)
 *  - stagger via delay multiplier for child elements
 */

import type { Variants, Transition } from 'motion/react';

// ─── Easing ────────────────────────────────────────────────────────
const easeOut = [0.33, 1, 0.68, 1] as const;
const easeOutSoft = [0.25, 1, 0.5, 1] as const;

// ─── Shared transition config ──────────────────────────────────────
const sectionTransition: Transition = {
  duration: 0.5,
  ease: easeOutSoft as unknown as number[],
};

const elementTransition: Transition = {
  duration: 0.4,
  ease: easeOut as unknown as number[],
};

// ─── Viewport config ──────────────────────────────────────────────
export const viewport = { once: true, margin: '-80px' as const };

// ─── Section Animations ───────────────────────────────────────────
// Full section fade-up (use on section-level motion.div wrappers)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: sectionTransition,
  },
};

// Fade in from left (for before/after, alternating layouts)
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: sectionTransition,
  },
};

// Fade in from right
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: sectionTransition,
  },
};

// Subtle scale reveal (for hero chart, images, video embeds)
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutSoft as unknown as number[] },
  },
};

// Pure fade (for stats, badges, subtle elements)
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutSoft as unknown as number[] },
  },
};

// ─── Stagger Container ───────────────────────────────────────────
// Use on parent: variants={staggerContainer}
// Use on children: variants={staggerItem}
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: elementTransition,
  },
};

// ─── Hero-specific (page-load, not scroll-triggered) ──────────────
export const heroEntrance = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: easeOutSoft as unknown as number[],
    },
  },
});

export const heroFade = (delay: number = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: easeOutSoft as unknown as number[],
    },
  },
});
