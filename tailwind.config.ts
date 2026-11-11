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
        background: "#0A0A0A",
        surface: {
          DEFAULT: "#111111",
          card: "#141414",
          muted: "#181818",
        },
        offwhite: {
          DEFAULT: "#EDEAE3",
          muted: "#8A8A85",
          dim: "#4A4A46",
        },
        lime: {
          DEFAULT: "#C6FF3D",
          hover: "#D6FF66",
          dim: "rgba(198, 255, 61, 0.15)",
        },
        live: "#FF5A36",
        hairline: "rgba(237, 234, 227, 0.12)",
        "hairline-bright": "rgba(237, 234, 227, 0.25)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "rec-blink": "recBlink 1.4s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "film-roll": "filmRoll 12s ease-in-out infinite alternate",
      },
      keyframes: {
        recBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        filmRoll: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-8%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
