// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D1B2A',     // Cor EXATA do fundo da logo
        primary: '#E0E1DD',        // Cor do urso e texto principal
        accent: '#FCA311',         // Amarelo vibrante para destaque
        card: '#1B263B',           // Um azul um pouco mais claro para cards
      },
    },
  },
  plugins: [],
}


