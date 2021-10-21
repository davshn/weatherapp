import styled from "styled-components"
import SearchBar from "./SearchBar";

const NavigationContainer = styled.section`               //Estilo del contenedor de tarjetas
//Tu codigo acá
background: red;

`;

export default function NavigationBar() {

  return (
    <NavigationContainer>    
      <SearchBar/>
    </NavigationContainer>
  )
  
};

