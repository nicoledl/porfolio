/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      md: '5rem',
      lg: '10rem',
      xl: '20rem',
    },
  },
  plugins: [],
};
