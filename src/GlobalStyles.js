import { createGlobalStyle } from "styled-components";
import bg from "./Images/pattern-background-desktop.svg";
import bgm from "./Images/pattern-background-mobile.svg";
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        font-family: "Poppins", sans-serif;
      }
    :root {
        /* FONT WEIGHT */
        --bold: 900;
        --regular: 700;
        --thin: 500;
        /* NEUTRAL COLORS */
        --very-pale-blue: hsl(225, 100%, 98%);
        --desaturated-blue: hsl(224, 23%, 55%);
        --dark-blue: hsl(223, 47%, 23%);
        /* PRIMARY COLORS */
        --pale-blue: hsl(225, 100%, 94%);
        --bright-blue: hsl(245, 75%, 52%);
    }

    body{
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-color: var(--pale-blue);
        display: flex;
        justify-content: center;
        
        @media (max-width: 1024px){
             background-image: url(${bgm});
        }
    }
    

`;

export default GlobalStyle;
