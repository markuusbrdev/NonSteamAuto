/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'adwaita-card': 'var(--adwaita-card)',
        'adwaita-bg': 'var(--adwaita-bg)',
        'adwaita-blue': 'var(--adwaita-blue)',
        'adwaita-text': 'var(--adwaita-text)',
        'adwaita-text-secondary': 'var(--adwaita-text-secondary)'
      }
    },
  },
  plugins: [],
}
