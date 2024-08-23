import * as S from "./style"

import Login from "../../pages/login/index"
import ForgotPassword from "../forgotpassword";
import Remember from "../remember";

export default function Card(){
    return(
        <>
        <S.Main>
            <Login/>
            <Remember/>
            <div>
                <ForgotPassword/>
            </div> 
        </S.Main>
        </>
    )
}