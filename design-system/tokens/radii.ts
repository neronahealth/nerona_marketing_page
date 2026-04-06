/**
 * HealthBudi Design System - Border Radius Tokens
 * 
 * Consistent border radius values following 4px increments.
 * Creates visual consistency while allowing for contextual variation.
 */

export const radii = {
  none: '0',
  sm: '0.125rem',    // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  '4xl': '2rem',     // 32px
  '5xl': '2.5rem',   // 40px
  full: '9999px',
} as const;

export const borderRadius = {
  none: { borderRadius: radii.none },
  sm: { borderRadius: radii.sm },
  DEFAULT: { borderRadius: radii.DEFAULT },
  md: { borderRadius: radii.md },
  lg: { borderRadius: radii.lg },
  xl: { borderRadius: radii.xl },
  '2xl': { borderRadius: radii['2xl'] },
  '3xl': { borderRadius: radii['3xl'] },
  '4xl': { borderRadius: radii['4xl'] },
  '5xl': { borderRadius: radii['5xl'] },
  full: { borderRadius: radii.full },
  
  top: {
    sm: { borderTopLeftRadius: radii.sm, borderTopRightRadius: radii.sm },
    DEFAULT: { borderTopLeftRadius: radii.DEFAULT, borderTopRightRadius: radii.DEFAULT },
    md: { borderTopLeftRadius: radii.md, borderTopRightRadius: radii.md },
    lg: { borderTopLeftRadius: radii.lg, borderTopRightRadius: radii.lg },
    xl: { borderTopLeftRadius: radii.xl, borderTopRightRadius: radii.xl },
    '2xl': { borderTopLeftRadius: radii['2xl'], borderTopRightRadius: radii['2xl'] },
    '3xl': { borderTopLeftRadius: radii['3xl'], borderTopRightRadius: radii['3xl'] },
  },
  
  bottom: {
    sm: { borderBottomLeftRadius: radii.sm, borderBottomRightRadius: radii.sm },
    DEFAULT: { borderBottomLeftRadius: radii.DEFAULT, borderBottomRightRadius: radii.DEFAULT },
    md: { borderBottomLeftRadius: radii.md, borderBottomRightRadius: radii.md },
    lg: { borderBottomLeftRadius: radii.lg, borderBottomRightRadius: radii.lg },
    xl: { borderBottomLeftRadius: radii.xl, borderBottomRightRadius: radii.xl },
    '2xl': { borderBottomLeftRadius: radii['2xl'], borderBottomRightRadius: radii['2xl'] },
    '3xl': { borderBottomLeftRadius: radii['3xl'], borderBottomRightRadius: radii['3xl'] },
  },
  
  left: {
    sm: { borderTopLeftRadius: radii.sm, borderBottomLeftRadius: radii.sm },
    DEFAULT: { borderTopLeftRadius: radii.DEFAULT, borderBottomLeftRadius: radii.DEFAULT },
    md: { borderTopLeftRadius: radii.md, borderBottomLeftRadius: radii.md },
    lg: { borderTopLeftRadius: radii.lg, borderBottomLeftRadius: radii.lg },
    xl: { borderTopLeftRadius: radii.xl, borderBottomLeftRadius: radii.xl },
    '2xl': { borderTopLeftRadius: radii['2xl'], borderBottomLeftRadius: radii['2xl'] },
    '3xl': { borderTopLeftRadius: radii['3xl'], borderBottomLeftRadius: radii['3xl'] },
  },
  
  right: {
    sm: { borderTopRightRadius: radii.sm, borderBottomRightRadius: radii.sm },
    DEFAULT: { borderTopRightRadius: radii.DEFAULT, borderBottomRightRadius: radii.DEFAULT },
    md: { borderTopRightRadius: radii.md, borderBottomRightRadius: radii.md },
    lg: { borderTopRightRadius: radii.lg, borderBottomRightRadius: radii.lg },
    xl: { borderTopRightRadius: radii.xl, borderBottomRightRadius: radii.xl },
    '2xl': { borderTopRightRadius: radii['2xl'], borderBottomRightRadius: radii['2xl'] },
    '3xl': { borderTopRightRadius: radii['3xl'], borderBottomRightRadius: radii['3xl'] },
  },
} as const;

export type Radius = keyof typeof radii;

export default radii;