/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        'deep-space': '#050510',
        'midnight': '#070714',
        'neon-purple': '#7F77DD',
        'electric-indigo': '#534AB7',
        'cyber-teal': '#1D9E75',
        'amber-gold': '#EF9F27',
        'soft-lavender': '#AFA9EC',
        'muted-blue': '#6677aa',
        'crimson-alert': '#E24B4A',
        'rose-dusk': '#D4537E',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'glow-indigo': '0 0 20px rgba(83, 74, 183, 0.3)',
        'glow-teal': '0 0 20px rgba(29, 158, 117, 0.3)',
        'glow-amber': '0 0 20px rgba(239, 159, 39, 0.3)',
        'glow-lg-indigo': '0 0 60px rgba(127, 119, 221, 0.45), 0 0 120px rgba(83, 74, 183, 0.25)',
        'glow-lg-teal': '0 0 60px rgba(29, 158, 117, 0.45), 0 0 120px rgba(29, 158, 117, 0.2)',
        'glow-lg-amber': '0 0 60px rgba(239, 159, 39, 0.45), 0 0 120px rgba(239, 159, 39, 0.2)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.08), inset 0 0 40px rgba(127,119,221,0.08)',
      },
      backgroundImage: {
        'mesh-purple': 'radial-gradient(at 20% 20%, rgba(127,119,221,0.28) 0px, transparent 45%), radial-gradient(at 80% 10%, rgba(29,158,117,0.18) 0px, transparent 40%), radial-gradient(at 70% 80%, rgba(239,159,39,0.14) 0px, transparent 45%), radial-gradient(at 10% 90%, rgba(212,83,126,0.14) 0px, transparent 40%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(80px) rotate(-360deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "dash-flow": {
          "0%": { strokeDashoffset: "200" },
          "100%": { strokeDashoffset: "0" },
        },
        "travel-dot": {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "aurora-drift": {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "33%": { transform: "translate(30px, -40px) rotate(4deg)" },
          "66%": { transform: "translate(-20px, 20px) rotate(-3deg)" },
        },
        "breathe": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "tilt": {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(0.5deg)" },
          "75%": { transform: "rotate(-0.5deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "ken-burns": "ken-burns 8s ease-out forwards",
        "float": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "scroll-up": "scroll-up 10s linear infinite",
        "orbit": "orbit 8s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "dash-flow": "dash-flow 2s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "aurora-drift": "aurora-drift 14s ease-in-out infinite",
        "breathe": "breathe 6s ease-in-out infinite",
        "tilt": "tilt 10s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}