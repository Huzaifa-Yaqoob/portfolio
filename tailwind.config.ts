/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      boxShadow: {
        inerglow: "inset 0px 0px 16px 0px hsla(260 100% 90% )",
        inerglowRemove: "inset 0px 0px 0px 0px hsla(260 100% 90% )",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/container.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
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
        absolute: {
          white: "hsl(0 0% 0%)",
          black: "hsl(0 0% 100%)",
        },
        purpleShades: {
          p50: "hsl(260 100% 50%)",
          p60: "hsl(260 100% 60%)",
          p70: "hsl(260 100% 70%)",
          p80: "hsl(260 100% 80%)",
          p90: "hsl(260 100% 90%)",
          p95: "hsl(260 100% 95%)",
          p97: "hsl(260 100% 97%)",
          p99: "hsl(260 100% 99%)",
        },
        peachShades: {
          p85: "hsl(40 21% 85%)",
          p90: "hsl(40 21% 90%)",
          p92: "hsl(40 21% 92%)",
          p95: "hsl(40 21% 95%)",
          p96: "hsl(40 21% 96%)",
          p97: "hsl(40 21% 97%)",
          p98: "hsl(40 21% 98%)",
          p99: "hsl(40 21% 99%)",
        },
        greyShades: {
          g10: "hsl(0 0% 10%)",
          g20: "hsl(0 0% 20%)",
          g30: "hsl(0 0% 30%)",
          g40: "hsl(0 0% 40%)",
          g50: "hsl(0 0% 50%)",
          g60: "hsl(0 0% 60%)",
          g70: "hsl(0 0% 70%)",
          g80: "hsl(0 0% 80%)",
        },
        otherColors: {
          purple: "hsl(277 100% 50%)",
          purpleLight: "hsl(277 100% 82%)",
          green: "hsl(97 86% 46%)",
          greenLight: "hsl(97 100% 63%)",
          yellow: "hsl(47 100% 57%)",
          yellowLight: "hsl(47 100% 85%)",
          orange: "hsl(22 100% 57%)",
          orangeLight: "hsl(22 100% 77%)",
          pink: "hsl(306 100% 57%)",
          pinkLight: "hsl(306 100% 82%)",
          blue: "hsl(223 100% 57%)",
          blueLight: "hsl(223 100% 79%)",
          red: "hsl(0 100% 57%)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
