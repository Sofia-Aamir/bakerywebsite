/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          light: '#8B4513', // Light brown color
          DEFAULT: '#4a2c2a', // Default brown (for dark brown use)
          dark: '#3e1f1c', // Dark brown color
          yellow: '#FFFF00'
        },
      },
    },
  },
  plugins: [],
}
