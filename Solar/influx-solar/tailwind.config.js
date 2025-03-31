/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#3B82F6", // A modern sky blue
        secondaryGreen: "#10B981", // A vibrant green
        darkGray: "#1F2937", // For text and backgrounds
        lightGray: "#F3F4F6", // For light backgrounds
        accentYellow: "#FBBF24", // For highlights and CTAs
        "solar-darkblue": "#003366", // Replace with your desired dark blue
        "solar-blue": "#0073e6", // Replace with your desired blue
        "solar-yellow": "#FFC124",
        "solar-orange": "#FF7E24",
        "solar-darkblue": "#001F3F",
        "solar-green": "#4CAF50",
      },
    },
  },
  plugins: [],
};
