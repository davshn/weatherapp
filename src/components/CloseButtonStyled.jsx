import styled from "styled-components"
//Estilo para el boton de cerrar
export const CloseButton = styled.button`

    //Tu codigo acá
    //en Styled components no es necesario usar identificadores
    background: none;       
    color: white;
    border: 2px solid white;
    border-radius: 40%;
    transition: all 1s ease-out;   //la animacion dura 1 segundo 
    float: right;
    margin-top: -30px;
    margin-right: 10px;
    
        
    &:hover {                       //Para declarar el over o cualquier seudo clase se usa el & como identificador
      transform:  rotateZ(360deg);  //rotacion
      color: #eb53ff;
      background-color: #fff;
      opacity: 0.5;
      
    } 
    
`;