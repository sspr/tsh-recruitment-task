import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { styles } from './Header.styles';
import { AppRoute } from 'routing/AppRoute.enum';
import { SearchBar, CheckboxWithLabel } from 'ui';
import { HeaderProps } from './Header.types';

export const Header = ({ onFilterChange, productsParams }: HeaderProps) => {
  const [searchBarValue, setSearchBarValue] = useState<string>(
    productsParams?.search ? productsParams?.search : ''
  );
  const [checkboxActive, setCheckboxActive] = useState<undefined | boolean>(
    productsParams?.active
  );
  const [checkboxPromo, setCheckboxPromo] = useState<undefined | boolean>(
    productsParams?.promo
  );

  const location = useLocation();
  useEffect(() => {
    setSearchBarValue(productsParams?.search ? productsParams?.search : '');
    setCheckboxActive(productsParams?.active);
    setCheckboxPromo(productsParams?.promo);
  }, [location.search]);

  return (
    <AppBar position="static" sx={styles.headerWrapper}>
      <Toolbar variant="dense" sx={styles.headerToolbar}>
        <Typography variant="h2" component="div" sx={styles.title}>
          <Link to={AppRoute.Home}>join.tsh.io</Link>
        </Typography>
        <Box sx={styles.filters}>
          <SearchBar
            onSubmit={(event) => {
              event.preventDefault();

              if (
                searchBarValue !== productsParams.search &&
                !(searchBarValue === '' && productsParams.search === undefined)
              ) {
                onFilterChange({ search: searchBarValue, page: 1 });
              }
            }}
            inputProps={{
              value: searchBarValue,
              onChange: (event) => {
                setSearchBarValue(event.target.value);
              },
            }}
          />
          <Box sx={styles.checkboxes}>
            <CheckboxWithLabel
              checkboxProps={{
                onChange: () => {
                  onFilterChange({
                    active: checkboxActive ? undefined : true,
                    search: searchBarValue,
                    page: 1,
                  });
                  setCheckboxActive((prevState) =>
                    prevState ? undefined : true
                  );
                },
                checked: !!checkboxActive,
              }}
              text="Active"
            />
            <CheckboxWithLabel
              checkboxProps={{
                onChange: () => {
                  onFilterChange({
                    promo: checkboxPromo ? undefined : true,
                    search: searchBarValue,
                    page: 1,
                  });
                  setCheckboxPromo((prevState) =>
                    prevState ? undefined : true
                  );
                },
                checked: !!checkboxPromo,
              }}
              text="Promo"
            />
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
