/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xLarge: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        large: { max: "1070px" },
        // => @media (max-width: 1023px) { ... }

        medium: { max: "840px" },
        // => @media (max-width: 767px) { ... }

        small: { max: "651px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        whitedark: "#F0F0F0",
        primary: "#FFFFFF",
        secondory: "#000000",
      },
      fontFamily: {
        satoshiBold: ["Satoshi-Bold", "sans-serif"],
        satoshi500: ["Satoshi-Medium", "sans-serif"],
        satoshireguler: ["Satoshi-Regular", "sans-serif"],
        secondary: ["intergralcf-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
