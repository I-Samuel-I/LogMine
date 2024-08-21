import styled from "styled-components";

export const Main = styled.main`
        width:80%;
        height:10vh;
        margin:auto;   
        
        button{
            font-size:1.1em;
            font-weight:600;
            width:100%;
            height:5.5vh;
            margin-top:20%;
            border-radius:7px;
            border:none;
            border-bottom:2px solid white;
            background-color:#269e6d;
            box-shadow: 0px 0px 0px 7px rgba(126, 125, 125, 0.192);
            color:white;

}
            button:hover{
                cursor:pointer;
                background-color:#1e8058;
                transition:0.2s;
                box-shadow: 0px 0px 8px 7px rgba(146, 145, 145, 0.397);
                transition: box-shadow 0.3s ;
            }    

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
        padding:10px;
        border:solid 1px #414141;
        border-radius:3px;
        outline:none;
        height:5vh;
        background-color:#262626;
        color:white;
    }
        input::placeholder{
            color:#868181;
            
        }
        input:focus{
            border:solid 2px #0f0f0f;
        }
`;
