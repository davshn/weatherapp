import styled from "styled-components"
import SearchBar from "./SearchBar";

const NavigationContainer = styled.section`               //Estilo del contenedor de tarjetas


  background: linear-gradient(45deg, #0e013d 0%, #f3b1e5 55%, rgba(121,9,115,1) 100%);;
  border-radius: 5px;
  opacity: 0.7;

`;


export default function NavigationBar({onSearch}) {
  
  return (
    <NavigationContainer>
      <SearchBar onSearch={onSearch}/>
    </NavigationContainer>
  )
  
};

