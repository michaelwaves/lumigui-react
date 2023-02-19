/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#ef4666",
        "primary-light": "#f69b9a",
        "secondary": "#84af9c",
        "secondary-light": "#5c7a6d",
        "secondary-dark": "#3d5b4f",
        "tertiary": "#009ef7",
        "tertiary-light": "#5cc1f7",
        "tertiary-dark": "#0700be",
      },
      fontFamily: {body: ["Josefin Sans"], title: ["Helvetica"], sans: ["Libre Franklin"]},
    },
  },
  plugins: [],
}
