import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
    body1: {
      fontSize: 14,
      lineHeight: '16px',
      fontWeight: 600,
    },
    body2: {
      fontSize: 18,
      lineHeight: '24px',
      fontWeight: 600,
    },
    h1: {
      fontSize: 30,
      lineHeight: '40px',
      fontWeight: 600,
    },
    h2: {
      fontSize: 24,
      lineHeight: '40px',
      fontWeight: 600,
      marginBottom: 8,
    },
    h3: {
      fontSize: 18,
      lineHeight: '16px',
      fontWeight: 600,
      marginBottom: 8,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingTop: '11px',
          paddingBottom: '11px',
          boxSizing: 'border-box',
          fontSize: 14,
          lineHeight: '16px',
          fontWeight: 600,
          textTransform: 'none',
        },
      },
    },
  },
  color: {
    primary: '#4460F7',
    secondary: '#2140E8',
    accent: '#F9A52B',
    text: {
      primary: '#1A1B1D',
      secondary: '#9194A5',
    },
    background: '#F2F2F2',
    border: {
      primary: '#B9BDCF',
      secondary: '#E0E2EA',
    },
  },
  dimensions: {
    siteWidth: 1224,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 914,
      md: 993,
      lg: 1288,
      xl: 1536,
    },
  },
});
