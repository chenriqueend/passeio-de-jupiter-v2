import { createGlobalStyle } from "styled-components";

const GlobalProvider = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalProvider;
