import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html{
    height: 100vh;
  }
  *{
    margin: 0;
  }
  body {
    background: #fafafa;
    -webkit-font-smoothing: antialiased;
  }
  border-style, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
