import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { styles } from './SearchBar.styles';

export const SearchBar = () => {
  return (
    <Paper component="form" sx={styles.form}>
      <InputBase sx={styles.input} placeholder="Search" />
      <IconButton type="submit" sx={styles.icon} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
