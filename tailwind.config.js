/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    screens: {
      '4xs': {'min': '256', 'max': '383'},
      // => @media (min-width: 256px and max-width: 383px) { ... }

      '3xs': {'min': '256', 'max': '383'},
      // => @media (min-width: 256px and max-width: 383px) { ... }

      '2xs': {'min': '384', 'max': '511'},
      // => @media (min-width: 384px and max-width: 511px) { ... }

      'xs': {'min': '512', 'max': '639'},
      // => @media (min-width: 512px and max-width: 639px) { ... }

      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
     
    },
  },
  plugins: [],
}

