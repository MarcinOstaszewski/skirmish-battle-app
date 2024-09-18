/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      maxHeight: {
        '18': '4.5rem',
      },
      maxWidth: {
        '100': '25rem',
      }
    },
  },
  plugins: [],
  darkMode: 'media'
}

