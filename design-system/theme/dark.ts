/**
 * HealthBudi Design System - Dark Theme
 * 
 * Optimized for reduced eye strain in low-light environments.
 * All colors maintain WCAG 2.1 AA contrast against dark backgrounds.
 */

import { typography } from '../tokens/typography';
import { shadows } from '../tokens/shadows';

export const darkTheme = {
  name: 'dark',
  
  colors: {
    // Brand (slightly adjusted for dark mode)
    primary: {
      DEFAULT: '#f78f78',  // Lighter for better contrast
      50: '#46150d',
      100: '#832f1e',
      200: '#9e3420',
      300: '#be3d24',
      400: '#df5035',
      500: '#f76a4d',
      600: '#f78f78',       // DEFAULT in dark mode
      700: '#fbb5a5',
      800: '#fdd6ce',
      900: '#feece8',
      950: '#fef7f5',
      foreground: '#1c1917',
    },
    
    secondary: {
      DEFAULT: '#76bf7c',  // Lighter for dark mode
      50: '#0f1d10',
      100: '#1d3a1f',
      200: '#274d29',
      300: '#2f5f32',
      400: '#3d7a40',
      500: '#519954',
      600: '#76bf7c',
      700: '#a3d6a8',
      800: '#c9e8cc',
      900: '#e4f4e6',
      950: '#f2f9f3',
      foreground: '#1c1917',
    },
    
    tertiary: {
      DEFAULT: '#38bdf8',  // Lighter for dark mode
      50: '#082f49',
      100: '#0c4a6e',
      200: '#075985',
      300: '#0369a1',
      400: '#0284c7',
      500: '#0ea5e9',
      600: '#38bdf8',
      700: '#7dd3fc',
      800: '#bae6fd',
      900: '#e0f2fe',
      950: '#f0f9ff',
      foreground: '#1c1917',
    },
    
    // Semantic
    success: {
      DEFAULT: '#4ade80',  // Lighter for dark mode
      foreground: '#1c1917',
    },
    
    warning: {
      DEFAULT: '#fbbf24',  // Lighter for dark mode
      foreground: '#1c1917',
    },
    
    error: {
      DEFAULT: '#f87171',  // Lighter for dark mode
      foreground: '#1c1917',
    },
    
    info: {
      DEFAULT: '#60a5fa',  // Lighter for dark mode
      foreground: '#1c1917',
    },
    
    // Surface & Content
    background: {
      DEFAULT: '#0c0a09',
      subtle: '#1c1917',
      muted: '#292524',
      emphasis: '#44403c',
      strong: '#57534e',
    },
    
    foreground: {
      DEFAULT: '#fafaf9',
      muted: '#e7e5e4',
      subtle: '#d6d3d1',
      emphasis: '#a8a29e',
      strong: '#78716c',
    },
    
    // Borders
    border: {
      DEFAULT: '#292524',
      muted: '#44403c',
      emphasis: '#57534e',
    },
    
    // Inputs
    input: {
      background: '#1c1917',
      border: '#44403c',
      placeholder: '#78716c',
      focus: '#f78f78',
    },
    
    // Interactive
    interactive: {
      hover: '#292524',
      active: '#44403c',
      selected: '#46150d',
    },
  },
  
  typography,
  
  shadows: {
    // Shadows are more subtle in dark mode
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.6)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.3)',
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

export type DarkTheme = typeof darkTheme;

export default darkTheme;