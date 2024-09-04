import styled from "styled-components";
export const Content = styled.article `
    display:flex;
    width:85%;
    margin:auto;
    margin-top: 70px;
    transform:scale(1.1);
    text-align:center;
    color:white;
@media only screen and (max-width: 1200px) {
    transform: scale(0.9);
    margin-top:25px;
    width:100%;
}    
@media only screen and (max-width: 991px) {
    display:none;
}
`;