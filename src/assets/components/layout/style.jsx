import styled from "styled-components";

export const Main = styled.main`
    border:solid 1px white;
    width:80%;
    height: 100vh;
    margin:auto;
   
@media only screen and (max-width: 600px) {
    width:100%;
}
    
@media only screen and (min-width: 600px) {
    width:100%;
}
    
@media only screen and (min-width: 768px) {
    width:100%;
    
}

@media only screen and (min-width: 992px) {
    width:90%;
    
}
@media only screen and (min-width: 1200px) {
    width:80%;
}
`;
