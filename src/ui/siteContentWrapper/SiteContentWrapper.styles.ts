import { theme } from 'assets/styles/theme';

export const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    m: 3,
    mt: { xs: 3, sm: 7 },
  },
  container: {
    width: {
      xs: 1,
      lg: theme.dimensions.siteWidth,
    },
  },
};
