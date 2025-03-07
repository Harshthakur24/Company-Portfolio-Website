/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'blue': '#0075FF',
      "lightblue": "#DAEBFF",
      'lightgrey': '#AEC7E4',
      'navyblue': '#002834',
      'beach': '#8EA9C1',
      'circlebg' : "rgba(77, 213, 143, 0.25)",
      'darkblue' : ' #000321',
      'offwhite' : 'rgba(255, 255, 255, 0.75);',
      'bordertop' : 'rgba(196, 196, 196, 0.5);',
      'blue-500' : '#0075FF',
      'darkgray' : '#90A3B4',
      'babyblue' : '#E2F3F9',
      'grey500': '#ECECEC',
      'bluegray' : "#7D82A1",
      'bluegrey' : "#7C8F9E",
      'midnightblue' : '#183B56',
      'midblue' : '#00276F',
      'bluebg' : "rgba(47, 184, 227, 0.2)",
      'border' : "rgba(128, 135, 137, 0.35)",
      gray: {
        950: '#030712',
      }
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '65xl': ['65px', { lineHeight: '1' }],
      '80xl': ['80px', { lineHeight: '6rem' }],
    },
    extend: {
      animation: {
        'float': 'float 15s ease-in-out infinite',
        'float-delayed': 'float-delayed 18s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(20px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}