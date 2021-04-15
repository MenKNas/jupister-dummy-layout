module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    maxWidth: {
      1400: "1400px",
    },
    extend: {
      colors: {
        "primary-bg-color": "#4444",
        "primary-text-color": "#7b3611",
        "secondary-color": "#346bff",
        "third-color": "#ff45f0",
        "header-bg": "#0B112B",
        "brand-primary": "#fddb4c",
        "brand-secondary": "#0064C7",
        "brand-third": "#DE1F36",
        "text-secondary": "#A9B7D5",
        "text-dark": "#011C41",
        "bg-primary": "#031A39",
        "bg-secondary": "#0D2950",
        "bg-darker": "#132B4E",
        "bd-primary": "#2A4977",
        "bg-account-primary": "#062146",
        "bd-focused": "#0064C7",
        "lower-grad": "#052D63",
      },
      width: {
        "7/10": "70%",
      },
      aspectRatio: {
        // defaults to {}
        none: 0,
        square: [1, 1], // or 1 / 1, or simply 1
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ["dark", "rounded"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar"),
  ],
};
