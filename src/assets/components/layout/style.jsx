import styled from "styled-components";

export const Main = styled.main`
    width:80%;
    height: 100vh;
    margin:auto;

@media only screen and (min-width: 1200px) {
    width:80%;
}
@media only screen and (max-width: 1999px) {
    width:90%;
}
@media only screen and (max-width: 991px) {
    width:100%;
}
@media only screen and (max-width: 767px) {
    width:100%;
}   
@media only screen and (max-width: 600px) {
    width:100%;
}
`;
