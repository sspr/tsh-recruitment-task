import { theme } from 'assets/styles/theme';
import loginBgImage from 'assets/images/loginBgImage.jpg';

export const styles = {
  backgroundImg: {
    backgroundImage: `url(${loginBgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  siteContainer: { height: '100vh' },
  contentContainer: { position: 'relative' },
  title: {
    position: 'absolute',
    top: {
      xs: 40,
      sm: 52,
    },
    left: {
      xs: 24,
      sm: 128,
    },
  },
  formContainer: {
    height: '100vh',
    maxWidth: '100%',
    width: { xs: 1, sm: 648 },
    pl: { xs: 3, sm: 16 },
    pr: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  heading: {
    mb: 3,
  },
  button: {
    mt: 4.25,
    mb: 2,
    fontSize: 16,
    lineHeight: '24px',
    py: 1.5,
    backgroundColor: theme.color.primary,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.color.secondary,
      boxShadow: 'none',
    },
  },
  link: {
    color: theme.color.text.secondary,
    textDecoration: 'underline',
  },
};
