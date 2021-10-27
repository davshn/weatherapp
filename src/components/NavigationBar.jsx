import styled from "styled-components"
import SearchBar from "./SearchBar";

const NavigationContainer = styled.section`               //Estilo del contenedor de tarjetas

width: 80%;
height: 3rem;
border-radius: 1px;
 margin-left:auto;

`;


export default function NavigationBar({onSearch}) {
  
  return (
    <NavigationContainer>
      <SearchBar onSearch={onSearch}/>
    </NavigationContainer>
  )
  
};

