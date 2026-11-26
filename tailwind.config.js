/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aurea: {
          black: "#0D0D0D",
          charcoal: "#141414",
          graphite: "#1E1E1E",
          stone: "#2A2A28",
          sand: "#E5E0D8",
          beige: "#F4F1EA",
          cream: "#FAF8F5",
          accent: "#C5A880",
          bronze: "#9E7D53",
          muted: "#8C887B"
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace']
      },
      letterSpacing: {
        tighter: '-0.04em',
        widest: '0.25em',
        ultra: '0.35em'
      }
    },
  },
  plugins: [],
}
