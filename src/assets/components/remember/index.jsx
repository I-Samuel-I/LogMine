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
                <label htmlFor="remember" name="remember" >
                    <input type="radio" id="remember" onClick={RadioClick} checked={RememberSelect} name="remember"/>
                        <span></span>
                        Lembrar minha senha
                    </label>
            </S.Main>
        </form>
    )
}