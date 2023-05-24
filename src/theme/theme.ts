export const theme = {
  breakpoints: ["393px", "834px", "1440px"],

  fontSizes: [
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
    "22px",
    "24px",
    "32px",
    "40px",
    "64px",
    "96px",
    "120px",
  ],

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },

  radii: {
    sm: "5px", //card-button, buttons, feedback-form inputs
  },

  colors: {
    white: {
      100: "#FFFFFF", //text-color: footer, header
    },
    black: {
      100: "#000000", //black-text color
      200: "#010413", //main-text-color
    },
    grey: {
      100: "#B2BFCE", //footer-line color
      200: "#727272", //feedback-form border color
      300: "#D0D2D6", //disabled button
    },

    blue: {
      100: "#141944", //background-color: footer, header
      200: "#251C52", //card-border-color
      300: "#618DFE", //accent-color, button-color
      400: "#EFF2FB", //card-bg
      500: "rgba(160, 194, 231, 0.2)", //text-bg
      600: "#B8C7F5", //button-hover-focus-color
      700: "#B0BFED", //active button
      800: "#656FB4", //cookies-bg
    },
  },
};
