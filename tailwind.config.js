/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#0a012a', 
        'neon-cyan': '#00ffff', 
        'neon-magenta': '#f155ff', 
        'neon-purple': '#bf00ff', 
        'dark-border': '#1e1a3a', 
      },
    },
  },
  plugins: [],
}