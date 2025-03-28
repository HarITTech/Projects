/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#3B82F6', // A modern sky blue
        secondaryGreen: '#10B981', // A vibrant green
        darkGray: '#1F2937', // For text and backgrounds
        lightGray: '#F3F4F6', // For light backgrounds
        accentYellow: '#FBBF24', // For highlights and CTAs
      },
    },
  },
  plugins: [],
}