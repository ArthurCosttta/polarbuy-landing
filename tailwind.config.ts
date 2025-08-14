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
        // Paleta de cores oficial da marca PolarBuy
        background: '#0D1B2A',    // Cor de fundo principal
        primary: '#E0E1DD',       // Cor do texto principal
        accent: '#FCA311',        // Cor de destaque
        card: '#1B263B',          // Cor de fundo para seções/cards
        
        // Variações para diferentes níveis de opacidade
        'primary/90': 'rgba(224, 225, 221, 0.9)',
        'primary/80': 'rgba(224, 225, 221, 0.8)',
        'primary/70': 'rgba(224, 225, 221, 0.7)',
        'primary/60': 'rgba(224, 225, 221, 0.6)',
        'primary/50': 'rgba(224, 225, 221, 0.5)',
        'primary/40': 'rgba(224, 225, 221, 0.4)',
        'primary/30': 'rgba(224, 225, 221, 0.3)',
        'primary/20': 'rgba(224, 225, 221, 0.2)',
        'primary/10': 'rgba(224, 225, 221, 0.1)',
        
        'accent/90': 'rgba(252, 163, 17, 0.9)',
        'accent/80': 'rgba(252, 163, 17, 0.8)',
        'accent/70': 'rgba(252, 163, 17, 0.7)',
        'accent/60': 'rgba(252, 163, 17, 0.6)',
        'accent/50': 'rgba(252, 163, 17, 0.5)',
        'accent/40': 'rgba(252, 163, 17, 0.4)',
        'accent/30': 'rgba(252, 163, 17, 0.3)',
        'accent/20': 'rgba(252, 163, 17, 0.2)',
        'accent/10': 'rgba(252, 163, 17, 0.1)',
        
        'card/90': 'rgba(27, 38, 59, 0.9)',
        'card/80': 'rgba(27, 38, 59, 0.8)',
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
        'accent': '0 10px 25px -3px rgba(252, 163, 17, 0.1), 0 4px 6px -2px rgba(252, 163, 17, 0.05)',
        'accent-lg': '0 20px 25px -5px rgba(252, 163, 17, 0.1), 0 10px 10px -5px rgba(252, 163, 17, 0.04)',
      },
    },
  },
  plugins: [],
}

export default config
