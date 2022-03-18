import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    palette: Required<PaletteOptions>;
    color: {
      primary: string;
      secondary: string;
      accent: string;
      text: {
        primary: string;
        secondary: string;
      };
      background: string;
      border: {
        primary: string;
        secondary: string;
      };
    };
    dimensions: {
      siteWidth: string;
    };
  }
  interface ThemeOptions {
    color: {
      primary: string;
      secondary: string;
      accent: string;
      text: {
        primary: string;
        secondary: string;
      };
      background: string;
      border: {
        primary: string;
        secondary: string;
      };
    };
    dimensions: {
      siteWidth: number;
    };
  }
}
