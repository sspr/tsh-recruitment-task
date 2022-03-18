import { theme } from 'assets/styles/theme';

export const styles = {
  form: {
    boxSizing: 'border-box',
    height: 48,
    width: { xs: 1, sm: 392 },
    border: `1px solid ${theme.color.border.secondary}`,
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    flex: { xs: '1 0 100%', sm: '0 1 auto' },
    boxShadow: 'none',
  },
  input: {
    m: 2,
    flex: 1,
    '& input': {
      height: 16,
      p: 0,
    },
    '& input::placeholder': {
      opacity: 1,
      fontSize: 14,
      lineHeight: '16px',
    },
  },
  icon: {
    my: 0.5,
    mr: 1,
    p: 1,
    color: theme.color.text.primary,
  },
};
