/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "Open Sans"],
      roboto: ["Roboto", "Open Sans"],
    },
    fontSize: {
      title: `2.6rem;`,
      paragraph: `1.2rem;`,
    },
    extend: {
      colors: {
        primary: "#FFFF63",
        secondary: "#000001",
        decor: "#222222",
      },
    },
  },
  plugins: [],
};
