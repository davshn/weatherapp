import background from "../assets/background.jpg";
import styled from "styled-components"
//Estilo de los contenedores
export const ContainerStyled = styled.main`   
  background: url(${background});
  background-size: cover;
  background-attachment: fixed;
  min-height:100vh;                           //El contenedor ocupa la pantalla
`
