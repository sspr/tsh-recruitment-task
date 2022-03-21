import { InputProps } from '@mui/material';

export type SearchBarProps = {
  onSubmit: (event: React.SyntheticEvent) => void;
  inputProps?: InputProps;
};
