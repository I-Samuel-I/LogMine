import styled from "styled-components";
export const Main = styled.main `
    display:flex;
    width:85%;
    margin:auto;
    margin-top:50px;
    margin-top:50px;
    text-align:center;
    color:white;
@media only screen and (max-width: 1200px) {
    transform: scale(0.9);
    margin-top:40px;
    width:100%;
}    
@media only screen and (max-width: 991px) {
    display:none;
}
`;