import styled from "styled-components"
//Estilo para el boton de cerrar
export const CloseButton = styled.button`
  position:absolute;
  right:0.5rem;
  top:0.5rem;
  background: none;       
  color: white;
  border: 2px solid white;
  border-radius: 25px;
  transition: all 1s ease-out;   //la animacion dura 1 segundo 
  
  &:hover {                       //Para declarar el over o cualquier seudo clase se usa el & como identificador
    transform:  rotateZ(360deg);  //rotacion
    color: #fff;
    background-color: none;
    opacity: 0.9;
    } 
    
`;