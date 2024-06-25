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
      gap: {
        xs: "5px",
        sm: "10px",
        md: "20px",
        lg: "30px",
        xl: "40px",
      },
      margin: {
        xs: "5px",
        sm: "10px",
        md: "20px",
        lg: "30px",
        xl: "40px",
      },
      padding: {
        xs: "5px",
        sm: "10px",
        md: "20px",
        lg: "30px",
        xl: "40px",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: {
          100: "#FFC355",
          200: "#faecd3",
          300: "#f0d7aa",
          400: "#EACA8F",
          500: "#dfaf56",
          600: "#dba33e",
          700: "#d89d30",
          800: "#bf8922",
          900: "#ab791a",
        },
      },
    },
  },
  plugins: [],
};
