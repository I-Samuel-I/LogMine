export default function Login(){
    return (
        <form>
            <div>
                <p>E-mail</p>
                <input type="email" autoComplete="on" required placeholder="usuario@gmail.com"
                name="email" minLength="18"/>
            </div>
            <div>
                <p>Senha</p>
                <input type="password" autoComplete="on" required placeholder="123456789"
                name="password" minLength="12"/>
            </div>
        </form>
    )
}