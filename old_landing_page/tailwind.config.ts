import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - Deep terracotta (earthy, trustworthy, distinctively African)
        primary: {
          50: "#fef7f4",
          100: "#feedeb",
          200: "#fedbdf",
          300: "#ffbfb3",
          400: "#ff977f",
          500: "#f76a4d", // Main brand color
          600: "#e54d2e",
          700: "#c13a1f",
          800: "#9f311c",
          900: "#842d1d",
          950: "#471409",
          DEFAULT: "#f76a4d",
        },
        
        // Secondary - Sage green (health, growth, calming)
        secondary: {
          50: "#f4f9f4",
          100: "#e6f2e6",
          200: "#cde4cd",
          300: "#a5cfa6",
          400: "#75b478",
          500: "#519954", // Main secondary
          600: "#3e7a42",
          700: "#346138",
          800: "#2d4e30",
          900: "#264129",
          950: "#112313",
          DEFAULT: "#519954",
        },
        
        // Accent - Golden yellow (energy, optimism, Nigerian identity)
        accent: {
          50: "#fefcf3",
          100: "#fff8e1",
          200: "#fff0c2",
          300: "#ffe38a",
          400: "#ffcf4a",
          500: "#f5b800", // Main accent
          600: "#d99a00",
          700: "#b57a00",
          800: "#94610a",
          900: "#785010",
          950: "#462b05",
          DEFAULT: "#f5b800",
        },
        
        // Emergency - Urgent attention (for ambulance, emergency features)
        emergency: {
          50: "#fff1f1",
          100: "#ffe2e2",
          200: "#ffc7c7",
          300: "#ff9d9d",
          400: "#ff6666",
          500: "#ed3333", // Emergency red
          600: "#d21a1a",
          700: "#b01313",
          800: "#931717",
          900: "#7a1919",
          950: "#430707",
          DEFAULT: "#ed3333",
        },
        
        // Trust - Deep blue for medical professionalism
        trust: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
          DEFAULT: "#2563eb",
        },
        
        background: {
          DEFAULT: "var(--background)",
        },
        
        foreground: {
          DEFAULT: "var(--foreground)",
          muted: "var(--muted-foreground)",
        },
        
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        
        success: "#16a34a",
        warning: "#ca8a04",
        error: "#dc2626",
        info: "#0891b2",
        
        patient: "#f76a4d",
        doctor: "#2563eb",
        hospital: "#519954",
        dispatcher: "#ed3333",
        ambulance: "#f5b800",
        admin: "#78716c",
      },
      
      fontFamily: {
        // Display font - Outfit (modern geometric, friendly)
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        
        // Body font - Plus Jakarta Sans (readable, professional)
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        
        // Mono font - JetBrains Mono (for technical content)
        mono: ["var(--font-jetbrains)", "Consolas", "monospace"],
      },
      
      fontSize: {
        // Custom fluid type scale
        "fluid-xs": ["clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)", { lineHeight: "1.5" }],
        "fluid-sm": ["clamp(0.875rem, 0.8rem + 0.35vw, 1rem)", { lineHeight: "1.5" }],
        "fluid-base": ["clamp(1rem, 0.9rem + 0.5vw, 1.125rem)", { lineHeight: "1.6" }],
        "fluid-lg": ["clamp(1.125rem, 1rem + 0.6vw, 1.25rem)", { lineHeight: "1.6" }],
        "fluid-xl": ["clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)", { lineHeight: "1.5" }],
        "fluid-2xl": ["clamp(1.5rem, 1.25rem + 1.25vw, 2rem)", { lineHeight: "1.35" }],
        "fluid-3xl": ["clamp(2rem, 1.5rem + 2.5vw, 3rem)", { lineHeight: "1.2" }],
        "fluid-4xl": ["clamp(2.5rem, 1.75rem + 3.75vw, 4rem)", { lineHeight: "1.1" }],
        "fluid-5xl": ["clamp(3rem, 2rem + 5vw, 5rem)", { lineHeight: "1" }],
      },
      
      spacing: {
        // Base 4px grid system
        "px": "1px",
        "0.5": "0.125rem",
        "1": "0.25rem",
        "1.5": "0.375rem",
        "2": "0.5rem",
        "2.5": "0.625rem",
        "3": "0.75rem",
        "3.5": "0.875rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
        "9": "2.25rem",
        "10": "2.5rem",
        "11": "2.75rem",
        "12": "3rem",
        "14": "3.5rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "28": "7rem",
        "32": "8rem",
        "36": "9rem",
        "40": "10rem",
        "44": "11rem",
        "48": "12rem",
        "52": "13rem",
        "56": "14rem",
        "60": "15rem",
        "64": "16rem",
        "72": "18rem",
        "80": "20rem",
        "96": "24rem",
        
        // Container widths
        "container-sm": "640px",
        "container-md": "768px",
        "container-lg": "1024px",
        "container-xl": "1280px",
        "container-2xl": "1440px",
      },
      
      borderRadius: {
        "sm": "0.25rem",
        "DEFAULT": "0.5rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "full": "9999px",
      },
      
      boxShadow: {
        "soft": "0 2px 8px -2px rgba(28, 25, 23, 0.08), 0 4px 16px -4px rgba(28, 25, 23, 0.12)",
        "medium": "0 4px 12px -4px rgba(28, 25, 23, 0.1), 0 8px 24px -8px rgba(28, 25, 23, 0.15)",
        "elevated": "0 8px 24px -8px rgba(28, 25, 23, 0.1), 0 16px 48px -16px rgba(28, 25, 23, 0.2)",
        "glow-primary": "0 0 30px -8px rgba(247, 106, 77, 0.4)",
        "glow-accent": "0 0 30px -8px rgba(245, 184, 0, 0.4)",
        "glow-trust": "0 0 30px -8px rgba(37, 99, 235, 0.4)",
        "glow-secondary": "0 0 30px -8px rgba(81, 153, 84, 0.4)",
        "inner-glow": "inset 0 2px 4px 0 rgba(28, 25, 23, 0.06)",
      },
      
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.6s ease-out",
        "fade-down": "fade-down 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "bounce-soft": "bounce-soft 2s infinite",
        "pulse-soft": "pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
        "float": "float 3s ease-in-out infinite",
      },
      
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "smooth-out": "cubic-bezier(0, 0, 0.2, 1)",
      },
      
      backdropBlur: {
        xs: "2px",
      },
      
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(280px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(280px, 1fr))",
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "linear-gradient(135deg, var(--tw-gradient-stops))",
        "noise": "url('/noise.png')",
      },
    },
  },
  plugins: [],
};

export default config;