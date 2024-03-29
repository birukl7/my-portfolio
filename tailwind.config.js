/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'blue-black' : '#020024',
        'dark-blue-1': '#302F4E',
        'bg-blue' : 'rgb(2,0,36)',
      },
      fontFamily:{
        Truculenta:['"Truculenta"', ],
        Inter : ['"Inter"',],
        RobotoCondensed : ['"Roboto Condensed"'],
      },
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'mg': '1024px',
      'xl': '1280px',
    },

    backgroundSize:{
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '98%': '98%',
      '100%': '100%',
      '105%': '105%'
    },

    // height:{
    //   'custom':'72px',
    // },
  },
  plugins: [],
}

