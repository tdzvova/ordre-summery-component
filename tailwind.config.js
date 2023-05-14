/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    screens:  {
      lg: '1440px',
      xl: '1440px',
      '2xl':  '1440px',
      
    },
    fontFamily: {
      RedHatDisplay:  ['RedHatDisplay, sans-serif']
    },
    extend: {
      colors: {
        PaleBlue: 'hsl(225, 100%, 94%)',
        BrightBlue: 'hsl(245, 75%, 52%)',
        VeryPaleBlue: 'hsl(225, 100%, 98%)',
        DesaturatedBlue: 'hsl(224, 23%, 55%)',
        DarkBlue: 'hsl(223, 47%, 23%)',

      },
    },
  },
  plugins: [],
}

