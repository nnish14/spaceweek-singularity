/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        space: {
          50: "#f5f5ff",
          100: "#ececff",
          200: "#d8d9ff",
          300: "#b8b8ff",
          400: "#9090ff",
          500: "#6b66ff",
          600: "#5046ff",
          700: "#4333ee",
          800: "#3525c4",
          900: "#2d229d",
          950: "#1c1466",
        },
        nebula: {
          50: "#fbf3ff",
          100: "#f6e6ff",
          200: "#eeccff",
          300: "#e3a3ff",
          400: "#d56bff",
          500: "#c33aff",
          600: "#ae17f1",
          700: "#9410cc",
          800: "#7a12a6",
          900: "#651286",
          950: "#420764",
        },
        cosmic: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#b9e6fe",
          300: "#7cd4fd",
          400: "#36bffa",
          500: "#0ca4eb",
          600: "#0082c8",
          700: "#0168a3",
          800: "#065986",
          900: "#0b4a6f",
          950: "#082f4d",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(107, 102, 255, 0.5), 0 0 10px rgba(107, 102, 255, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 15px rgba(107, 102, 255, 0.8), 0 0 20px rgba(107, 102, 255, 0.5)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        stars: {
          "0%": { opacity: 0.3 },
          "50%": { opacity: 0.8 },
          "100%": { opacity: 0.3 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        stars: "stars 4s ease-in-out infinite",
      },
      backgroundImage: {
        "space-gradient": "linear-gradient(to bottom, #0f0f1f, #1a1a3a)",
        "nebula-gradient": "linear-gradient(to right, rgba(107, 102, 255, 0.3), rgba(195, 58, 255, 0.3))",
        "cosmic-glow": "radial-gradient(circle, rgba(107, 102, 255, 0.15) 0%, rgba(10, 10, 30, 0) 70%)",
        "star-field": 'url("/stars-bg.png")',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

