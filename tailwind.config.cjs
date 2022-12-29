/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['poppins'],
      'rubik': ['rubik']
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4a3288",
          "secondary": "#01fabe",
          "accent": "#7651ee",
          "neutral": "#4a3288",
          "base-100": "#F2F2F3",
          "info": "#f85fbf",
          "success": "#198A46",
          "warning": "#C6780C",
          "error": "#F8766D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
