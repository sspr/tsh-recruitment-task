import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { styles } from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';

export const SearchBar = ({ inputProps, onSubmit }: SearchBarProps) => {
  return (
    <Paper onSubmit={onSubmit} component="form" sx={styles.form}>
      <InputBase {...inputProps} sx={styles.input} placeholder="Search" />
      <IconButton type="submit" sx={styles.icon} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
