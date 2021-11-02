import NavigationBar from '../components/NavigationBar';
import CardGroup from '../components/CardGroup';
import icon from '../assets/Weather icon.png';
import { Link } from 'react-router-dom';
import {ContainerStyled} from "../components/ContainerStyled";
import Bubbles from "../components/Bubbles";
import {HomeImg} from "../components/HomeStyled";
//Pantalla de las cartas
export default function Citiesview({onSearch,cities,onClose}){
  return (
    <ContainerStyled > 
      <Bubbles></Bubbles>
      <Link to='/about'>            {/*Link a about */} 
            <HomeImg src={icon}></HomeImg>
        </Link>
        <NavigationBar onSearch={onSearch}/>
        <CardGroup
          cities={cities}
          onClose={onClose}
        /> 
    </ContainerStyled>
  )
}