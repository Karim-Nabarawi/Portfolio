import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }

body {
  font-family: "Roboto", sans-serif;
}

h1 {
  font-size: 64px;
}
h2 {
  font-size: 32px;
}

`;

export default GlobalStyles;
