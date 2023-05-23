import 'normalize.css';
import { Montserrat } from 'next/font/google';
import { css } from '@emotion/react';

const montserrat = Montserrat({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export const global = css`
  html,
  body {
    font-family: ${montserrat.style.fontFamily};
    max-width: 100vw;
    color: #010413;
    line-height: 1.5;
    font-size: 20px;
    overflow-x: hidden;
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

  button {
    cursor: pointer;
  }
`;
