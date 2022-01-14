import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input,
  button,
  p,
  span,
  a {
    font: 500 16px 'Quicksand', sans-serif;
    letter-spacing: 0.02em;
    font-size: 2rem;
  }

  #root {
    background-color: #eee;
  }

  html{
    font-size: 12px;
  }
`;
