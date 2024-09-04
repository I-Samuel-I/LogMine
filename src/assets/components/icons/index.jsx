import * as S from "./style"
import * as Images from "../img/index"
export default function Icons(){
    return(
        <>
            <S.Images>
                <S.ContentWrapper>
                    <img src = {Images.Icon} alt="Power"/>
                    <p>Jogue também offline</p>
                </S.ContentWrapper>
               <S.ContentWrapper>
                    <img src = {Images.Icon4} alt="User"/>
                    <p>67 jogadores</p>
               </S.ContentWrapper>
               <S.ContentWrapper>
                    <img src = {Images.Icon3} alt="Controller"/>
                    <p>Compatível com uso remoto</p>
               </S.ContentWrapper>
                <S.ContentWrapper>
                    <img src = {Images.Icon5} alt="Vibrate"/>
                    <p>Vibração no controle</p>
                </S.ContentWrapper>
                <S.ContentWrapper>
                    <img src = {Images.Icon2} alt="Baby"/>
                    <p>Permitido para menores</p>  
                </S.ContentWrapper>
            </S.Images>
        </>
    )
}