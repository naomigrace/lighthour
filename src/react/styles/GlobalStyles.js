import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap');

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    height: 100%;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body {
    background-image: ${props => props.theme["background-image"]};
    background-color: ${props => props.theme["background-color"]};
    background-repeat: repeat-x;
    transition: all 2s linear;

  }
  main {
    max-width: 1080px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
