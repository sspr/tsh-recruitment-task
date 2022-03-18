import { Typography } from '@mui/material';

import { styles, Wrapper } from './Chip.styles';
import { ChipProps } from './Chip.types';

export const Chip = ({ text, backgroundColor }: ChipProps) => {
  return (
    <Wrapper>
      <Typography
        component="div"
        sx={{
          ...styles,
          backgroundColor: backgroundColor
            ? backgroundColor
            : styles.backgroundColor,
        }}
      >
        {text}
      </Typography>
    </Wrapper>
  );
};
