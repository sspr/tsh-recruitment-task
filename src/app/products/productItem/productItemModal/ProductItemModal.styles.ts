import { styled } from '@mui/material';

import { theme } from 'assets/styles/theme';

export const styles = {
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: 3,
  },
  backdrop: {
    backgroundColor: theme.color.text.primary,
    opacity: 0.9,
  },
  itemWrapper: {
    width: 600,
    height: { xs: 'auto', sm: 530 },
    borderRadius: 2,
    boxShadow: 'none',
    position: 'relative',
  },
  contentWrapper: {
    px: { xs: 3, sm: 4 },
    py: 3,
  },
  description: {
    color: theme.color.text.secondary,
  },
  closeIcon: { width: 14, height: 14 },
};

export const CloseButton = styled('button')({
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 16,
  position: 'absolute',
  top: 16,
  right: 16,
  backgroundColor: theme.color.background,
  border: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
});
