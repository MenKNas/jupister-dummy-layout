module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        slidein: "slidein 2s linear 0s",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(-100)" },
          "50%": { transform: "translateX(-50)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      transitionProperty: { visibility: "visibility" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
