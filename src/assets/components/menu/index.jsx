import * as S from "./style"
import { useState } from "react"
export default function Menu(){
    return(
        <>
            <S.Main>
                <ul>
                    <li>ENTRAR</li>
                    <li>FORUM</li>
                    <li>SOBRE</li>
                    <li>MOJANG</li>
                    <li>PERGUNTAS</li>
                </ul> 
            </S.Main>
        </>
    )
}