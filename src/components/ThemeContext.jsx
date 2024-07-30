import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const systemTheme = () => {
    const darkQuery = !window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(darkQuery ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, systemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
