import styled from "styled-components";

export const Main = styled.main`
    width:30%;
    margin:auto;
    margin-top:1.5%;
    text-align:center;

/*Dispostivos Médios (Tablets deitados, 768px para cima) */
@media only screen and (max-width: 991px) {
    width:100%;
    text-align:left;
    margin-left:5%;
    
    img{
        width:12%;
    }
}
`;