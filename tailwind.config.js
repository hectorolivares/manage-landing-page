/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'man-red': '#F3613C',
        'man-red-light': '#F98F75',
        'man-dark-blue': '#1E1E26',
      }
    },
  },
  plugins: [],
}