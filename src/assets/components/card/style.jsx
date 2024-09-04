import styled from "styled-components";

export const Card = styled.section`
    border:solid 1px #414141;
    border-radius:10px;
    width:30%;
    margin:auto;
    margin-top:6%;
    height:46vh;
    background-color:#262626d1;

@media only screen and (max-width: 1199px) {
    width:40%;
    height:50vh;
    margin-top:6.5%;
}
@media only screen and (max-width: 991px) {
    width:55%;
    height:70vh;
    margin-top:11%;
}
@media only screen and (max-width: 767px) {
    width:500px;
    
}
@media only screen and (max-width: 600px) {
    width:85%;
    height:63vh;
    margin-top:25%;
}
`;

