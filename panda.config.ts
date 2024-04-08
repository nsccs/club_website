import { defineConfig, defineGlobalStyles, defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  fadeInFromAboveAnim: {
      '0%': { opacity: 0, transform: "translate(-50%, -80%)" },
      '100%': { opacity: 1, transform: "translate(-50%, -50%)" },
  },
});

const globalCss = defineGlobalStyles({
  h1:{
    fontSize:{
      base: "xl",
      sm: "3xl",
      md: "5xl",
      lg: "7xl",
    },
  },

  h2:{
    fontSize:{
      base: "md",
      sm: "2md",
      md: "2xl",
      lg: "4xl",
    },
  },
  p:{
    fontSize:{
      base: "xl",
      sm: "2xl",
      md: "3xl",
    },
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}", "./style/**/*.{ts,tsx,js,jsx}", "./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: { tokens:{
      colors:{
        CSClubBlue: { value: "#004da8" },
      },
    }, keyframes },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",

  globalCss,

});
