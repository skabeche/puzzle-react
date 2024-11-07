/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.2rem',
        md: '1.4rem',
        lg: '1.6rem',
        xl: '2.2rem',
      },
    },
    fontFamily: {
      kaushan: ['Kaushan Script Regular', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        gray: {
          DEFAULT: '#9e9e9e',
          50: '#f9f9f9',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#888888',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
    },
  },
  plugins: [],
}
