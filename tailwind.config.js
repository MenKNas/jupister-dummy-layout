module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      },
      width: {
        "7/10": "70%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
