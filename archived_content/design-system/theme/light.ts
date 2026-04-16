/**
 * HealthBudi Design System - Light Theme
 * 
 * Default theme optimized for readability and accessibility.
 * All colors maintain WCAG 2.1 AA contrast compliance.
 */

import { colors } from '../tokens/colors';
import { typography } from '../tokens/typography';
import { shadows } from '../tokens/shadows';

export const lightTheme = {
  name: 'light',
  
  colors: {
    // Brand
    primary: {
      DEFAULT: '#f76a4d',
      50: '#fef7f5',
      100: '#feece8',
      200: '#fdd6ce',
      300: '#fbb5a5',
      400: '#f78f78',
      500: '#f76a4d',
      600: '#df5035',
      700: '#be3d24',
      800: '#9e3420',
      900: '#832f1e',
      950: '#46150d',
      foreground: '#ffffff',
    },
    
    secondary: {
      DEFAULT: '#519954',
      50: '#f2f9f3',
      100: '#e4f4e6',
      200: '#c9e8cc',
      300: '#a3d6a8',
      400: '#76bf7c',
      500: '#519954',
      600: '#3d7a40',
      700: '#2f5f32',
      800: '#274d29',
      900: '#1d3a1f',
      950: '#0f1d10',
      foreground: '#ffffff',
    },
    
    tertiary: {
      DEFAULT: '#0ea5e9',
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
      foreground: '#ffffff',
    },
    
    // Semantic
    success: {
      DEFAULT: '#22c55e',
      foreground: '#ffffff',
    },
    
    warning: {
      DEFAULT: '#f59e0b',
      foreground: '#ffffff',
    },
    
    error: {
      DEFAULT: '#ef4444',
      foreground: '#ffffff',
    },
    
    info: {
      DEFAULT: '#3b82f6',
      foreground: '#ffffff',
    },
    
    // Surface & Content
    background: {
      DEFAULT: '#ffffff',
      subtle: '#fafaf9',
      muted: '#f5f5f4',
      emphasis: '#e7e5e4',
      strong: '#d6d3d1',
    },
    
    foreground: {
      DEFAULT: '#1c1917',
      muted: '#44403c',
      subtle: '#57534e',
      emphasis: '#78716c',
      strong: '#a8a29e',
    },
    
    // Borders
    border: {
      DEFAULT: '#e7e5e4',
      muted: '#d6d3d1',
      emphasis: '#a8a29e',
    },
    
    // Inputs
    input: {
      background: '#ffffff',
      border: '#d6d3d1',
      placeholder: '#a8a29e',
      focus: '#f76a4d',
    },
    
    // Interactive
    interactive: {
      hover: '#f5f5f4',
      active: '#e7e5e4',
      selected: '#fef7f5',
    },
  },
  
  typography,
  
  shadows: {
    ...shadows,
  },
  
  radii: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    '4xl': '2rem',
    full: '9999px',
  },
  
  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    3: '0.75rem',
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
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
};

export type LightTheme = typeof lightTheme;

export default lightTheme;