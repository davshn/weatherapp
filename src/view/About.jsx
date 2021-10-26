import { Link } from 'react-router-dom';
import styled from "styled-components"
import icon from "../assets/Weather icon.png";
import {ContainerStyled} from "../components/ContainerStyled";
import Bubbles from "../components/Bubbles";

const ImgCard = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top:5%;
    margin-bottom:5%;
    width:20%;
    @media (min-width:576px){                            //responsive para escritorio
      padding-top:1%;
      margin-bottom:1%;
      width:6%;                     
    }
`;
export default function About() {

return (
    <ContainerStyled>
        <Bubbles></Bubbles>
        <Link to='/'>
            <ImgCard src={icon}></ImgCard>
        </Link>
    </ContainerStyled>    

)

    
}