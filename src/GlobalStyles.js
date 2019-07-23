import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyles = createGlobalStyle`
  ${normalize()};
  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }

  main {
    padding: 2rem;
  }
`;

export default GlobalStyles;
