import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import CardGroup from '../components/CardGroup';
import icon from '../assets/Weather icon.png';
import { Link } from 'react-router-dom';
import {ContainerStyled} from "../components/ContainerStyled";
import BubbleStyled from "../components/BubbleStyled";
import bubble from "../assets/bubble.png";

const ImgCard = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:5%;
    margin-bottom:5%;
    width:20%;
    @media (min-width:576px){                            //responsive para escritorio
      margin-top:1%;
      margin-bottom:1%;
      width:6%;                     
    }
`;
export default function Citiesview({onSearch,cities,onClose}){
  return (
    <ContainerStyled>
      <BubbleStyled src={bubble}></BubbleStyled>
        <Link to='/about'>            {/*Link a about */} 
            <ImgCard src={icon}></ImgCard>
        </Link>
        
        <NavigationBar onSearch={onSearch}/>
        <CardGroup
          cities={cities}
          onClose={onClose}
        /> 
    </ContainerStyled>
  )
}