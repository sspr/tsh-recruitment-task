import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    palette: PaletteOptions | undefined;
    color: {
      accent: string;
      text: {
        dark: string;
        light: string;
      };
      background: string;
      border: {
        dark: string;
        light: string;
      };
    };
  }
  interface ThemeOptions {
    color: {
      accent: string;
      text: {
        dark: string;
        light: string;
      };
      background: string;
      border: {
        dark: string;
        light: string;
      };
    };
  }
}
