import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  mode: "jit",
  theme: {
    extend: {
      colors: {
        commuz: {
          50: "#fff0f3",
          100: "#ffe2e9",
          200: "#ffcad8",
          300: "#ff9fb7",
          400: "#ff6993",
          500: "#fe1b5f",
          600: "#ec125e",
          700: "#c80850",
          800: "#a70a49",
          900: "#8f0c45",
          950: "#500121",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
