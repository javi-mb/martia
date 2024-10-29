import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firacode: ["Fira Code", "monospace"],
      },
      container: {
        padding: "1rem",
        center: true,
      },
      backgroundImage: {
        "gradient-to-right":
          "linear-gradient(to right, rgba(252,214,255,0.7), rgba(41,216,255,0.7), rgba(255,253,128,0.7), rgba(248,154,191,0.7), rgba(252,214,255,0.7))",
      },
    },
  },
  plugins: [],
};
export default config;
