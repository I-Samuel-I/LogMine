import styled from "styled-components";
export const Main = styled.main`
    
    ul{
        display: flex;
        justify-content:center;
        list-style-type:none;
        margin-top:8%;
        width:100%;
        padding:0;
    }
    li{
        
        display:flex;
        justify-content:center;
        align-items: center;
        width: 18%;
        height:3.5vh;
        padding-top:1%;
        font-family: "Kufam", sans-serif;
        font-size:0.9em;
        font-weight:600;
        text-align:center;
        color:white;
    }
        li:hover{
            color:#269e6d;
            background-color:white;
            font-weight:600;
            transition:0.5s;
            transform:scale(1.2);
            border-radius:5px;
            cursor: pointer;
        
        }
@media only screen and (max-width: 991px) {
    display:none;
}

@media only screen and (max-width: 1199px) { 
    transform:scale(1);
    width:100%;
    li{
        margin-left:10px;
        width:100%;
    }
}
`;

