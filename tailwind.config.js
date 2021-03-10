module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-bg-color": "#4444",
        "primary-text-color": "#7b3611",
        "secondary-color": "#346bff",
        "third-color": "#ff45f0",
        "main-bg": "#020821",
        "header-bg": "#0B112B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
