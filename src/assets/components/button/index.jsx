import * as S from "./style"
export default function Button(children, ...props){
    return(
        <>  
            <S.Main>
                <button type="submit"{...props} >
                    {children}Entrar na conta
                </button>
            </S.Main>
        </>
    )
}