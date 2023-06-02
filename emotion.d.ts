import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: string[];
    fontSizes: string[];
    fontWeights: {
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    radii: { sm: string };

    colors: {
      white: {
        100: string;
        200: string;
      };
      black: {
        100: string;
        200: string;
        300: string;
      };
      grey: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
      blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
      };
      red: {
        100: string;
      };
    };
  }
}
