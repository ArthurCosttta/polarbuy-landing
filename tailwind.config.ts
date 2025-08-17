import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de cores oficial da marca PolarBuy - Tons ajustados para combinar perfeitamente
        background: '#0D1B2A',    // Cor de fundo principal (exata da logo)
        primary: '#E0E1DD',       // Cor do texto principal
        accent: '#FCA311',        // Cor de destaque
        card: '#1B263B',          // Cor de fundo para seções/cards
        
        // Variações de fundo para integração perfeita com a logo
        'background/95': 'rgba(13, 27, 42, 0.95)',  // Fundo com 95% opacidade
        'background/90': 'rgba(13, 27, 42, 0.9)',   // Fundo com 90% opacidade
        'background/85': 'rgba(13, 27, 42, 0.85)',  // Fundo com 85% opacidade
        'background/80': 'rgba(13, 27, 42, 0.8)',   // Fundo com 80% opacidade
        'background/75': 'rgba(13, 27, 42, 0.75)',  // Fundo com 75% opacidade
        'background/70': 'rgba(13, 27, 42, 0.7)',   // Fundo com 70% opacidade
        'background/60': 'rgba(13, 27, 42, 0.6)',   // Fundo com 60% opacidade
        'background/50': 'rgba(13, 27, 42, 0.5)',   // Fundo com 50% opacidade
        'background/40': 'rgba(13, 27, 42, 0.4)',   // Fundo com 40% opacidade
        'background/30': 'rgba(13, 27, 42, 0.3)',   // Fundo com 30% opacidade
        'background/20': 'rgba(13, 27, 42, 0.2)',   // Fundo com 20% opacidade
        'background/10': 'rgba(13, 27, 42, 0.1)',   // Fundo com 10% opacidade
        
        // Variações de texto para contraste perfeito
        'primary/95': 'rgba(224, 225, 221, 0.95)',
        'primary/90': 'rgba(224, 225, 221, 0.9)',
        'primary/85': 'rgba(224, 225, 221, 0.85)',
        'primary/80': 'rgba(224, 225, 221, 0.8)',
        'primary/75': 'rgba(224, 225, 221, 0.75)',
        'primary/70': 'rgba(224, 225, 221, 0.7)',
        'primary/60': 'rgba(224, 225, 221, 0.6)',
        'primary/50': 'rgba(224, 225, 221, 0.5)',
        'primary/40': 'rgba(224, 225, 221, 0.4)',
        'primary/30': 'rgba(224, 225, 221, 0.3)',
        'primary/20': 'rgba(224, 225, 221, 0.2)',
        'primary/10': 'rgba(224, 225, 221, 0.1)',
        
        // Variações de destaque para melhor integração
        'accent/95': 'rgba(252, 163, 17, 0.95)',
        'accent/90': 'rgba(252, 163, 17, 0.9)',
        'accent/85': 'rgba(252, 163, 17, 0.85)',
        'accent/80': 'rgba(252, 163, 17, 0.8)',
        'accent/75': 'rgba(252, 163, 17, 0.75)',
        'accent/70': 'rgba(252, 163, 17, 0.7)',
        'accent/60': 'rgba(252, 163, 17, 0.6)',
        'accent/50': 'rgba(252, 163, 17, 0.5)',
        'accent/40': 'rgba(252, 163, 17, 0.4)',
        'accent/30': 'rgba(252, 163, 17, 0.3)',
        'accent/20': 'rgba(252, 163, 17, 0.2)',
        'accent/10': 'rgba(252, 163, 17, 0.1)',
        
        // Variações de card para seções mais sutis
        'card/95': 'rgba(27, 38, 59, 0.95)',
        'card/90': 'rgba(27, 38, 59, 0.9)',
        'card/85': 'rgba(27, 38, 59, 0.85)',
        'card/80': 'rgba(27, 38, 59, 0.8)',
        'card/75': 'rgba(27, 38, 59, 0.75)',
        'card/70': 'rgba(27, 38, 59, 0.7)',
        'card/60': 'rgba(27, 38, 59, 0.6)',
        'card/50': 'rgba(27, 38, 59, 0.5)',
        'card/40': 'rgba(27, 38, 59, 0.4)',
        'card/30': 'rgba(27, 38, 59, 0.3)',
        'card/20': 'rgba(27, 38, 59, 0.2)',
        'card/10': 'rgba(27, 38, 59, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        'accent': '0 10px 25px -3px rgba(252, 163, 17, 0.1), 0 4px 6px -2px rgba(252, 163, 17, 0.05)',
        'accent-lg': '0 20px 25px -5px rgba(252, 163, 17, 0.1), 0 10px 10px -5px rgba(252, 163, 17, 0.04)',
        'background': '0 10px 25px -3px rgba(13, 27, 42, 0.1), 0 4px 6px -2px rgba(13, 27, 42, 0.05)',
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
    },
  },
  plugins: [],
};

export default config;
