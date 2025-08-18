// tailwind.config.js
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: '#0C2231',     // fundo = igual ao da logo
        primary:   '#E0E1DD',      // texto
        accent:    '#FCA311',      // amarelo
      },
    },
  },
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  plugins: [],
}
export default config
