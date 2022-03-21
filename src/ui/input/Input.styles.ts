import { theme } from 'assets/styles/theme';

export const styles = {
  label: { mb: 1 },
  input: {
    mt: 1,
    mb: 2.75,
    '& input': {
      p: 2,
      height: 16,
      lineHeight: 16,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.color.border.secondary,
      },
    },
  },
};
