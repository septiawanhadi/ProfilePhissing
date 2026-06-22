import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Read initial theme on client mount
    const getInitialTheme = (): 'light' | 'dark' => {
      const storedTheme = localStorage.getItem('web-agency-theme');
      if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return 'dark';
      }
      return 'light';
    };

    setTheme(getInitialTheme());

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.theme) {
        setTheme(customEvent.detail.theme);
      }
    };

    window.addEventListener('themechange', handleThemeChange);
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);

  return theme;
}
