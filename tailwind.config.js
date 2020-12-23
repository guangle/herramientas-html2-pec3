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
      'multicolor' : 'inset 0 0 30px #fff, inset 10px 0 40px #f0f, inset -10px 0 40px #0ff, inset 10px 0 150px #f0f, inset -10px 0 150px #0ff, 0 0 30px #fff, -10px 0 40px #f0f, 10px 0 40px #0ff',
      'gris' : '16px 16px 8px rgba(150, 150, 150, 0.93)'
    },
    gridTemplateRows: {
     '6': 'repeat(5, 100px) 50px',
    }
  },
  variants: {},
  plugins: [],
}
