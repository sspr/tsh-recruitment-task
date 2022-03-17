import { Checkbox, FormControlLabel } from '@mui/material';

import {
  styles,
  CheckboxIcon,
  CheckboxCheckedIcon,
} from './CheckboxWithLabel.styles';
import tick from 'assets/images/tick.svg';
import { CheckboxWithLabelProps } from './CheckboxWithLabel.types';

export const CheckboxWithLabel = ({ text }: CheckboxWithLabelProps) => {
  return (
    <FormControlLabel
      sx={styles.label}
      control={
        <Checkbox
          sx={styles.checkbox}
          icon={<CheckboxIcon />}
          checkedIcon={
            <CheckboxCheckedIcon>
              <img src={tick} alt="Checkbox checked icon" />
            </CheckboxCheckedIcon>
          }
        />
      }
      label={text}
    />
  );
};
