import Menu from "../menu"
import Title from "../title/index"
import * as S from "./style"
export default function Header(){
    return (
      <> 
        <S.Main> 
          <Title/> 
          <Menu/>
        </S.Main> 
      
      </>
     
      
    )
}