/**
 * HealthBudi Design System - Color Tokens
 * 
 * A comprehensive color system following industry standards (Polaris, Carbon, Primer)
 * with semantic naming and role-specific colors for a healthcare context.
 * 
 * Color scale uses 50-950 notation (lightest to darkest)
 * Maintains WCAG 2.1 AA contrast compliance throughout
 */

// ============================================================================
// COLOR SCALE GENERATION
// ============================================================================

/**
 * Color scale utility - generates consistent shade ranges
 * Used internally for creating color palettes
 */
const createColorScale = (
  lightest: string,
  light: string,
  lighter: string,
  base: string,
  darker: string,
  dark: string,
  darkest: string
) => ({
  50: lightest,
  100: light,
  200: lighter,
  300: lighter,
  400: base,
  500: base,      // DEFAULT
  600: darker,
  700: darker,
  800: dark,
  900: darkest,
  950: darkest,
});

// ============================================================================
// BRAND COLORS
// ============================================================================

/**
 * Primary Brand Color - Coral Flame (#f76a4d)
 * 
 * Warm, energetic, and approachable. Represents HealthBudi's commitment to
 * health accessibility and proactive care. Distinct from typical healthcare
 * blues and greens, conveying innovation and modernity.
 * 
 * Psychology: Energy, warmth, creativity, attention-grabbing
 * Use cases: Primary CTAs, key interactions, brand moments, notifications
 */
export const primary = {
  50: '#fef7f5',
  100: '#feece8',
  200: '#fdd6ce',
  300: '#fbb5a5',
  400: '#f78f78',
  500: '#f76a4d', // DEFAULT
  600: '#df5035',
  700: '#be3d24',
  800: '#9e3420',
  900: '#832f1e',
  950: '#46150d',
  
  // Semantic aliases
  DEFAULT: '#f76a4d',
  light: '#fdd6ce',
  dark: '#be3d24',
  contrast: '#ffffff',
} as const;

/**
 * Secondary Brand Color - Nature Green (#519954)
 * 
 * Balanced, trustworthy green representing health, growth, and reliability.
 * Complements the primary coral without competing for attention.
 * 
 * Psychology: Health, growth, stability, trust, balance
 * Use cases: Success states, health metrics, secondary actions
 */
export const secondary = {
  50: '#f2f9f3',
  100: '#e4f4e6',
  200: '#c9e8cc',
  300: '#a3d6a8',
  400: '#76bf7c',
  500: '#519954', // DEFAULT
  600: '#3d7a40',
  700: '#2f5f32',
  800: '#274d29',
  900: '#1d3a1f',
  950: '#0f1d10',
  
  // Semantic aliases
  DEFAULT: '#519954',
  light: '#c9e8cc',
  dark: '#2f5f32',
  contrast: '#ffffff',
} as const;

/**
 * Tertiary Brand Color - Sky Blue (#38bdf8)
 * 
 * Fresh, optimistic blue for accenting and highlighting. Used sparingly
 * to direct attention and create visual hierarchy.
 * 
 * Psychology: Trust, clarity, calm, professionalism
 * Use cases: Links, highlights, tertiary actions, information emphasis
 */
export const tertiary = {
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9', // DEFAULT
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',
  950: '#082f49',
  
  // Semantic aliases
  DEFAULT: '#0ea5e9',
  light: '#bae6fd',
  dark: '#0369a1',
  contrast: '#ffffff',
} as const;

// ============================================================================
// SEMANTIC COLORS
// ============================================================================

/**
 * Success - Confirmed/Completed States
 * 
 * Used for positive outcomes, confirmations, and successful operations.
 * Green conveys growth, progress, and achievement.
 */
export const success = {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e', // DEFAULT
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
  950: '#052e16',
  
  // Semantic aliases
  DEFAULT: '#22c55e',
  light: '#bbf7d0',
  dark: '#15803d',
  contrast: '#ffffff',
} as const;

/**
 * Warning - Caution/Alert States
 * 
 * Used for cautionary messages, important notices that aren't errors.
 * Amber conveys attention without alarm.
 */
export const warning = {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b', // DEFAULT
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
  950: '#451a03',
  
  // Semantic aliases
  DEFAULT: '#f59e0b',
  light: '#fde68a',
  dark: '#b45309',
  contrast: '#ffffff',
} as const;

/**
 * Error - Critical/Destructive States
 * 
 * Used for errors, destructive actions, and critical issues requiring attention.
 * Red conveys urgency and importance.
 */
export const error = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444', // DEFAULT
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
  
  // Semantic aliases
  DEFAULT: '#ef4444',
  light: '#fecaca',
  dark: '#b91c1c',
  contrast: '#ffffff',
} as const;

/**
 * Info - Informational States
 * 
 * Used for informational messages, tips, and neutral announcements.
 * Blue conveys knowledge and trustworthiness.
 */
export const info = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6', // DEFAULT
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  950: '#172554',
  
  // Semantic aliases
  DEFAULT: '#3b82f6',
  light: '#bfdbfe',
  dark: '#1d4ed8',
  contrast: '#ffffff',
} as const;

// ============================================================================
// NEUTRAL COLORS
// ============================================================================

/**
 * Neutral Grays - Stone Palette
 * 
 * Warm grays that complement our brand colors without feeling cold.
 * Used for text, backgrounds, borders, and subtle UI elements.
 * 
 * Psychology: Professionalism, neutrality, sophistication
 */
export const neutral = {
  50: '#fafaf9',
  100: '#f5f5f4',
  200: '#e7e5e4',
  300: '#d6d3d1',
  400: '#a8a29e',
  500: '#78716c',  // DEFAULT
  600: '#57534e',
  700: '#44403c',
  800: '#292524',
  900: '#1c1917',
  950: '#0c0a09',
  
  // Semantic aliases
  DEFAULT: '#78716c',
  light: '#e7e5e4',
  dark: '#292524',
} as const;

/**
 * Cool Neutrals - Slate Palette
 * 
 * Slightly cooler grays for specific use cases where warmth isn't appropriate.
 * Used for technical content, code, data visualization backgrounds.
 */
export const slate = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',  // DEFAULT
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#020617',
} as const;

// ============================================================================
// ROLE-SPECIFIC COLORS
// ============================================================================

/**
 * User Role Colors
 * 
 * Distinct colors for each user type in HealthBudi ecosystem.
 * Enables quick visual identification in dashboards, avatars, and badges.
 */
export const roles = {
  patient: {
    ...primary,
    DEFAULT: '#f76a4d',
    label: 'Patient',
    description: 'End users seeking healthcare services',
  },
  
  doctor: {
    ...tertiary,
    DEFAULT: '#2563eb', // Stronger, more authoritative blue
    label: 'Doctor',
    description: 'Healthcare providers and medical professionals',
  },
  
  hospital: {
    ...secondary,
    DEFAULT: '#519954',
    label: 'Hospital',
    description: 'Healthcare facilities and institutions',
  },
  
  dispatcher: {
    ...error,
    DEFAULT: '#ed3333', // Urgency color for emergency dispatchers
    label: 'Dispatcher',
    description: 'Emergency response coordinators',
  },
  
  driver: {
    ...warning,
    DEFAULT: '#f5b800', // Warm, noticeable for transport staff
    label: 'Driver',
    description: 'Medical transport personnel',
  },
  
  admin: {
    ...neutral,
    DEFAULT: '#78716c',
    label: 'Administrator',
    description: 'System administrators and managers',
  },
} as const;

// ============================================================================
// SPECIALTY COLORS (For Medical Specialties)
// ============================================================================

/**
 * Medical Specialty Colors
 * 
 * Curated palette for representing various medical specialties.
 * Used in provider profiles, appointment categories, and filters.
 */
export const specialties = {
  general: '#f76a4d',      // General Practice - Primary brand
  cardiology: '#ef4444',    // Heart - Red
  neurology: '#8b5cf6',     // Brain - Purple
  orthopedics: '#f59e0b',   // Bones - Amber
  pediatrics: '#ec4899',    // Children - Pink
  dermatology: '#14b8a6',   // Skin - Teal
  oncology: '#6366f1',      // Cancer - Indigo
  psychiatry: '#84cc16',    // Mental health - Lime
  radiology: '#0ea5e9',     // Imaging - Sky
  surgery: '#dc2626',      // Surgery - Dark red
  dental: '#06b6d4',        // Dental - Cyan
  ophthalmology: '#a855f7', // Eyes - Purple
} as const;

// ============================================================================
// DATA VISUALIZATION COLORS
// ============================================================================

/**
 * Chart & Data Visualization Palette
 * 
 * Optimized for accessibility and color differentiation in charts.
 * Ordered for sequential data, with alternatives for categorical data.
 */
export const charts = {
  // Sequential palette (use in order)
  sequential: [
    '#f76a4d',
    '#519954',
    '#38bdf8',
    '#f59e0b',
    '#8b5cf6',
    '#ec4899',
    '#14b8a6',
    '#ef4444',
    '#6366f1',
    '#84cc16',
  ],
  
  // Diverging palette (negative-positive spectrum)
  diverging: {
    negative: '#ef4444',
    neutral: '#78716c',
    positive: '#22c55e',
  },
  
  // Heatmap palette (low-high spectrum)
  heatmap: {
    low: '#fef7f5',
    medium: '#f78f78',
    high: '#be3d24',
    extreme: '#832f1e',
  },
} as const;

// ============================================================================
// BACKGROUND COLORS
// ============================================================================

/**
 * Background Colors
 * 
 * Subtle backgrounds for surfaces, elevated elements, and containers.
 * Creates visual hierarchy without harsh contrast.
 */
export const background = {
  // Light theme
  light: {
    DEFAULT: '#ffffff',
    subtle: '#fafaf9',
    muted: '#f5f5f4',
    emphasis: '#e7e5e4',
    strong: '#d6d3d1',
  },
  
  // Dark theme
  dark: {
    DEFAULT: '#0c0a09',
    subtle: '#1c1917',
    muted: '#292524',
    emphasis: '#44403c',
    strong: '#57534e',
  },
} as const;

// ============================================================================
// FOREGROUND COLORS
// ============================================================================

/**
 * Foreground Colors
 * 
 * Text and icon colors optimized for readability.
 * Maintains WCAG 2.1 AA contrast against backgrounds.
 */
export const foreground = {
  // Light theme
  light: {
    DEFAULT: '#1c1917',
    muted: '#44403c',
    subtle: '#57534e',
    emphasis: '#78716c',
    strong: '#a8a29e',
  },
  
  // Dark theme
  dark: {
    DEFAULT: '#fafaf9',
    muted: '#e7e5e4',
    subtle: '#d6d3d1',
    emphasis: '#a8a29e',
    strong: '#78716c',
  },
} as const;

// ============================================================================
// BORDER COLORS
// ============================================================================

/**
 * Border Colors
 * 
 * Consistent borders for inputs, cards, and dividers.
 * Subtle enough not to distract, visible enough to create structure.
 */
export const border = {
  // Light theme
  light: {
    DEFAULT: '#e7e5e4',
    muted: '#d6d3d1',
    emphasis: '#a8a29e',
  },
  
  // Dark theme
  dark: {
    DEFAULT: '#292524',
    muted: '#44403c',
    emphasis: '#57534e',
  },
} as const;

// ============================================================================
// COMPLETE COLOR EXPORT
// ============================================================================

/**
 * Full Color System
 * 
 * Complete export of all color tokens for HealthBudi design system.
 * Import from './colors' for type-safe access to all colors.
 */
export const colors = {
  // Brand
  primary,
  secondary,
  tertiary,
  
  // Semantic
  success,
  warning,
  error,
  info,
  
  // Neutrals
  neutral,
  slate,
  
  // Contextual
  roles,
  specialties,
  charts,
  
  // Surface & Text
  background,
  foreground,
  border,
} as const;

export type ColorScale = typeof primary;
export type ColorToken = keyof typeof colors;
export type RoleColor = keyof typeof roles;
export type SpecialtyColor = keyof typeof specialties;

export default colors;