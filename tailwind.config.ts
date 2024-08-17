import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gigas: {
          '50': '#f9f7fd',
          '100': '#f1ecfb',
          '200': '#e5ddf7',
          '300': '#d1c1f1',
          '400': '#b49ae6',
          '500': '#9772da',
          '600': '#7f54c9',
          '700': '#6b41af',
          '800': '#563687',
          '900': '#4b2f74',
          '950': '#301853',
        },
      },
      gridTemplateColumns: {
        app: 'minmax(19rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
      },
    },
  },
  plugins: [],
};
export default config;
