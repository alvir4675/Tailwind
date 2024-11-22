/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'ssm': '575px',

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1202px',
      // => @media (min-width: 1280px) { ... }
    },
      container: {
        center: true,
      },

    fontFamily: {
      'inter': ['Inter','serif'],
    },
    extend: {
      
        backgroundImage: {
          'hero-burger': "url('../img/image.png')",      
    }
  },
},
  plugins: [],
  darkMode: 'selector',
}

