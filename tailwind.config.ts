import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        canvas: "var(--color-canvas)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        faint: "var(--color-faint)",
        line: "var(--color-line)",
        accent: "var(--color-accent)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
      maxWidth: {
        measure: "820px",
      },
    },
  },
  plugins: [],
};

export default config;
