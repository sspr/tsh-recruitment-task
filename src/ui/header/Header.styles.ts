import { theme } from 'assets/styles/theme';

export const styles = {
  headerWrapper: {
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none',
  },
  headerToolbar: {
    boxSizing: 'border-box',
    width: {
      xs: 1,
      lg: theme.dimensions.siteWidth,
    },
    mx: 'auto',
    mt: { xs: 6.5, sm: 6 },
    mb: { xs: 4, sm: 6 },
    px: { xs: 3, lg: 0 },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    mb: { xs: 3.5, sm: 0 },
    color: theme.color.text.primary,
  },
  filters: {
    ml: {
      sm: 3,
      md: 13,
    },
    display: 'flex',
    flex: { xs: '1 0 100%', sm: '1 1 auto' },
    flexWrap: 'wrap',
    order: { xs: 3, sm: 0 },
  },
  checkboxes: {
    ml: { xs: 0, sm: 4 },
    mt: { xs: 3, sm: 0 },
    display: 'flex',
    alignContent: 'center',
  },
  button: {
    boxSizing: 'border-box',
    mb: { xs: 3.5, sm: 0 },
    py: 1.25,
    px: 3,
    borderColor: theme.color.primary,
    color: theme.color.primary,
    '&:hover': {
      borderColor: theme.color.secondary,
      color: theme.color.secondary,
      backgroundColor: 'transparent',
    },
  },
};
