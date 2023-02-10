/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            dark: "#1E67AF",
            light: "#73B9FF"
          },
          gray: '#EDEBEB'
        }
      },
      fontFamily: {
        body: ["Nunito"],
        sans: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}