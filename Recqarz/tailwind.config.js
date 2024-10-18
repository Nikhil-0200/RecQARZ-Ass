/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      mobile: "320px",
      tablet: "640px",
      laptop: "1024px",
    },
    extend: {
      backgroundImage: {
        HomeBgImg: "url('/Images/bgImg.jpg')",
      },
    },
  },
  plugins: [],
};
