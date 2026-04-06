/**
 * HealthBudi Design System - Token Index
 * 
 * Exports all design tokens from a single source of truth.
 * Enables consistent styling across all platforms.
 */

export { colors, primary, secondary, tertiary, success, warning, error, info, neutral, slate, roles, specialties, charts, background, foreground, border } from './colors';
export type { ColorScale, ColorToken, RoleColor, SpecialtyColor } from './colors';

export { typography, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textStyle } from './typography';
export type { FontFamily, FontSize, FontWeight, LineHeight, LetterSpacing, TextStyle } from './typography';

export { spacing, padding, margin, gap } from './spacing';
export type { Spacing } from './spacing';

export { shadows, shadowColor, glow, elevation } from './shadows';
export type { Shadow, Glow } from './shadows';

export { radii, borderRadius } from './radii';
export type { Radius } from './radii';

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  toast: 80,
  top: 90,
  max: 999,
} as const;

export type ZIndex = keyof typeof zIndex;

export const opacity = {
  0: '0',
  5: '0.05',
  10: '0.1',
  20: '0.2',
  25: '0.25',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  75: '0.75',
  80: '0.8',
  90: '0.9',
  95: '0.95',
  100: '1',
} as const;

export type Opacity = keyof typeof opacity;

export const transitions = {
  none: 'none',
  all: 'all 150ms ease',
  DEFAULT: 'all 150ms ease-in-out',
  colors: 'color 150ms ease-in-out, background-color 150ms ease-in-out, border-color 150ms ease-in-out, text-decoration-color 150ms ease-in-out, fill 150ms ease-in-out, stroke 150ms ease-in-out',
  opacity: 'opacity 150ms ease-in-out',
  shadow: 'box-shadow 150ms ease-in-out',
  transform: 'transform 150ms ease-in-out',
  
  fast: 'all 100ms ease-out',
  normal: 'all 200ms ease-in-out',
  slow: 'all 300ms ease-in-out',
  
  bounce: 'all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'all 400ms cubic-bezier(0.68, -0.6, 0.32, 1.6)',
} as const;

export type Transition = keyof typeof transitions;

export const duration = {
  75: '75ms',
  100: '100ms',
  150: '150ms',
  200: '200ms',
  300: '300ms',
  400: '400ms',
  500: '500ms',
  600: '600ms',
  700: '700ms',
  800: '800ms',
  900: '900ms',
  1000: '1000ms',
} as const;

export type Duration = keyof typeof duration;

export const timing = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  
  ease: 'ease',
  'ease-in': 'ease-in',
  'ease-out': 'ease-out',
  'ease-in-out': 'ease-in-out',
} as const;

export type Timing = keyof typeof timing;

export const breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const size = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
  
  auto: 'auto',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  screen: '100vh',
} as const;

export type Size = keyof typeof size;

export default {
  colors: (await import('./colors')).colors,
  typography: (await import('./typography')).typography,
  spacing: (await import('./spacing')).spacing,
  shadows: (await import('./shadows')).shadows,
  radii: (await import('./radii')).radii,
  zIndex,
  opacity,
  transitions,
  duration,
  timing,
  breakpoints,
  size,
};