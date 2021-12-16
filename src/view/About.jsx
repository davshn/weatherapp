import { Link } from 'react-router-dom';
import icon from "../assets/Weather icon.png";
import char from "../assets/D1.png";
import {ContainerStyled} from "../components/ContainerStyled";
import Bubbles from "../components/Bubbles";
import { HomeImg } from '../components/HomeStyled';
import styled from 'styled-components';
import {Github,Facebook,Linkedin,Twitter} from "@styled-icons/bootstrap";

const DescText= styled.p`
    text-align:center;
    color: white;  
    font-weight: lighter;
    font-family: "century gothic";
    padding:3%;
    @media (min-width:576px){
        padding:1%;
        color: black;
    }
`
const BottomText= styled.p`
    text-align:center;
    color: white;  
    font-weight: lighter;
    font-family: "century gothic";
    padding:3%;
    @media (min-width:576px){
        padding:1%;
    }
`
const SLink = styled.a`      //Estilo de los links a las redes
   color:darkblue;
`
const CharImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top:3%;
    margin-bottom:3%;
    width:50%;
    @media (min-width:576px){                            //responsive para escritorio
      padding-top:1%;
      margin-bottom:1%;
      width:15%;                     
    }
`;
const Social = styled.div`      //Estilo de los links a las redes
    display:flex;
    justify-content:space-around;
    margin-right:auto;
    margin-left:auto;
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
        <CharImg src={char}></CharImg>
        <DescText>Aplicación del Frontend del Clima usando React.js y Javascript, obteniendo datos utilizando de una API gratuita  con version de escritorio y movil</DescText>
        <Social>
            <SLink href="https://github.com/davshn/"><Github size="2rem"/></SLink>
            <SLink href="https://www.linkedin.com/in/davshn/"><Linkedin size="2rem"/></SLink>
            <SLink href="https://www.facebook.com/david.figueroa.184"><Facebook size="2rem"/></SLink>
            <SLink href="https://twitter.com/Davshmr"><Twitter size="2rem"/></SLink>
        </Social>
        <BottomText> © Copyright {year} David Figueroa</BottomText>
        <BottomText> Bogotá, Colombia.</BottomText>
    </ContainerStyled>    
)}