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
        background: "url('/assets/imagens/lobby.png')",
      },
      colors: {
        "dark-10": "#000000",
        "dark-20": "#ffffff",
        "dark-30": "#e53939",
        "dark-40": "#b0c4de",
        "dark-50": "#9ca3af",
        "dark-60": "#36c",
        "dark-70": "#003692",
      },
    },
  },
  plugins: [],
};
export default config;
