import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes, ThemeName, Theme } from '@velvet-ui/tokens';

interface ThemeContextValue {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  resolvedTheme: 'light' | 'dark';
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
  currentTheme: Theme;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
  defaultThemeName?: ThemeName;
}

export function ThemeProvider({ 
  children, 
  defaultTheme = 'system',
  defaultThemeName = 'default' 
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<'light' | 'dark' | 'system'>(defaultTheme);
  const [themeName, setThemeNameState] = useState<ThemeName>(defaultThemeName);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Only access localStorage and matchMedia after component mounts
  useEffect(() => {
    setMounted(true);
    
    const storedTheme = localStorage.getItem('velvet-theme') as 'light' | 'dark' | 'system';
    if (storedTheme) {
      setThemeState(storedTheme);
    }
    
    const storedThemeName = localStorage.getItem('velvet-theme-name') as ThemeName;
    if (storedThemeName && storedThemeName in themes) {
      setThemeNameState(storedThemeName);
    }
    
    // Set initial resolved theme
    if (storedTheme === 'system' || (!storedTheme && defaultTheme === 'system')) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setResolvedTheme(isDark ? 'dark' : 'light');
    } else if (storedTheme === 'dark' || (!storedTheme && defaultTheme === 'dark')) {
      setResolvedTheme('dark');
    } else {
      setResolvedTheme('light');
    }
  }, [defaultTheme, defaultThemeName]);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        const newTheme = e.matches ? 'dark' : 'light';
        setResolvedTheme(newTheme);
        root.classList.toggle('dark', newTheme === 'dark');
      };

      const currentTheme = mediaQuery.matches ? 'dark' : 'light';
      setResolvedTheme(currentTheme);
      root.classList.toggle('dark', currentTheme === 'dark');

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      const isDark = theme === 'dark';
      setResolvedTheme(isDark ? 'dark' : 'light');
      root.classList.toggle('dark', isDark);
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    // Apply CSS variables for the current theme
    const currentTheme = themes[themeName];
    const colors = currentTheme[resolvedTheme].colors;
    const root = document.documentElement;

    // Semantic colors
    root.style.setProperty('--color-primary', colors.semantic.primary);
    root.style.setProperty('--color-primary-hover', colors.semantic.primaryHover);
    root.style.setProperty('--color-primary-foreground', colors.semantic.primaryForeground);
    root.style.setProperty('--color-secondary', colors.semantic.secondary);
    root.style.setProperty('--color-secondary-hover', colors.semantic.secondaryHover);
    root.style.setProperty('--color-secondary-foreground', colors.semantic.secondaryForeground);
    root.style.setProperty('--color-success', colors.semantic.success);
    root.style.setProperty('--color-success-hover', colors.semantic.successHover);
    root.style.setProperty('--color-success-foreground', colors.semantic.successForeground);
    root.style.setProperty('--color-warning', colors.semantic.warning);
    root.style.setProperty('--color-warning-hover', colors.semantic.warningHover);
    root.style.setProperty('--color-warning-foreground', colors.semantic.warningForeground);
    root.style.setProperty('--color-danger', colors.semantic.danger);
    root.style.setProperty('--color-danger-hover', colors.semantic.dangerHover);
    root.style.setProperty('--color-danger-foreground', colors.semantic.dangerForeground);
    root.style.setProperty('--color-info', colors.semantic.info);
    root.style.setProperty('--color-info-hover', colors.semantic.infoHover);
    root.style.setProperty('--color-info-foreground', colors.semantic.infoForeground);

    // Background colors
    root.style.setProperty('--color-background', colors.background.primary);
    root.style.setProperty('--color-background-secondary', colors.background.secondary);
    root.style.setProperty('--color-background-tertiary', colors.background.tertiary);
    root.style.setProperty('--color-background-elevated', colors.background.elevated);
    root.style.setProperty('--color-background-overlay', colors.background.overlay);
    root.style.setProperty('--color-background-inverse', colors.background.inverse);

    // Foreground colors
    root.style.setProperty('--color-foreground', colors.foreground.primary);
    root.style.setProperty('--color-foreground-secondary', colors.foreground.secondary);
    root.style.setProperty('--color-foreground-tertiary', colors.foreground.tertiary);
    root.style.setProperty('--color-foreground-inverse', colors.foreground.inverse);

    // Border colors
    root.style.setProperty('--color-border', colors.border.primary);
    root.style.setProperty('--color-border-secondary', colors.border.secondary);
    root.style.setProperty('--color-border-tertiary', colors.border.tertiary);
  }, [themeName, resolvedTheme, mounted]);

  const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
    setThemeState(newTheme);
    localStorage.setItem('velvet-theme', newTheme);
  };

  const setThemeName = (name: ThemeName) => {
    setThemeNameState(name);
    localStorage.setItem('velvet-theme-name', name);
  };

  const currentTheme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme, 
      resolvedTheme, 
      themeName, 
      setThemeName,
      currentTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}