import { createGlobalStyle } from 'styles/styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }

  body.fontLoaded {
    font-family: Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }

  #app {
    background-color: #000;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Menlo, Monaco, Consolas, "Courier New",
    monospace;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;

export default GlobalStyle;
