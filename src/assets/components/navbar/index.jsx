import { useState } from "react";
import React from "react";
import * as S from "./style";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.NavBar>
        <S.MenuWrapper open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </S.MenuWrapper>
        <S.NavWrapper open={open}>
          <ul>
            <li>ENTRAR</li>
            <li>FORUM</li>
            <li>SOBRE</li>
            <li>MOJANG</li>
            <li>PERGUNTAS</li>
          </ul>
        </S.NavWrapper>
      </S.NavBar>
    </>
  );
};

export default NavBar; 
