import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        // "Luxury Paper" Palette
        paper: "#FAF9F6", // Pearl White
        surface: "#FFFFFF",
        ink: "#0C0A09", // Warm Black

        // "Premium Gold" Brand Color
        cobalt: {
          DEFAULT: "#D4AF37", // Metallic Gold
          50: "#FCF9EE",
          100: "#F6F0D5",
          200: "#EDDEAC",
          300: "#E3CB82",
          400: "#D4AF37",
          500: "#B59226",
          600: "#8E7019",
          700: "#685112",
          800: "#45350C",
          900: "#261D06",
          950: "#130E02",
        },

        // Brand Alias for SplashScreen
        brand: {
          DEFAULT: "#D4AF37",
          accent: "#F3E5AB", // Champagne
          steel: "#78716C", // Stone 500
          950: "#130E02",
        },

        // Technical Grays (Warm Stones)
        tech: {
          100: "#F5F5F4", // Stone 100
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          900: "#1C1917",
        },

        // Accents - Replaced Green/Blue with Platinum/Silver
        cyan: {
          300: "#E2E8F0", // Platinum
          400: "#CBD5E1",
          500: "#94A3B8",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #E7E5E4 1px, transparent 1px), linear-gradient(to bottom, #E7E5E4 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
        "blue-gradient": "linear-gradient(135deg, #D4AF37 0%, #B59226 100%)", // Gold Gradient
        "cyan-gradient": "linear-gradient(135deg, #F3E5AB 0%, #D4AF37 100%)", // Champagne to Gold
        "metal-gradient": "linear-gradient(145deg, #ffffff 0%, #F5F5F4 100%)",
        glass: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(212, 175, 55, 0.25)",
        "glow-hover": "0 0 30px rgba(212, 175, 55, 0.35)",
      },
      animation: {
        scan: "scan 4s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "splash-pulse": "splash-pulse 3s ease-out infinite",
        "splash-zoom": "splash-zoom 1.5s ease-out forwards",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "splash-pulse": {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        "splash-zoom": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
