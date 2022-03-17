import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { styles } from './Header.styles';
import { AppRoute } from 'routing/AppRoute.enum';
import { SearchBar } from '../searchBar/SearchBar';
import { CheckboxWithLabel } from '../checkboxWithLabel/CheckboxWithLabel';

export const Header = () => {
  return (
    <AppBar position="static" sx={styles.headerWrapper}>
      <Toolbar variant="dense" sx={styles.headerToolbar}>
        <Typography variant="h2" component="div" sx={styles.title}>
          <Link to={AppRoute.Home}>join.tsh.io</Link>
        </Typography>
        <Box sx={styles.filters}>
          <SearchBar />
          <Box sx={styles.checkboxes}>
            <CheckboxWithLabel text="Active" />
            <CheckboxWithLabel text="Promo" />
          </Box>
        </Box>
        <Link to={AppRoute.Login}>
          <Button sx={styles.button} variant="outlined">
            Log in
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
