import { theme } from 'assets/styles/theme';

export const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    p: 3,
    pt: { xs: 3, sm: 7 },
  },
  container: {
    width: {
      sm: 1,
      lg: theme.dimensions.siteWidth,
    },
  },
};
