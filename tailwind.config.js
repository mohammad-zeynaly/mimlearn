/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        vazirRegular: ["Vazir-Regular"],
        vazirMedium: ["Vazir-Medium"],
        vazirBold: ["Vazir-Bold"],
      },
      backgroundImage: {
        articleGradient:
          "linear-gradient(180deg,rgba(255,255,255,0) 60%,#fff 100%)",
        teacherDetailGradient:
          "linear-gradient(0deg, rgba(0,0,0,.8) 0, transparent 100%)",
      },
      colors: {
        primary: "#ec406a",
        secondary: "#adb5bd",
        third: "#BDC4CE",
        fourth: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
