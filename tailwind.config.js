/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        customPurple: "#753df7",
        customBlue: "#364bc0",
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        // Desktop
        "tech-marquee-lg": "tech-marquee 25s linear infinite",
        // Tablet
        "tech-marquee-md": "tech-marquee 35s linear infinite",
        // Mobile
        "tech-marquee-sm": "tech-marquee 10s linear infinite",
      },
      keyframes: {
        "marquee": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "tech-marquee": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
