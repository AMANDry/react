export const colorsPalette = {
  main: {
    borderGrey: '145 158 171',
    backgroundLight: '#f9f8f7',
    backgroundGrey: '#565656',
    backgroundLightGray: '#777777',
    backgroundDarkGray: '#404040',
    shadowGrey: '145 158 171',
  },
  secondary: {
    containedSecondary: '#d2d2d2',
  },
  stepper: {
    backgroundFinished: '#c8c880',
    colorIcon: '#ffffff',
  },
  success: {
    main: '#00892b',
    light: '#5cb85c',
  },
  warning: {
    main: '#E85043',
    light: '#F98500',
  },
  table: { backgroundHeader: '#fcfce2' },
  subscribe: {
    background: '#f9883c',
  },
  import: {
    backgroundUnknownProviderInCircle: '#dedfe2',
  },
};

export const shadowsPalette = [
  `none`,
  `rgb(${colorsPalette.main.shadowGrey} / 16%) 0 8px 16px 0`,
  `rgb(${colorsPalette.main.shadowGrey} / 48%) 0px 0px 1px 0px, rgb(${colorsPalette.main.shadowGrey} / 24%) 0px 2px 4px -1px`,
  `rgb(${colorsPalette.main.shadowGrey} / 16%) -2px 4px 6px 0px`,
  `rgb(${colorsPalette.main.shadowGrey} / 24%) 0px 0px 2px 0px, rgb(${colorsPalette.main.shadowGrey}  / 24%) -20px 20px 40px -4px`,
  `rgb(${colorsPalette.main.shadowGrey} / 24%) 0px 0px 1px 1px inset`,
  'rgb(0, 0, 0, 25%) 0 4px 10px 0',
  `rgb(${colorsPalette.main.shadowGrey} / 16%) 0px 8px 16px 0px`,
];

export const DEFAULT_BORDER_RADIUS = '16px';
