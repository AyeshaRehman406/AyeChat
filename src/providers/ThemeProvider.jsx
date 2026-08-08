import { useState, useEffect, useMemo, useCallback } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import {
  AYECHAT_LIGHT_THEME,
  AYECHAT_DARK_THEME,
} from '../constants/themes.js';

const STORAGE_KEY = 'ayeChat-theme-mode';

const getSavedThemeMode = () => {
  if (typeof window === 'undefined') {
    return 'system';
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
  } catch {
    return 'system';
  }

  return 'system';
};

const getSystemPreference = () => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const applyTheme = (resolvedMode, currentTheme) => {
  if (typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;

  root.setAttribute('data-theme', resolvedMode);

  Object.entries(currentTheme).forEach(([key, value]) => {
    const cssVariable = `--color-${key
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()}`;

    root.style.setProperty(cssVariable, value);
  });
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeModeState] = useState(getSavedThemeMode);
  const [systemTheme, setSystemTheme] = useState(getSystemPreference);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return undefined;
    }

    const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    const handleSystemThemeChange = (event) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener('change', handleSystemThemeChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener('change', handleSystemThemeChange);
      }
    };
  }, []);

  const resolvedMode =
    themeMode === 'system' ? systemTheme : themeMode;

  const currentTheme =
    resolvedMode === 'dark'
      ? AYECHAT_DARK_THEME
      : AYECHAT_LIGHT_THEME;

  useEffect(() => {
    applyTheme(resolvedMode, currentTheme);
  }, [resolvedMode, currentTheme]);

  const setThemeMode = useCallback((mode) => {
    const nextMode =
      mode === 'light' || mode === 'dark' || mode === 'system'
        ? mode
        : 'system';

    setThemeModeState(nextMode);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextMode);
    } catch {
      return;
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      themeMode,
      currentTheme,
      setThemeMode,
    }),
    [themeMode, currentTheme, setThemeMode],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;