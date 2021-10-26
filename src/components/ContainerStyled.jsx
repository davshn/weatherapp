import background from "../assets/background.jpg";
import styled from "styled-components"

export const ContainerStyled = styled.main`
  background: url(${background});
  height:100vh;
  overflow: hidden;
    align-items: center;
    justify-content: space-around; /*hay espacio entre los elementos*/
    bottom: 0; /*empiezan desde abajo*/
`
