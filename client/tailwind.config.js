/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f6fc',
          100: '#b3e8f8',
          200: '#80d8f3',
          300: '#4dc8ed',
          400: '#26bce9',
          500: '#00a2d3', // Ecotellus Blue
          600: '#0092c4', 
          700: '#007eb0', 
          800: '#006a99',
          900: '#005881',
          950: '#003756',
        },
        accent: {
          50: '#f9fbe5',
          100: '#f0f6be',
          200: '#e6f093',
          300: '#dbed64',
          400: '#d1e63e',
          500: '#bbd700', // Ecotellus Lime Green
          600: '#a7b800',
          700: '#8e9600',
          800: '#767800',
          900: '#615f00',
        },
        dark: {
          800: '#1f2937',
          900: '#111827',
        },
        gray: {
          50: '#f0f7f9',
          100: '#daedf4',
          200: '#bbdeeb',
          300: '#8ec5db',
          400: '#5ba6c4',
          500: '#3d8aa9',
          600: '#356d8a',
          700: '#30586e',
          800: '#2c4a5c',
          900: '#283e4c',
          950: '#1a2933',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(51, 141, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(51, 141, 255, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
