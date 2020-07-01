import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222',
});

export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
});

export const buttonBackgroundColor = theme('mode', {
  light: '#222',
  dark: '#eee',
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#222',
});

export const themes = {
  breakpoints: [32, 48, 64],

  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 18, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],

  colors: {
    black: '#000',
    silver: '#999',
    white: '#fff',
    transparent: 'transparent',
    background: '#FAFBFF',
    blue: '#1862FD',
    lighterblue: '#F1F3FA',
    lightestblue: '#FAFBFF',
    lightgray: '#d2d2d2',
    darkgray: '#183D44',
    box: '#EEEEEE',
  },

  radii: ['0px', '2px', '4px', '8px', '16px', '48px'],
};
