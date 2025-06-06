import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        glow: '0 0 8px rgba(255, 255, 255, 0.5)',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        poppins: ['var(--font-poppins)'],
        intro: ['var(--font-intro)'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow': {
          'text-shadow': '0 0 8px rgba(255, 255, 255, 0.5)',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
