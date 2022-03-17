import { GlobalStyles, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme } from 'assets/styles/theme';
import { globalStyles } from 'assets/styles/globalStyles';
import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles styles={globalStyles} />
    <Router>{children}</Router>
  </ThemeProvider>
);
