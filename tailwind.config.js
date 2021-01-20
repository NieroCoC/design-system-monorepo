module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production" ? true : false,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  prefix: "msk-",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        tiny: "9px",
      },
      colors: {
        primary: {
          base: "#0968C3",
          shadow: "#064785",
          accent: "#4DA4FA",
          "accent-hover": "#1B8BF9",
          highlight: "#F7FBFF",
          "highlight-light": "#F4FAFE",
          "primary-light": "#D4E7FA",
          overlay: "#1C73CA",
        },
        secondary: {
          base: "#38657f",
          shadow: "#1F3C4C",
          accent: "#4F86A6",
          "accent-hover": "#3F6A83",
          highlight: "#DDF0FC",
        },
        core: {
          "neutral-black": "#222222",
        },
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
