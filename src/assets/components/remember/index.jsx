import * as S from "./style"
import {useState} from 'react'
export default function Remember(){
    const [RememberSelect, setRememberSelect] = useState(false);
    
    //Update function (direct method)
    const RadioClick = () =>{
        setRememberSelect(prevState => !prevState);
    }
    return(
        <form>
            <S.Main>
                <input type="radio" id="remember" onClick={RadioClick} checked={RememberSelect}/>
                <label htmlFor="remember" onClick={RadioClick}>Lembrar minha senha</label>
            </S.Main>
        </form>
    )
}