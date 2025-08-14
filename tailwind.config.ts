import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        polarbuy: {
          primary: '#FCA311',    // Amarelo vibrante
          secondary: '#1B263B',  // Azul escuro secundário
          dark: '#0D1B2A',       // Azul escuro principal
          light: '#E0E1DD',      // Creme claro
          accent: '#b0b2af',     // Cinza médio
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'polarbuy': '0 10px 25px -3px rgba(252, 163, 17, 0.1), 0 4px 6px -2px rgba(252, 163, 17, 0.05)',
      },
    },
  },
  plugins: [],
}

export default config
