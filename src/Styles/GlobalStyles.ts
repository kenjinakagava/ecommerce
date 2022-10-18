import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
  background-color: #f7fafc;

    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default Global;
