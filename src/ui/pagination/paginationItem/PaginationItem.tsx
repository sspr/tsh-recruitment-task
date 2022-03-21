import { Typography } from '@mui/material';

import { styles } from './PaginationItem.styles';
import { PaginationItemProps } from './PaginationItem.types';

export const PaginationItem = ({
  children,
  isActive,
  isDisabled,
  onClick,
  typographyStyles,
}: PaginationItemProps) => {
  return (
    <Typography
      sx={{ ...styles.typography, ...typographyStyles }}
      variant="body1"
      component="button"
      className={isActive ? 'active' : ''}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
};
