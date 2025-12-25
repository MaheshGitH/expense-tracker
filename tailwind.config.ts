import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

const config: Config = {
  content: {
    files: [
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      screens: {
        sml: "20rem",
      },
      fontFamily: {
        lato: "var(--font-lato)",
        montserrat: "var(--font-montserrat)",
      },
      colors: {
        primary: "#1a1ab3",
        secondary: "#5f5f5f",
        danger: "#e64d4d",
        profit: "#059669",
        expense: "#a855f7",
        income: "#3b82f6",

        "profit-dark": "#16a34a",
        "danger-dark": "#db1f1f",

        "primary-bg": "#e8e8f7",
        "expense-bg": "#f4ecfc",
        "income-bg": "#e9f0fc",
        "surface-bg": "#EBEBEB",

        "dark-bg": "#1a1a1a",
        "dark-surface": "#212121",

        "expense-bg-dark": "#282030",
        "income-bg-dark": "#1f2632",
        "primary-bg-dark": "#1c1c2e",

        border: "#e1e1e1",
        "border-dark": "#383838",
      },
    },
  },
  darkMode: "selector",
  plugins: [fluid],
};
export default config;
