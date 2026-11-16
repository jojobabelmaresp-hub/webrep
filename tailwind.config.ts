import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Times New Roman", "serif"],
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        belmar: {
          bg: "#f6f2eb",
          ink: "#2a2a2a",
          muted: "#6b6b6b",
          olive: "#5f6b45",
          oliveDark: "#4d5838",
          line: "#e7dfd4",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      spacing: {
        130: "520px", // 💡 for h-130
        160: "640px", // 💡 for md:h-160
      },
      height: {
        hero: "520px", // 🪶 optional semantic alias: h-hero
        "hero-md": "640px", // for md:h-hero-md
      },
    },
  },
  plugins: [],
};

export default config;
