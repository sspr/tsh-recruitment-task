import { theme } from 'assets/styles/theme';

export const styles = {
  typography: {
    px: 1,
    border: 0,
    py: 0,
    '&:hover': {
      cursor: 'pointer',
    },
    '&:disabled': {
      color: theme.color.text.secondary,
      cursor: 'auto',
    },
    '&.active': {
      color: theme.color.primary,
    },
  },
};
