import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: '100%', // На экранах sm контейнер будет 100% ширины
        md: '100%', // На экранах md контейнер будет 100% ширины
        lg: '96rem', // На экранах lg контейнер будет 1024px шириной
        xl: '96rem', // На экранах xl контейнер будет 1280px шириной
        "2xl": "96rem",
      },
    },
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
        dark72: "#000000B8",
        yellow: "#FFC423",
        dark: "#0B0B0B",
        greyText: "#979797",
        yellowOpacity: "#FFEAB0",
        white71: '#E8E8E8B5',
        gray: '#A3A3A3',
        grayA7: '#A7A7A7',
        gray74: '#747474BD',
        whiteYellow: '#FFF3D0',
        yellowWhite47: '#EEBE3978',
        yellow69: '#FFE292B0',
        yellow70: '#FFD35AB2',
        gray83: '#1A1A1AD4',
        brown9: '#8F7E7E17',
        whiteF5: '#F5F5F5',
        whote72: '#FFFFFFB8',
        gray23: '#6363633B',
        yellow53: '#FFE39587',
        gray9E: '#9E9E9E',
        red: '#FF6565',
        grayBE: '#BEBEBE',
        yellow33: '#E3B62154',
        gray37: '#4949495E'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "slideInFromLeft":{
          '0%': { 
            transform: 'translateX(-100%)'
          },
          '100%': { 
            transform: 'translateX(0)' 
          },
        },
        "slideToFromLeft":{
          '0%': { 
            transform: 'translateX(0)'
          },
          '100%': { 
            transform: 'translateX(-100%)' 
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slideInFromLeft": 'slideInFromLeft 300ms ease-out',
        "slideToFromLeft": 'slideToFromLeft 300ms ease-out'
      },
    },
    fontSize: {
      10: "0.625rem",
      11: "0.688rem",
      13: "0.813rem",
      24: "1.5rem",
      32: "2rem"
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config