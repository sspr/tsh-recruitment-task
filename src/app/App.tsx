import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';
import { Header } from 'ui';

export const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};
