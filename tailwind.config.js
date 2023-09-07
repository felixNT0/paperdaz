/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "290px",
        sm: "640px",
        md: "992px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        primary: "#77C360",
      },
      fontFamily: {
        default: ["Poppins", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
