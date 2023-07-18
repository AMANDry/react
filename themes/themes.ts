import { buttonClasses, createTheme, Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';

import {
  colorsPalette,
  DEFAULT_BORDER_RADIUS,
  shadowsPalette,
} from './palette';

export const disableScroll:
  | SystemStyleObject<Theme>
  | ((theme: Theme) => SystemStyleObject<Theme>) = {
  overflow: 'auto',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

export const getTheme = () =>
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1556,
      },
    },
    palette: {
      primary: {
        main: '#304384',
        light: '#5467a8',
        dark: '#122563',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#565656',
        light: '#f7e4b2',
        contrastText: '#000000',
      },
      success: {
        main: '#00892b',
        light: '#5cb85c',
      },
      warning: {
        main: '#E85043',
        light: '#orange',
      },
      background: {
        default: '#ffffff',
        paper: '#f9f8f7',
      },
      text: {
        primary: '#404040',
        secondary: '#565656',
        disabled: '#777777',
      },
    },
    typography: {
      fontFamily: `"Raleway", "Roboto", "Helvetica", "Arial", sans-serif`,
      h4: { fontSize: '2rem' },
      h6: { fontWeight: 400 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { ...disableScroll },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          listbox: () => ({ ...disableScroll }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            boxShadow: shadowsPalette[1],
            borderColor: 'currentColor',
            borderRadius: '8px',
            fontWeight: 700,
            textTransform: 'none',
            '&:hover': { boxShadow: shadowsPalette[0] },
            [`&.${buttonClasses.disabled}`]: {
              backgroundColor: colorsPalette.main.backgroundLightGray,
              color: theme.palette.text.primary,
            },
            [`&.${buttonClasses.containedSuccess}`]: {
              backgroundColor: colorsPalette.success.main,
              color: colorsPalette.main.backgroundLight,
            },

            [`&.${buttonClasses.containedSecondary}`]: {
              backgroundColor: colorsPalette.secondary.containedSecondary,
              color: theme.palette.text.primary,
            },
            [`&.${buttonClasses.containedPrimary}:hover`]: {
              backgroundColor: theme.palette.primary.dark,
            },
            [`&.${buttonClasses.outlined}:hover`]: {
              backgroundColor: `rgb(${colorsPalette.main.shadowGrey} / 8%)`,
            },
            [`&.${buttonClasses.text}`]: {
              color: theme.palette.text.primary,
              boxShadow: `none`,
            },
            [`&.${buttonClasses.outlinedPrimary}:hover`]: {
              backgroundColor: theme.palette.primary.light,
            },
          }),
        },
      },
      MuiCircularProgress: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.primary.main,
          }),
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: () => ({
            borderRadius: DEFAULT_BORDER_RADIUS,
          }),
        },
      },
      MuiLink: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.primary.main,
            textDecorationColor: theme.palette.primary.light,
            '&:hover': { cursor: 'pointer' },
          }),
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: ({ theme }) => ({
            marginRight: theme.spacing(1),
            minWidth: 'auto',
          }),
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          grouped: {
            border: 'none',
            '&:not(:first-of-type)': {
              margin: 0,
              border: 'none',
            },
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: ({ theme }) => ({
            [theme.breakpoints.up('sm')]: {
              minHeight: 0,
              paddingTop: theme.spacing(1),
              paddingLeft: theme.spacing(5),
              paddingRight: theme.spacing(5),
            },
          }),
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          }),
        },
      },
      MuiTab: {
        styleOverrides: {
          root: ({ theme }) => ({
            '&.Mui-selected': {
              color: theme.palette.secondary.contrastText,
            },
            padding: '0 50px',
          }),
        },
      },
      MuiSpeedDial: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& button': {
              backgroundColor: theme.palette.success.light,
            },
            '& button[aria-expanded="true"]': {
              backgroundColor: theme.palette.success.light,
            },
            '& button:hover': {
              backgroundColor: theme.palette.success.light,
            },
          }),
        },
      },
    },
  });
