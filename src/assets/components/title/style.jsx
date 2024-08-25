import styled from "styled-components";

export const Main = styled.main`
    width: 30%;
    margin: auto;
    margin-top: 7%;
    text-align: center;

    @media only screen and (max-width: 991px) {
        width: 100%;
        text-align: left;
        margin-top:3%;
        margin-left:5%;

        img {
            width: 13%;
        }
    }
    @media only screen and (max-width: 767px) {
        margin-left:10%;
        
        img{
            width:25%;
        }
    }
`;
