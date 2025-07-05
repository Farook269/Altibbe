import type { Config } from "tailwindcss";

export default {
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
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        // Add this for navbar visibility
        navbar: {
          DEFAULT: '#1e2e22',               // dark greenish shade
          foreground: '#fefefe'
        },
        earth: {
          50: '#f9f7f4',
          100: '#f0ebe2',
          200: '#e1d4c4',
          300: '#d0baa1',
          400: '#c1a082',
          500: '#b8926b',
          600: '#a67c5a',
          700: '#8a654b',
          800: '#705340',
          900: '#5c4535',
        },
        sage: {
          50: '#f6f8f4',
          100: '#e9f0e4',
          200: '#d5e2ca',
          300: '#b5cca4',
          400: '#94b67a',
          500: '#799f5a',
          600: '#5e7d44',
          700: '#4c6237',
          800: '#3f5030',
          900: '#36432a',
        },
        gold: {
          50: '#fefdf4',
          100: '#fdf9e8',
          200: '#f9f0c5',
          300: '#f4e397',
          400: '#eed368',
          500: '#e5c144',
          600: '#d4a934',
          700: '#b18b2c',
          800: '#8f6f2a',
          900: '#765c28',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
