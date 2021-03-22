import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";  

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color: none;
        color: black;
        padding-top: 50px;
    }
    input {
        font-size : 1.5rem;
    }
    h1 {
        font-size : 2.5rem;
    }
    h2 { 
        font-size : 2.0rem;
    }
    h3 {
        font-size : 1.5rem;
    }
`;

export default GlobalStyles;