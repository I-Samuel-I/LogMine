import Logo from "../../img/logo-solo.svg"
import * as S from "./style"
export default function Login(){
    return (
        <form>
            
             <S.LogoWrapper>
                        <img src={Logo} alt="LogMine-Logo"></img>
                </S.LogoWrapper>
            <S.Main>
                <S.ParagraphWrapper>    
                    <p>E-mail</p>
                </S.ParagraphWrapper>
                <S.InputWrapper>
                <input type="email" autoComplete="on" required placeholder="usuario@gmail.com"
                name="email" minLength="18"/>
                </S.InputWrapper>
            
            </S.Main>
            <S.Main>
                <S.ParagraphWrapper>    
                    <p>Senha</p>
                </S.ParagraphWrapper>
                <S.InputWrapper>
                <input type="password" autoComplete="on" required placeholder="123456789"
                name="password" minLength="12"/>
                </S.InputWrapper>
            
            </S.Main>
        </form>
    )
}