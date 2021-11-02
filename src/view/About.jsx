import { Link } from 'react-router-dom';
import icon from "../assets/Weather icon.png";
import {ContainerStyled} from "../components/ContainerStyled";
import Bubbles from "../components/Bubbles";
import { HomeImg } from '../components/HomeStyled';

export default function About() {
//Acerca de
return (
    <ContainerStyled>
        <Bubbles></Bubbles>
        <Link to='/'>
            <HomeImg src={icon}></HomeImg>
        </Link>
    </ContainerStyled>    
)
}