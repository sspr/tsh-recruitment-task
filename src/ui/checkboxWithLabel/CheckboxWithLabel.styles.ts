import { styled } from '@mui/material';

import { theme } from 'assets/styles/theme';

export const styles = {
  label: {
    m: 0,
    mr: 4,
    color: theme.color.text.primary,
  },
  checkbox: {
    '&.MuiCheckbox-root': { p: 0, pr: 1 },
  },
};

export const CheckboxIcon = styled('div')({
  boxSizing: 'border-box',
  width: 24,
  height: 24,
  border: `1px solid ${theme.color.border.secondary}`,
  borderRadius: 4,
});

export const CheckboxCheckedIcon = styled('div')({
  boxSizing: 'border-box',
  width: 24,
  height: 24,
  backgroundColor: theme.color.primary,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  '& img': {
    width: 12,
  },
});
