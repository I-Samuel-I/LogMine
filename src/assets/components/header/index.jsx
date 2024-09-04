import Menu from "../menu"
import NavBar from "../navbar"
import Title from "../title/index"
import * as S from "./style"
export default function Header(){
    return (
      <> 
        <S.Header> 
          <Title/> 
          <Menu/>
          <NavBar/>
        </S.Header> 
      </>
    )
}