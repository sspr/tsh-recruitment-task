import { TextField, Typography } from '@mui/material';

import { styles } from './Input.styles';
import { InputProps } from './Input.types';

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <>
      <Typography
        variant="body1"
        component="label"
        htmlFor={label}
        sx={styles.label}
      >
        {label}
      </Typography>
      <TextField
        sx={styles.input}
        required
        fullWidth
        id={label}
        name={label}
        autoComplete={props.autoComplete ? props.autoComplete : label}
        {...props}
      />
    </>
  );
};
