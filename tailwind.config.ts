import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "press-start": ["var(--font-press-start)", "sans-serif"],
        "russo-one": ["var(--font-russo-one)", "sans-serif"],
        creepster: ["var(--font-creepster)", "cursive"],
      },
      colors: {
        "pokemon-yellow": "#FFCB05",
        "pokemon-blue": "#3D7DCA",
        "background-gray": "#303943",
        "sw-yellow": "#FFE81F",
        "rm-green": "#AFDF33",
        "rm-blue": "#07BACF",
        "things-yellow": "#FFCB05",
        "cc-gold": "#F7931A",
        "cc-dark": "#0A0E10",
      },
    },
  },
};
export default config;
