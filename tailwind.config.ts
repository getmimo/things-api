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
      },
      colors: {
        "pokemon-yellow": "#FFCB05",
        "pokemon-blue": "#3D7DCA",
        "pokemon-red": "#FF0000",
        "pokemon-green": "#008000",
        "pokemon-gray": "#303943",
      },
    },
  },
  plugins: [],
};
export default config;
