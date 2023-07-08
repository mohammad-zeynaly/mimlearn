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
      colors: {
        primary: "#ec406a",
      },
    },
  },
  plugins: [],
};
