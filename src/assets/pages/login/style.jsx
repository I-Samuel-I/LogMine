import styled from "styled-components";

export const FormsWrapper = styled.div`
    width:80%;
    height:10vh;
    margin:auto;   
        
        button{
            font-size:0.95em;
            font-weight:600;
            font-family: "Kufam";
            width:100%;
            height:5.3vh;
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
    @media only screen and (max-width: 991px) {
        button{
            height:6vh;
            font-size:0.9em;
            font-weight:600;
}
}
    @media only screen and (max-width: 600px) {
        button{
            height:6.5vh;
            font-size: 0.95em;
            margin-top:20%;
            font-weight:500;
            width:100%;
        }
}
    @media only screen and (max-width: 375px) {
        button{
            margin-top:32%;
        }
    }

        a{  
            display:flex;
            justify-content:center;
            text-decoration:none;
            margin-top:7%;
            color:#269e6d;
            font-size:0.9em;
            font-weight:400;
}
        a:hover{
            text-decoration:underline;
            color:#218b61;
}  
    @media only screen and (max-width: 991px) {
        a{
            margin-top:0%;
            height:8vh;
            align-items:center;
        }
     
}
    @media only screen and (max-width: 767px) {
        a{
            margin-top:2%;
        }
}

    @media only screen and (max-width: 425px) {
        a{
            margin-top:15px;
        }
    }
    @media only screen and (max-width: 375px) {
        a{
            margin-top:20px;
        }
    }
    @media only screen and (max-width: 320px) {
        a{
            margin-top:45px;
        }
    }
 
`;
export const LogoWrapper = styled.div`
    width:100%;
    margin:auto;
    margin-top:6%;
    display:flex;
    justify-content:center;
`;

export const ParagraphWrapper = styled.div `
    color:white;
    margin-bottom:3%;
    font-size:0.9em;
    font-weight:400;

@media only screen and (max-width: 991px) {
    margin-top:8%;
}
`;

export const InputWrapper = styled.div`
    input{
        width:100%;
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

@media only screen and (max-width: 991px) {
    input{
        height:6vh;
    }
}
`;
