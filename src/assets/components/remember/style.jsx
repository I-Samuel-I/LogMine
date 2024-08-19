import styled from "styled-components";

export const Main = styled.main `
    display:flex;
    align-items:center;
    border:solid 1px;
    width:80%;
    margin:auto;
    label{
        display:flex;
        align-items:center;
        border:solid 1px;
        font-size:0.7em;
        font-weight:500;
        color:white;
        margin-left: 2%;
    }
    input[type="radio"]{
        
        width:14px;
        height:14px;
        background-color:#262626;
        border:solid 1px #414141;
    }
`;