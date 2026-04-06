/**
 * HealthBudi Design System - Shadow & Elevation Tokens
 * 
 * A layered elevation system inspired by Material Design but refined
 * for HealthBudi's aesthetic. Includes semantic shadows for primary
 * and semantic color glows.
 */

export const shadows = {
  none: 'none',
  
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

export const shadowColor = {
  primary: '247 106 77',
  secondary: '81 153 84',
  tertiary: '14 165 233',
  success: '34 197 94',
  warning: '245 158 11',
  error: '239 68 68',
  info: '59 130 246',
} as const;

export const glow = {
  primary: {
    sm: '0 0 10px rgb(247 106 77 / 0.2)',
    DEFAULT: '0 0 20px rgb(247 106 77 / 0.3)',
    md: '0 0 30px rgb(247 106 77 / 0.35)',
    lg: '0 0 40px rgb(247 106 77 / 0.4)',
  },
  
  secondary: {
    sm: '0 0 10px rgb(81 153 84 / 0.2)',
    DEFAULT: '0 0 20px rgb(81 153 84 / 0.3)',
    md: '0 0 30px rgb(81 153 84 / 0.35)',
    lg: '0 0 40px rgb(81 153 84 / 0.4)',
  },
  
  tertiary: {
    sm: '0 0 10px rgb(14 165 233 / 0.2)',
    DEFAULT: '0 0 20px rgb(14 165 233 / 0.3)',
    md: '0 0 30px rgb(14 165 233 / 0.35)',
    lg: '0 0 40px rgb(14 165 233 / 0.4)',
  },
  
  success: {
    sm: '0 0 10px rgb(34 197 94 / 0.2)',
    DEFAULT: '0 0 20px rgb(34 197 94 / 0.3)',
    md: '0 0 30px rgb(34 197 94 / 0.35)',
    lg: '0 0 40px rgb(34 197 94 / 0.4)',
  },
  
  warning: {
    sm: '0 0 10px rgb(245 158 11 / 0.2)',
    DEFAULT: '0 0 20px rgb(245 158 11 / 0.3)',
    md: '0 0 30px rgb(245 158 11 / 0.35)',
    lg: '0 0 40px rgb(245 158 11 / 0.4)',
  },
  
  error: {
    sm: '0 0 10px rgb(239 68 68 / 0.2)',
    DEFAULT: '0 0 20px rgb(239 68 68 / 0.3)',
    md: '0 0 30px rgb(239 68 68 / 0.35)',
    lg: '0 0 40px rgb(239 68 68 / 0.4)',
  },
  
  info: {
    sm: '0 0 10px rgb(59 130 246 / 0.2)',
    DEFAULT: '0 0 20px rgb(59 130 246 / 0.3)',
    md: '0 0 30px rgb(59 130 246 / 0.35)',
    lg: '0 0 40px rgb(59 130 246 / 0.4)',
  },
} as const;

export const elevation = {
  0: 'none',
  1: shadows.sm,
  2: shadows.DEFAULT,
  3: shadows.md,
  4: shadows.lg,
  5: shadows.xl,
  6: shadows['2xl'],
} as const;

export type Shadow = keyof typeof shadows;
export type Glow = keyof typeof glow;

export default shadows;