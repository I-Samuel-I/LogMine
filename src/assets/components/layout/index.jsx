import * as S from "./style"
import Card from "../card";
import Content from "../content";
import Header from "../header/index";
export default function Layout(){
    return(
    <>  
        <S.Main> 
            <Header/>
            <Card/>
            <Content/>
        </S.Main>
       
    </>
    )
}