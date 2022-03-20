import { GlobalStyles, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { theme } from 'assets/styles/theme';
import { globalStyles } from 'assets/styles/globalStyles';
import { AppProvidersProps } from './AppProviders.types';
import { ProductsContextController } from 'context/products/productsContextController/ProductsContextController';

export const AppProviders = ({ children }: AppProvidersProps) => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles styles={globalStyles} />
        <Router>
          <ProductsContextController>{children}</ProductsContextController>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
