/**
 * HealthBudi Design System - Theme Provider
 * 
 * React context provider for theme management with:
 * - Automatic system preference detection
 * - Manual toggle support
 * - Persistent preference storage
 * - CSS variables for runtime theming
 */

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { lightTheme, LightTheme } from './light';
import { darkTheme, DarkTheme } from './dark';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  themes: {
    light: LightTheme;
    dark: DarkTheme;
  };
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'healthbudi-theme',
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateResolvedTheme = () => {
      if (theme === 'system') {
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
      } else {
        setResolvedTheme(theme);
      }
    };

    updateResolvedTheme();
    mediaQuery.addEventListener('change', updateResolvedTheme);

    return () => mediaQuery.removeEventListener('change', updateResolvedTheme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';

    if (currentTheme !== resolvedTheme) {
      if (disableTransitionOnChange) {
        root.classList.remove('light', 'dark');
        root.classList.add(resolvedTheme);
      } else {
        root.classList.add('theme-transition');
        root.classList.remove('light', 'dark');
        root.classList.add(resolvedTheme);
        
        const removeTransition = () => {
          root.classList.remove('theme-transition');
        };
        
        setTimeout(removeTransition, 150);
      }
    }

    localStorage.setItem(storageKey, theme);
  }, [resolvedTheme, theme, storageKey, disableTransitionOnChange]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      if (current === 'system') {
        return resolvedTheme === 'light' ? 'dark' : 'light';
      }
      return current === 'light' ? 'dark' : 'light';
    });
  }, [resolvedTheme]);

  const value: ThemeContextValue = {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}

export function getThemeColors(theme: ResolvedTheme) {
  return theme === 'dark' ? darkTheme.colors : lightTheme.colors;
}

export { lightTheme, darkTheme };
export type { LightTheme, DarkTheme, Theme, ResolvedTheme };