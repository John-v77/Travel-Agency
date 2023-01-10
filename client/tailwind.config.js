/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      accent: ["Lato", "Open Sans"],
      paragraph: ["Roboto", "Open Sans"],
    },
    fontSize: {
      title: `2.6rem;`,
      normal: `1.2rem;`,
    },
    extend: {
      colors: {
        primary: "#FFFF63",
        secondary: "#000001",
        neutral: "#222222",
      },
    },
  },
  plugins: [],
};
