import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF8",
        navy: "#0A0F2C",
        "navy-light": "#1A1F3C",
        accent: "#C4956A",
        "accent-light": "#D4A57A",
        "warm-gray": "#8A8A82",
        "light-gray": "#E8E8E4",
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
