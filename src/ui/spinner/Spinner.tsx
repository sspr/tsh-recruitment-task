import { SvgIcon } from '@mui/material';

import { ReactComponent as Oval } from 'assets/images/oval.svg';
import { styles } from './Spinner.styles';

export const Spinner = () => (
  <SvgIcon viewBox="0 0 60 60" sx={styles}>
    <Oval />
  </SvgIcon>
);
