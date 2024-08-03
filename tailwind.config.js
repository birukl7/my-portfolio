/** @type {import('tailwindcss').Config} */
import bgImage from '/images/body-images/bg-image-1.jpg';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image': `url(/images/body-images/bg-image-1.jpg)`,
      }),
      screens:{
        'cs': '1096px',
      },
      colors:{
        'blue-black' : '#020024',
        'dark-blue-1': '#302F4E',
        'bg-blue' : 'rgb(2,0,36)',
        'custom-color-1': '#fff',
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      fontFamily:{
        Truculenta:['"Truculenta"', ],
        Inter : ['"Inter"',],
        RobotoCondensed : ['"Roboto Condensed"'],
        RocknRollOne : ['"RocknRoll One"']
      },
      inset:{
        'custom-right': '840px'
      },
      width:{
        'custom-w': '315px'
      },
      padding:{
        'custom-p': '315px'
      },
      margin:{
        'custom-m': '315px'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
        },

      },
      animation: {
        wiggle: 'wiggle 30s ease-in-out infinite',
      }
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

