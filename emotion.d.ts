import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: string[];
    fontSizes: string[];
    fontWeights: object;
    radii: object;

    colors: {
      white: {
        100: string;
      };
      black: {
        100: string;
        200: string;
      };
      grey: {
        100: string;
        200: string;
        300: string;
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
      };
    };
  }
}
