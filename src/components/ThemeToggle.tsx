"use client";

import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-lg bg-card/80 hover:bg-card border border-primary/20 hover:border-accent/40 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
      aria-label={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      title={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
    >
      {theme === 'dark' ? (
        <FaSun className="text-accent text-lg" />
      ) : (
        <FaMoon className="text-accent text-lg" />
      )}
    </button>
  );
};

export default ThemeToggle;
