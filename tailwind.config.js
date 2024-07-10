/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'pt-sans': ['PT Sans', 'sans-serif'],
      },
      screens: {
        xsm: '26.5625rem', // => @media (min-width: 425px) { ... }
        sm: '31.25rem', // => @media (min-width: 500px) { ... }
        md: '48rem', // => @media (min-width: 768px) { ... } --> use md: for tablet size
        lg: '64rem', // => @media (min-width: 1024px) { ... } --> use lg: for small laptop size
        xl: '80rem', // => @media (min-width: 1280px) { ... } --> use xl: for the small desktop size
        '2xl': '90rem', // => @media (min-width: 1440px) { ... } --> use 2xl: for the desktop size
        '3xl': '96rem', // => @media (min-width: 1536px) { ... } --> use 3xl: for the monitor size
        '4xl': '102rem', // => @media (min-width: 1632px) { ... } --> use 4xl: for the monitor size
      },
    },
    colors: {
      primary: '#FF7A00',
      'primary--v2': '#FF9A3D',
      'primary-light': '#FF9A3D',
      border: '#e5e7eb',
      'primary--light': '#E9D7FE',
      'body-copy--dark': '#393E41',
      'body-copy--light': '#ffffff',
      'body-copy': '#232323',
      'background-primary': '#181818',
      'background-secondary': '#ffffff',
      'background-tertiary': '#FAFAFA',
      'background-dark': '#232323',
      'background-grey-light': '#F6F6F6',
      'background-grey-dark': '#B4B4B4',
    },
    spacing: {
      vh: 'var(--vh)',
    },
  },
  plugins: [],
};
