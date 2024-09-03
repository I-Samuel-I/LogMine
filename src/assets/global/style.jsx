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
        background:
        radial-gradient(circle at center , rgba(65, 65, 65, 0) 20%, #000000d1 100%),
        linear-gradient(to bottom, #000000d8 2%, rgba(0, 0, 0, 0) 40%),
        linear-gradient(to top, #0000007b 0%, rgba(0, 0, 0, 0) 35%),
        url(${bgImage});
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        overflow-y:hidden;
        overflow-x:hidden;
}
`;  
