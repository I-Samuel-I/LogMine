import * as S from "./style"
import { useState } from "react"
export default function Menu(){
const[Open, setOpen] = useState(false);
    return(
        <>
            <S.Main>
                <S.MenuWrapper onClick={() => setOpen(!Open)}>
                    <span/>
                    <span/>
                    <span/>
                </S.MenuWrapper>
                <ul className={Open ? "open" : ""}>
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