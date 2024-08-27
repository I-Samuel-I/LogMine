import styled from "styled-components";

export const Main = styled.main`
  @media only screen and (min-width: 992px) {
        display: none;
  }
`;

export const MenuWrapper = styled.div`
  @media only screen and (max-width: 991px) {
    width: 2rem;
    height: 2.3rem;
    position: fixed;
    top: 25px;
    right: 50px;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    transform: scale(0.8);
    cursor: pointer;

    div {
      width: 2.3rem;
      height: 0.25rem;
      border-radius: 10px;
      background-color: ${({ open }) => (open ? '#ccc' : '#ffffff')};
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;

export const NavWrapper = styled.div`
  @media only screen and (max-width: 991px) {
    ul {
      display: ${({ open }) => (open ? 'flex' : 'none')};
      align-items: center; 
      justify-content: center; 
      flex-flow: column nowrap;
      background-color: #262626c5;
      position: fixed;
      top: 50px;
      right: 0;
      padding: 3rem;
      width:50%;
      height:100vh;
     
      list-style: none;

      li {
        padding: 10px 0;
        color: white;
        font-family: "Kufam", sans-serif;
        text-align:center;
        margin-top:10%;
}
        li:hover{
            color:#269e6d;
            width:100%;
            background-color:white;
            font-weight:600;
            transition:0.5s;
            transform:scale(1.2);
            border-radius:5px;
            cursor: pointer;
}
}
}
`;