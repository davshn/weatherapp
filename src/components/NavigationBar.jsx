import styled from "styled-components"
import SearchBar from "./SearchBar";

const NavigationContainer = styled.section`               //Estilo del contenedor de tarjetas
//Tu codigo acá
background: #f8eeee;
border: #ccc 2px;


`;

export default function NavigationBar() {

  return (
    <NavigationContainer>    
      <SearchBar/>
    </NavigationContainer>
  )
  
};

