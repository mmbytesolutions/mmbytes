const { fontFamily } = require('tailwindcss/defaultTheme');
import { BREAKPOINTS } from './src/themes/interface';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}'],
  corePlugins: {
    // We are using our custom container.
    container: false,
  },
  theme: {
    screens: {
      ...BREAKPOINTS,
    },
    fontFamily: {
      primary: ['var(--font-primary)', ...fontFamily.sans],
      secondary: ['var(--font-secondary)', ...fontFamily.sans],
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.5rem', // 24px
      xl: '2rem', // 32px
      '2xl': '3rem', // 48px
      '3xl': '4.25rem', // 68px
      '4xl': '5.875rem', // 94px
    },
    extend: {
      colors: {
        primary: {
          light: '#DF2A19',
          DEFAULT: '#B91202',
        },
        accent: {
          100: '#FBF3F2',
          200: '#E3E3E3',
          700: '#1A1A1C',
          800: '#616670',
          900: '#141416',
        },
        body: '#BEBEBE',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(180deg,var(--tw-gradient-stops))',
      },
      spacing: {
        '5px': '.3125rem',
        '20px': '.625rem',
        '30px': '1.875rem',
      },
      letterSpacing: {
        wide: '.08em',
        widest: '.22em',
      },
      transitionProperty: {
        height: 'height',
      },
      transitionDuration: {
        350: '350ms',
        400: '400ms',
      },
      borderRadius: {
        5: '.3125rem',
        10: '.625rem',
        20: '1.25rem',
        30: '1.875rem',
        40: '2.5rem',
      },
      zIndex: {
        1: '1',
        44: '44',
        99: '99',
        111: '111',
        444: '444',
        444: '999',
      },
      boxShadow: {
        1: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
        2: '0px 0px 15px 10px rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        fadeInDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'infinite-scroll': {
          to: { transform: 'translateX(-50%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(-50%)' },
        },
        'float-bob-y': {
          '0%': {
            transform: 'translateY(-20px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(-20px)',
          },
        },
        'float-bob-x': {
          '0%': {
            transform: 'translateX(-20px)',
          },
          '50%': {
            transform: 'translateX(-10px)',
          },
          '100%': {
            transform: 'translateX(-20px)',
          },
        },
        'rotate-me': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        ripple: {
          '70%': {
            boxShadow: '0 0 0 40px rgba(10, 165, 205, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(10, 165, 205, 0)',
          },
        },
        'top-bottom-from-top': {
          '49%': {
            transform: 'translateY(-100%)',
          },
          '50%': {
            opacity: '0',
            transform: 'translateY(100%)',
          },
          '51%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        fadeInDown: 'fadeInDown 1s both 0s',
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
        'infinite-scroll-reverse':
          'infinite-scroll-reverse 40s linear infinite',
        'float-bob-y': 'float-bob-y 2s linear infinite',
        'rotate-me': 'rotate-me 25s linear infinite',
        'float-bob-x': 'float-bob-x 2s linear infinite',
        ripple: 'ripple 3s infinite',
        'top-bottom-from-top': 'top-bottom-from-top 0.5s forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
