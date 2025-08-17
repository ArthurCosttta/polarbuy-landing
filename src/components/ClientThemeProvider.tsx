"use client";

import { ThemeProvider } from '@/contexts/ThemeContext';

interface ClientThemeProviderProps {
  children: React.ReactNode;
}

const ClientThemeProvider: React.FC<ClientThemeProviderProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ClientThemeProvider;
