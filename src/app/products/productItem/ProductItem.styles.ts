import { theme } from 'assets/styles/theme';

export const styles = {
  itemWrapper: {
    maxWidth: {
      sm: 288,
      xs: 1,
    },
    height: 400,
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    boxShadow: 'none',
    position: 'relative',
  },
  contentWrapper: {
    height: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mediaUnavailable: {
    filter: 'grayscale(1)',
  },
  description: {
    color: theme.color.text.secondary,
  },
  actionsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    px: 2,
    pb: 3,
  },
  starIcon: {
    fontSize: '1em',
    pr: 1.25,
    width: 13.33,
  },
  filledStar: {
    '& path': {
      fill: theme.color.accent,
    },
  },
  emptyStar: {
    '& path': {
      fill: theme.color.border.primary,
    },
  },
  button: {
    mt: 2.25,
    width: 1,
    textTransform: 'none',
    boxShadow: 'none',
    backgroundColor: theme.color.primary,
    '&.Mui-disabled': {
      color: theme.palette.common.white,
      backgroundColor: theme.color.text.secondary,
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: theme.color.secondary,
    },
  },
};
