import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
    * {
        font-family: 'ProximaNova', sans-serif;
        box-sizing: border-box;
    }
  }

  ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
`;
