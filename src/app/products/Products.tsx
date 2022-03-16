import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

export const Products = () => {
  return (
    <>
      <Typography variant="h2">Products page</Typography>
      <Link to={AppRoute.Login}>
        <Typography>Login</Typography>
      </Link>
      <Typography>Text</Typography>
    </>
  );
};
