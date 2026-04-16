/**
 * HealthBudi Design System - Typography Tokens
 * 
 * A refined typographic system featuring distinctive fonts that avoid generic
 * aesthetics while maintaining healthcare professionalism and readability.
 * 
 * Primary: Outfit - Modern, geometric sans-serif for headlines
 * Body: Plus Jakarta Sans - Friendly, readable for content
 * Mono: JetBrains Mono - Developer-focused monospace
 */

import type { CSSProperties } from 'react';

// ============================================================================
// FONT FAMILIES
// ============================================================================

export const fontFamily = {
  display: [
    'Outfit',
    'system-ui',
    '-apple-system',
    'sans-serif',
  ],
  
  body: [
    'Plus Jakarta Sans',
    'system-ui',
    '-apple-system',
    'sans-serif',
  ],
  
  mono: [
    'JetBrains Mono',
    'Menlo',
    'Monaco',
    'Courier New',
    'monospace',
  ],
  
  // Fallbacks for performance
  system: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
} as const;

// ============================================================================
// FONT SIZES
// ============================================================================

export const fontSize = {
  '2xs': ['0.625rem', { lineHeight: '0.875rem' }],     // 10px / 14px
  xs: ['0.75rem', { lineHeight: '1rem' }],              // 12px / 16px
  sm: ['0.875rem', { lineHeight: '1.25rem' }],           // 14px / 20px
  base: ['1rem', { lineHeight: '1.5rem' }],             // 16px / 24px
  lg: ['1.125rem', { lineHeight: '1.75rem' }],          // 18px / 28px
  xl: ['1.25rem', { lineHeight: '1.875rem' }],          // 20px / 30px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],            // 24px / 32px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],       // 30px / 36px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],         // 36px / 40px
  '5xl': ['3rem', { lineHeight: '1.2' }],              // 48px
  '6xl': ['3.75rem', { lineHeight: '1.1' }],           // 60px
  '7xl': ['4.5rem', { lineHeight: '1' }],              // 72px
  '8xl': ['6rem', { lineHeight: '1' }],                // 96px
  '9xl': ['8rem', { lineHeight: '1' }],                // 128px
} as const;

// ============================================================================
// FONT WEIGHTS
// ============================================================================

export const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

// ============================================================================
// LINE HEIGHTS
// ============================================================================

export const lineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  '3': '.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
} as const;

// ============================================================================
// LETTER SPACING
// ============================================================================

export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// ============================================================================
// TYPOGRAPHY SCALE
// ============================================================================

export const textStyle = {
  'display-9xl': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['9xl'][0],
    lineHeight: fontSize['9xl'][1].lineHeight,
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.tighter,
  } as const,
  
  'display-8xl': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['8xl'][0],
    lineHeight: fontSize['8xl'][1].lineHeight,
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.tighter,
  } as const,
  
  'display-7xl': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['7xl'][0],
    lineHeight: fontSize['7xl'][1].lineHeight,
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.tight,
  } as const,
  
  'display-6xl': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['6xl'][0],
    lineHeight: fontSize['6xl'][1].lineHeight,
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.tight,
  } as const,
  
  'display-5xl': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['5xl'][0],
    lineHeight: fontSize['5xl'][1].lineHeight,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.tight,
  } as const,
  
  'heading-4xl': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['4xl'][0],
    lineHeight: fontSize['4xl'][1].lineHeight,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.tight,
  } as const,
  
  'heading-3xl': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['3xl'][0],
    lineHeight: fontSize['3xl'][1].lineHeight,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.tight,
  } as const,
  
  'heading-2xl': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['2xl'][0],
    lineHeight: fontSize['2xl'][1].lineHeight,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'heading-xl': {
    fontFamily: fontFamily.display,
    fontSize: fontSize.xl[0],
    lineHeight: fontSize.xl[1].lineHeight,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'heading-lg': {
    fontFamily: fontFamily.display,
    fontSize: fontSize.lg[0],
    lineHeight: fontSize.lg[1].lineHeight,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'body-2xl': {
    fontFamily: fontFamily.body,
    fontSize: fontSize['2xl'][0],
    lineHeight: fontSize['2xl'][1].lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'body-xl': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.xl[0],
    lineHeight: fontSize.xl[1].lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'body-lg': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.lg[0],
    lineHeight: fontSize.lg[1].lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'body-base': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.base[0],
    lineHeight: fontSize.base[1].lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'body-sm': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.sm[0],
    lineHeight: fontSize.sm[1].lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'body-xs': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.xs[0],
    lineHeight: fontSize.xs[1].lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.wide,
  } as const,
  
  'code-lg': {
    fontFamily: fontFamily.mono,
    fontSize: fontSize.lg[0],
    lineHeight: fontSize.lg[1].lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'code-base': {
    fontFamily: fontFamily.mono,
    fontSize: fontSize.base[0],
    lineHeight: fontSize.base[1].lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'code-sm': {
    fontFamily: fontFamily.mono,
    fontSize: fontSize.sm[0],
    lineHeight: fontSize.sm[1].lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'label-lg': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.lg[0],
    lineHeight: fontSize.lg[1].lineHeight,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.wide,
  } as const,
  
  'label-base': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.base[0],
    lineHeight: fontSize.base[1].lineHeight,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.wide,
  } as const,
  
  'label-sm': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.sm[0],
    lineHeight: fontSize.sm[1].lineHeight,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.wider,
  } as const,
  
  'label-xs': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.xs[0],
    lineHeight: fontSize.xs[1].lineHeight,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.wider,
  } as const,
  
  'caption': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.xs[0],
    lineHeight: fontSize.xs[1].lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  } as const,
  
  'overline': {
    fontFamily: fontFamily.body,
    fontSize: fontSize['2xs'][0],
    lineHeight: fontSize['2xs'][1].lineHeight,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.widest,
    textTransform: 'uppercase',
  } as const,
} as const;

// ============================================================================
// COMPLETE TYPOGRAPHY EXPORT
// ============================================================================

export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textStyle,
} as const;

export type FontFamily = keyof typeof fontFamily;
export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type LineHeight = keyof typeof lineHeight;
export type LetterSpacing = keyof typeof letterSpacing;
export type TextStyle = keyof typeof textStyle;

export default typography;