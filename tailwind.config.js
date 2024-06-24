/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Inter, sans-serif", // Adds a new `font-display` class
      },
      borderRadius: {
        xs: "0.25rem", // 4
        sm: "0.625rem", //10
        md: "1rem", //16
        lg: "1.875rem", //30
        xl: "2.5rem", //40
      },
      gridTemplateRows: {
        min: "min-content",
      },
      scale: {
        80: "0.8",
        60: "0.6",
      },
    },
  },
  plugins: [],
};
