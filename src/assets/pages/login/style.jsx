import styled from "styled-components";

export const Main = styled.main`
        width:80%;
        height:10vh;
        margin:auto;
`;
export const LogoWrapper = styled.div`
    width:100%;
    margin:auto;
    margin-top:2%;
    display:flex;
    justify-content:center;
`;
export const ParagraphWrapper = styled.div `
    color:white;
    margin-bottom:3%;
    font-size:0.9em;
    font-weight:500;
`;
export const InputWrapper = styled.div`
    input{
        width:100%;
        height:100vh;
        border:solid 1px #414141;
        border-radius:3px;
        outline:none;
        height:5vh;
        background-color:#262626;
        color:white;
    }
        input::placeholder{
            color:#868181;
            padding-left:4%;
        }
        input:focus{
            border:solid 2px #0f0f0f;
        }
`;
