import { styled } from '@mui/material';

import { theme } from 'assets/styles/theme';

export const styles = {
  height: 24,
  minWidth: 75,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  backgroundColor: theme.color.accent,
};

export const Wrapper = styled('div')({
  top: 16,
  left: 0,
  position: 'absolute',
});
