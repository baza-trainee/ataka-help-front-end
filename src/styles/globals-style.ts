import "normalize.css";
import { css } from "@emotion/react";

export const global = css`
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    /* font-family */
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
