import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: string[];

    colors: {
      white: {
        100: string;
      };
      grey: {
        100: string;
      };
      blue: {
        100: string;
      };
    };
  }
}
