import * as S from "./style"
import Login from "../../pages/login/index"
import Remember from "../remember";

export default function Card(){
    return(
        <>
        <S.Main>
            <Login/>
            <Remember/>         
        </S.Main>
        </>
    )
}