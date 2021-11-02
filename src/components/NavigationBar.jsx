import styled from "styled-components"
import SearchBar from "./SearchBar";
//Barra de navegacion
const NavigationContainer = styled.section`               
  width: 80%;
  height: 3rem;
  border-radius: 1px;
  margin-left:12%;
  @media (min-width:576px){                            //responsive para escritorio
    margin-left:auto;
    }
`;

export default function NavigationBar({onSearch}) {
  return (
    <NavigationContainer>
      <SearchBar onSearch={onSearch}/>
    </NavigationContainer>
  )
};

