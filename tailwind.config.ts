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
        "press-start": ['"Press Start 2P"', "sans-serif"],
        "russo-one": ['"Russo One"', "sans-serif"],
      },
      colors: {
        "pokemon-yellow": "#FFCB05",
        "pokemon-blue": "#3D7DCA",
        "background-gray": "#303943",
        "sw-yellow": "#FFE81F",
      },
    },
  },
  plugins: [],
};
export default config;
