import styled from "styled-components";

export const HomeImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top:5%;
    margin-bottom:5%;
    width:20%;
    @media (min-width:576px){                            //responsive para escritorio
      padding-top:1%;
      margin-bottom:1%;
      width:6%;                     
    }
    &:hover {                       //Para declarar el over o cualquier seudo clase se usa el & como identificador
    transform:  rotateY(180deg);  //rotacion
      }  
`;