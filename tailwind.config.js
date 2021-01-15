module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production" ? true : false,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@msk/tailwind-config")],
};
