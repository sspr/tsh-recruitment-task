import { TypographyStyle } from '@mui/material';
import { ReactNode } from 'react';

export type PaginationItemProps = {
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: VoidFunction;
  children: ReactNode;
  typographyStyles?: TypographyStyle;
};
