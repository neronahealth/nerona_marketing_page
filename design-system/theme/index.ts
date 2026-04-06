/**
 * HealthBudi Design System - Theme System Index
 */

export { lightTheme, type LightTheme } from './light';
export { darkTheme, type DarkTheme } from './dark';
export { 
  ThemeProvider, 
  useTheme, 
  getThemeColors,
  type Theme,
  type ResolvedTheme,
} from './ThemeProvider';

import { lightTheme } from './light';
import { darkTheme } from './dark';
import { shadows } from '../tokens/shadows';
import { radii } from '../tokens/radii';
import { spacing } from '../tokens/spacing';

export const themeConfig = {
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'system',
  storageKey: 'healthbudi-theme',
  disableTransitionOnChange: false,
};

export const themeTokens = {
  shadows,
  radii,
  spacing,
};

export default {
  lightTheme,
  darkTheme,
  themeConfig,
};