import styled from "styled-components"
import SearchBar from "./SearchBar";

const NavigationContainer = styled.section`               //Estilo del contenedor de tarjetas
//Tu codigo acá
width: 280px;
height: 35px;
background: linear-gradient(45deg, rgba(0,212,255,1) 0%, rgba(121,9,115,1) 55%, rgba(2,0,36,1) 100%);;
border-radius: 5px;
border: #000 1px solid;


`;

export default function NavigationBar() {

  return (
    <NavigationContainer>    
      <SearchBar/>
    </NavigationContainer>
  )
  
};

