/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#609cdc",
        "medium-blue": "#3a79b8",
        "dark-blue": "#283444",
        "dark-green": "#08b4a4",
        "dark-brown": "#606474",
        "light-gray": "#fffcfc",
        "medium-gray": "#879aae",
        "dark-gray": "#424242",
        "medium-red": "#f44336"
      },
      fontFamily: {
        alegreya: ["Alegreya Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        baskerville: ["Libre Baskerville", "serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}
