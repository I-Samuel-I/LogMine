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
        font-size:0.70em;
        font-weight:200;
        color:white;
        margin-left: 2%;
        cursor: pointer;
    }
    input[type="radio"] {
        appearance: none;
        display: none;
    }
    label span {
        display: inline-block;
        width: 17px;
        height: 16px;
        background-color: #262626;
        border: 1px solid #737373c8;
        border-radius: 3px;
        vertical-align: middle;
        position: relative;
        cursor: pointer;
        margin-right: 8px;
    }
    input[type="radio"]:checked + span:after {
        content: '';
        position: absolute;
        left: 4px;
        top: 0px;
        width: 3px;
        height: 8px;
        border: solid #c7c4c4;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
}
    
@media only screen and (max-width: 991px) {
    margin-top:3%;
}
`;