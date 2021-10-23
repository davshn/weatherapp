import styled from "styled-components"
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';

const NavigationContainer = styled.section`               //Estilo del contenedor de tarjetas
  width: 310px;
  height: 403x;
  margin-top: 8%;
  margin-left: 36%;
  background: linear-gradient(45deg, #0e013d 0%, #f3b1e5 55%, rgba(121,9,115,1) 100%);;
  border-radius: 5px;
  opacity: 0.7;

`;

const Button = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 5px;
  color: #fff;
  background: transparent;
  border: #fff 2px solid;
  font-weight: bolder;

&:hover{
  transform : scale(0.9);
		-moz-transform : scale(0.9); /* Firefox */
		-webkit-transform : scale(0.9); /* Chrome - Safari */
		-o-transform : scale(0.9); /* Opera */
		-ms-transform : scale(0.9); /* IE9 */
}
`

export default function NavigationBar({onSearch}) {
  
  return (
    <NavigationContainer>
      <Link to='/about'>            {/*Link a about */} 
      <Button>Acerca de</Button>
      </Link>
      <SearchBar onSearch={onSearch}/>
    </NavigationContainer>
  )
  
};

