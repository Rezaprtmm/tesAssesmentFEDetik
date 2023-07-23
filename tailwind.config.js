/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5468E7",
        offWhite : "#F5F5F5",
        darkBlue : "#232340",
        
      },
      fontFamily: {
        lexend: ["Lexend Deca"],
      },
      marginRight: {
        "80": "140px",
      },
      fontSize: {
        "custom-size": "34px",
      },
      backgroundImage: (theme) => ({
        'header-img' : "url('../assets/img/header.png')",
      }),

    },
  },
  plugins: [],
};
