import * as React from 'react';
import { Button, Paper, Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { styles } from './Login.styles';
import { AppRoute } from 'routing/AppRoute.enum';
import { Input } from 'ui';

export const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Grid container component="main" sx={styles.siteContainer}>
      <Grid item xs={false} sm={5} sx={styles.backgroundImg} />
      <Grid
        item
        xs={12}
        sm={7}
        component={Paper}
        elevation={0}
        square
        sx={styles.contentContainer}
      >
        <Typography variant="h2" component="div" sx={styles.title}>
          <Link to={AppRoute.Home}>join.tsh.io</Link>
        </Typography>
        <Box sx={styles.formContainer}>
          <Typography component="h1" variant="h1" sx={styles.heading}>
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Input
              label="Username"
              autoComplete="username"
              placeholder="Enter username"
            />
            <Input
              label="Password"
              autoComplete="current-password"
              placeholder="Enter password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={styles.button}
            >
              Log in
            </Button>
            <Grid container>
              <Link to={AppRoute.Home}>
                <Typography variant="body1" sx={styles.link}>
                  Forgot password?
                </Typography>
              </Link>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
