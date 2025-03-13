import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box; 
}

body {
    background-color: #974814;
    display: flex;
    width: 100vw; 
    height: 100vh;
    justify-content: center;
    align-items: center;


    @media (max-width: 750px) {
    display: block;
        
    }
}
`;
