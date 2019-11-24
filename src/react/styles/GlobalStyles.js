import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body {
    background-image: ${props => props.theme["background-image"]};
    background-color: ${props => props.theme["background-color"]};
    background-repeat: no-repeat;
  }
`;

export default GlobalStyle;
