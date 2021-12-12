import { Link } from 'react-router-dom';
import icon from "../assets/Weather icon.png";
import {ContainerStyled} from "../components/ContainerStyled";
import Bubbles from "../components/Bubbles";
import { HomeImg } from '../components/HomeStyled';
import styled from 'styled-components';
import {Github,Facebook,Linkedin,Twitter} from "@styled-icons/bootstrap";

const DescText= styled.p`
    color:#AAAAAA;
    text-align:center;
`
const SLink = styled.a`      //Estilo de los links a las redes
   color:blue;
    
`

export default function About() {
    let year = new Date().getFullYear();
//Acerca de
return (
    <ContainerStyled>
        <Bubbles></Bubbles>
        <Link to='/'>
            <HomeImg src={icon}></HomeImg>
        </Link>
        <DescText>Aplicación del Frontend del Clima usando React.js y Javascript, obteniendo datos utilizando de una API gratuita  con version de escritorio y movil</DescText>
        <SLink href="https://github.com/davshn/"><Github size="2rem"/></SLink>
        <SLink href="https://www.linkedin.com/in/davshn/"><Linkedin size="2rem"/></SLink>
        <SLink href="https://www.facebook.com/david.figueroa.184"><Facebook size="2rem"/></SLink>
        <SLink href="https://twitter.com/Davshmr"><Twitter size="2rem"/></SLink>
        <DescText> © Copyright {year} David Figueroa</DescText>
        <DescText> Bogotá, Colombia.</DescText>
    </ContainerStyled>    
)}