import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  // mode: 'jit',

  theme: {
    extend: {},
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: '#000000',
    //   white: '#ffffff',
    //   link: '#599CFF',
    //   linkHover: '#5397FD',
    //   primary: {
    //     light: '#F29E87',
    //     normal: '#FF7246',
    //     hover: '#FF6534',
    //     darker: '#E46841',
    //   },
    //   secondary: {
    //     light: '#B6DF5D',
    //     normal: '#95DA02',
    //     hover: '#91D400',
    //     darker: '#78B90E',
    //   },
    //   negative: {
    //     normal: '#DDDDDD',
    //     hover: '#CCCCCC',
    //   },
    //   warning: {
    //     light: '#F0E5BB',
    //     normal: '#E9C33F',
    //     hover: '#CEA71C',
    //     darker: '#B79316',
    //   },
    //   danger: {
    //     light: '#F4B4B6',
    //     normal: '#CF393E',
    //     hover: '##C32D32',
    //     darker: '#921F24',
    //   },
    //   success: {
    //     light: '#C9E8D3',
    //     normal: '#5DBB7C',
    //     hover: '#48A868',
    //     darker: '#2E7044',
    //   },
    // },
  },
  plugins: [],
};
export default config;
