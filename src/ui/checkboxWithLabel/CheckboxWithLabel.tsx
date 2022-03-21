import { Checkbox, FormControlLabel, SvgIcon } from '@mui/material';

import {
  styles,
  CheckboxIcon,
  CheckboxCheckedIcon,
} from './CheckboxWithLabel.styles';
import { ReactComponent as Tick } from 'assets/images/tick.svg';
import { CheckboxWithLabelProps } from './CheckboxWithLabel.types';

export const CheckboxWithLabel = ({
  text,
  checkboxProps,
}: CheckboxWithLabelProps) => {
  return (
    <FormControlLabel
      sx={styles.label}
      control={
        <Checkbox
          {...checkboxProps}
          sx={styles.checkbox}
          icon={<CheckboxIcon />}
          checkedIcon={
            <CheckboxCheckedIcon data-testid="checked-checkbox">
              <SvgIcon viewBox="0 0 18 14" sx={styles.icon}>
                <Tick />
              </SvgIcon>
            </CheckboxCheckedIcon>
          }
        />
      }
      label={text}
    />
  );
};
