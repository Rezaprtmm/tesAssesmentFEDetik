/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5468E7",
        darkBlue: "#232340",
        white: "#F5F5F5",
      },
      fontFamily: {
        lexend: ["Lexend Deca"],
      },
      backgroundImage: {
        "header-img": "url('../assets/img/header.png')",
      },
    },
  },
  plugins: [],
};
