import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#05293c",
        primary: "#ffcb08",
        secondary: "#031018",
        stroke: "#EBEFF4",
        dark: "#03131c",
        body: "#79808A",
        gray: "#F8F9FF",
        "stroke-dark": "#34374A",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(55.15deg, #8EA5FE -7.09%, #BEB3FD 51.72%, #90D1FF 101.48%)",
        "gradient-2": "linear-gradient(120.12deg, #FF8FE8 0%, #FFC960 100%)",
        "gradient-3":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%)",
        "gradient-4":"linear-gradient(120deg, #832af5, #0871bd, #0fe7f5, #0871bd, #832af5), linear-gradient(120deg, #832af5, #0871bd, #0fe7f5, #0871bd, #832af5);",
        texture: "url('/images/graphics/texture.svg')",
      },
      screens: {
        xs: "450px",
        "3xl": "1500px",
      },
      boxShadow: {
        card: "0px 1px 5px rgba(45, 74, 170, 0.14)",
        "card-dark": "0px 1px 5px rgba(16, 25, 55, 0.14)",
        input: "0px 10px 30px rgba(74, 108, 247, 0.08)",
      },
      dropShadow: {
        card: "0px 1px 5px rgba(45, 74, 170, 0.14)",
        "card-dark": "0px 1px 5px rgba(16, 25, 55, 0.14)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translate3d(0, -20px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translate3d(-20px, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translate3d(20px, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s both',
        fadeInDown: 'fadeInDown 1s both',
        fadeInLeft: 'fadeInLeft 1s both',
        fadeInRight: 'fadeInRight 1s both',
        fadeInUp: 'fadeInUp 1s both',
        'fadeIn-infinite': 'fadeIn 1s infinite both',
        'fadeInDown-infinite': 'fadeInDown 1s infinite both',
        'fadeInLeft-infinite': 'fadeInLeft 1s infinite both',
        'fadeInRight-infinite': 'fadeInRight 1s infinite both',
        'fadeInUp-infinite': 'fadeInUp 1s infinite both',
        'fadeIn-delay-1s': 'fadeIn 1s both 1s',
        'fadeIn-delay-2s': 'fadeIn 1s both 2s',
        'fadeIn-delay-3s': 'fadeIn 1s both 3s',
        'fadeIn-delay-4s': 'fadeIn 1s both 4s',
        'fadeIn-delay-5s': 'fadeIn 1s both 5s',
        'fadeIn-fast': 'fadeIn 800ms both',
        'fadeIn-faster': 'fadeIn 500ms both',
        'fadeIn-slow': 'fadeIn 2s both',
        'fadeIn-slower': 'fadeIn 3s both',
      },
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [],
};
export default config;
