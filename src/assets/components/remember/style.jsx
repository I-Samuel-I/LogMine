import styled from "styled-components";

export const Main = styled.main `
    display:flex;
    align-items:center;
    width:80%;
    margin:auto;
    font-family: "Kufam", sans-serif;
    label{
        display:flex;
        align-items:center;
        
        height:2.2vh;
        font-size:0.7em;
        font-weight:200;
        color:white;
        margin-left: 2%;
        cursor: pointer;
    }
    input[type="radio"]{
        appearance:none;
        display: inline-block;
            width: 18px;
            height: 18px;
            background-color: #262626;
            border: 2px solid #414141;
            border-radius: 5px;
            cursor: pointer;
            vertical-align: middle;
    }
    input[type="radio"]:checked{
        background-color:white;
    }
@media only screen and (max-width: 991px) {
    margin-top:3%;
}
`;