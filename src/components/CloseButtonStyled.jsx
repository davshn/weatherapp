import styled from "styled-components"
//Estilo para el boton de cerrar
export const CloseButton = styled.button`

    //Tu codigo acá
    //en Styled components no es necesario usar identificadores
    background:none;       
    color: black;
    border: 3px solid transparent;
    transition: all 1s ease-out;   //la animacion dura 1 segundo 
        
    &:hover {                       //Para declarar el over o cualquier seudo clase se usa el & como identificador
      transform:  rotateZ(360deg);  //rotacion
    } 
    
`;