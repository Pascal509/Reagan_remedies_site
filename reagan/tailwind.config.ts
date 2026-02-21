import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1a6cff",
          soft: "#e6efff",
          navy: "#0a2a66",
          neutral: "#6b7280",
          clinical: "#17a673"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      spacing: {
        "space-7": "1.75rem",
        "space-9": "2.25rem",
        "space-18": "4.5rem",
        "space-22": "5.5rem",
        "space-26": "6.5rem",
        "space-30": "7.5rem"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem"
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
          "2xl": "1440px"
        }
      }
    }
  },
  plugins: []
};

export default config;
