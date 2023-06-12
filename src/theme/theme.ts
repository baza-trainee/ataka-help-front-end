export const theme = {
  breakpoints: ["393px", "834px", "1440px"],

  fontSizes: [
    "12px", //0
    "14px", //1
    "16px", //2
    "18px", //3
    "20px", //4
    "22px", //5
    "24px", //6
    "32px", //7
    "40px", //8
    "64px", //9
    "96px", //10
    "120px", //11
    "48px", //12
    "36px", //13
  ],

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  radii: {
    sm: "5px", //card-button, buttons, feedback-form inputs
  },

  colors: {
    white: {
      100: "#FFFFFF", //text-color: footer, header
      200: "#D9D9D9", //slider-title
    },
    black: {
      100: "#000000", //black-text color
      200: "#010413", //main-text-color
      300: "#242635", //input-focus
    },
    grey: {
      100: "#B2BFCE", //footer-line color
      200: "#727272", //feedback-form border color
      300: "#D0D2D6", //disabled button
      400: "#A2A4A7", //disabled button text color
      500: "#9497AB", //underline submenu (useful-info) link
      600: "#C6C6C6", //contacts input
      700: "#C7C7C7", //add info border
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
      900: "rgba(160, 194, 231, 0.05)", //button-bg
      1000: "#5D87F4", //active submenu (useful-info) link
      1100: "#9fbdd7", //admin input border
      1200: "#2F88FF", //plus icon
    },

    red: {
      100: "#DC0C31", // error-message
      200: "#FF5858", //delete bin
    },
  },
};
