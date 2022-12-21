/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: { 
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        lightBlue: '#5983FC',
        blue: '#3E60C1',
        darkBlue: '#2E4583',
        extraDarkBlue: '#293556'
      }
    },
  },
  plugins: [],
}
