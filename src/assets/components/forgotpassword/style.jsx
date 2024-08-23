import styled from "styled-components";
export const Main = styled.main `
    width:80%;
    margin:auto;
    a{  
        display:flex;
        justify-content:center;
        margin-top:37%;
        text-decoration:none;
        
        color:#269e6d;
        font-size:0.9em;
        font-weight:600;
    }
    a:hover{
        text-decoration:underline;
        color:#218b61;
    }
    
@media only screen and (max-width: 991px) {
    margin-top:33%;
}
`;