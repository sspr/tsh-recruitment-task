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
    },
    h3: {
      fontSize: 18,
      lineHeight: '16px',
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#4460F7',
      dark: '#2140E8',
    },
  },
  color: {
    accent: '#F9A52B',
    text: {
      dark: '#1A1B1D',
      light: '#9194A5',
    },
    background: '#F2F2F2',
    border: {
      dark: '#B9BDCF',
      light: '#E0E2EA',
    },
  },
});
