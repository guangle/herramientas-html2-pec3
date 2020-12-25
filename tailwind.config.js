const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        'color_fest_oscuro1' : '#011027',
        'color_fest_rosa' : '#ff00e6',
        'color_fest_azul' : '#00b5ec',
        'color_fest_amarillo' : '#ffeb3b',
        'color_fest_verde' : '#39ff14',
        cyan: colors.cyan,
      },
    },
    fontFamily: {
      trispace: ['Trispace', 'sans-serif'],
    },
    //Definimos nuestros propios anchos
    width: {
      'full' : '100%',
      'auto' : 'auto',
      '3' : '0.75rem',
      '3/10': '30%',
      '1/2' : '50%',
      '1/7': '14.2857143%',
      '2/7': '28.5714286%',
      '3/7': '42.8571429%',
      '4/7': '57.1428571%',
      '5/7': '71.4285714%',
      '6/7': '85.7142857%',
    },
    //Definimos las sombras propias del estilo de nuestro festival
    //para poder usar luego las clases generadas por tailwind
    boxShadow: {
      'azul' : '0 0 78px 4px rgba(16, 134, 232, 0.73)',
      'azul-small' : '1px 1px 4px #00b5ec',
      'multicolor' : 'inset 0 0 30px #fff, inset 10px 0 40px #f0f, inset -10px 0 40px #0ff, inset 10px 0 150px #f0f, inset -10px 0 150px #0ff, 0 0 30px #fff, -10px 0 40px #f0f, 10px 0 40px #0ff',
      'gris' : '16px 16px 8px rgba(150, 150, 150, 0.93)'
    },
    gridTemplateRows: {
     '6': 'repeat(5, 100px) 50px',
    },
    keyframes: {
      moverSombra: {
        '0%, 100%': { 'box-shadow' : '10px 10px 30px -8px rgba(255, 230, 107, 1)' },
        '25%': { 'box-shadow' : '10px 10px 30px -8px rgba(130, 35, 178, 1)' },
        '50%': { 'box-shadow': '10px 10px 30px -8px rgba(217, 3, 104, 1)' },
        '75%': { 'box-shadow' : '10px 10px 30px -8px rgba(241, 233, 218, 1)' }
    },
    spin : {
      '0%' :  { 'transform' : 'rotate(0deg)' } , 
      '100%' : { 'transform' : 'rotate(360deg)' }
    },
    ping : {
      '0%' : { 'transform' : 'scale(0.1, 0.1)' },
      '50%' : { 'opacity' : '1.0' },
      '100%' : { 'transform' : 'scale(1.2, 1.2)' }
    }
  },
    animation: {
      'ping-1': 'ping 1s linear',
      'spin-1': 'spin 1s linear',
      'moverSombra' :  'moverSombra 8s linear infinite'
     }
  },
  variants: {},
  plugins: [],
}
