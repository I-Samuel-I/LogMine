import * as S from "./style"
import Logo from "../../img/logo.svg"
export default function Title(){
    return (
        <>
            <S.Main> 
                <img src={Logo} alt="LogMine-Logo"></img>
            </S.Main>
           
        </>
    )
}