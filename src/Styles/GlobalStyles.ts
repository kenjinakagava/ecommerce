import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #f7fafc;
        font-family: 'Roboto Slab', serif;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    a:focus-visible, button:focus-visible {
        outline: 2px solid #5e361e;
    }
`;

export default GlobalStyles;
