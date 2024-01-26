/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:  {
        eerieBlack: "#000000",
        platinum: "#E6E8E6",
        timberwolf: "#CED0CE",
        baseRed: "#F15025",
        viaOrange: "#E44100",
        toOrange: "#FF5D36"

      }
    },
  },
  plugins: [],
};
