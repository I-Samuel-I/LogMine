import { createGlobalStyle } from "styled-components";
import bgImage from "../img/image.png";
export const GlobalStyle = createGlobalStyle`
    * {
        margin:0px;
        padding:0px;
        box-sizing:border-box;
}
    body,html{
        font-family:'Inter',sans-serif;
        height:100vh;
        background-image:
        radial-gradient(circle at center , rgba(65, 65, 65, 0) 15%, rgb(0, 0, 0) 100%),
        url(${bgImage});
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
}
`;  
