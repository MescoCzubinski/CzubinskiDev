import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        light: "#e0e0e0",
        dark: "#0e0e0e",
      },
    },
  },
  plugins: [],
};

export default config;
