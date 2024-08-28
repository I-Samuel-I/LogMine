import styled from "styled-components";

export const Main = styled.main`
    width: 30%;
    margin: auto;
    text-align: center;

    @media only screen and (max-width: 991px) {
        width: 100%;
        position:relative;
        display:flex;
        
        align-items: center;  
        text-align: left; 
        left:50px;

        img {
            width: 13%;
        }
    }
    @media only screen and (max-width: 767px) { 
        height:9vh;
        left:30px;
        img{
            position:relative;
            top:5px;
            width:15%;   
        }
    }

    @media only screen and (max-width: 600px) {
        img{
            width:7rem;
        }
    }  
`;
