import { useParams } from "react-router"
import styled from "styled-components"
import icon from "../assets/Weather icon.png";
import { Link } from 'react-router-dom';
import {ContainerStyled} from "../components/ContainerStyled";
import Bubbles from "../components/Bubbles";
import { HomeImg } from "../components/HomeStyled";

const DetailedCard = styled.article` 
    margin:10%;
    display:grid;
    position:relative;
    box-shadow:  20px 20px 48px #1f2836,                //Sombra de la tarjeta
             -20px -20px 48px #57709a;
    border: 1px solid rgba(255, 255, 255, 0.125);              //Color borde y tamaño
    border-radius:10%;
    width: 80%;
    background: ${(props)=> { 
        switch (props.current){
            case "01d": return `linear-gradient(180deg, rgba(0,166,173,0.6674019949776786) 0%, rgba(105,180,195,0.5637605383950455) 35%, rgba(198,240,244,0.4573179613642332) 100%);`
            case "02d": return `linear-gradient(180deg, rgba(68,69,70,0.6674019949776786) 0%, rgba(121,121,121,0.5637605383950455) 35%, rgba(168,176,177,0.4573179613642332) 100%);`
            case "03d": return `linear-gradient(180deg, rgba(68,69,70,0.6674019949776786) 0%, rgba(121,121,121,0.5637605383950455) 35%, rgba(168,176,177,0.4573179613642332) 100%);`
            case "04d": return `linear-gradient(180deg, rgba(68,69,70,0.6674019949776786) 0%, rgba(121,121,121,0.5637605383950455) 35%, rgba(168,176,177,0.4573179613642332) 100%);`
            case "09d": return `linear-gradient(180deg, rgba(33,54,109,0.7150210425967262) 0%, rgba(107,100,159,0.6786064767703957) 35%, rgba(163,148,211,0.5777661406359419) 100%);`
            case "10d": return `linear-gradient(180deg, rgba(33,54,109,0.7150210425967262) 0%, rgba(107,100,159,0.6786064767703957) 35%, rgba(163,148,211,0.5777661406359419) 100%);`
            case "11d": return `linear-gradient(180deg, rgba(63,88,159,0.7150210425967262) 0%, rgba(242,239,169,0.6786064767703957) 35%, rgba(171,154,220,0.5777661406359419) 100%);`
            case "13d": return `linear-gradient(180deg, rgba(102,118,163,0.7150210425967262) 0%, rgba(240,240,240,0.6786064767703957) 35%, rgba(155,139,201,0.5777661406359419) 100%);`
            case "01n": return `linear-gradient(180deg, rgba(0,42,92,0.6674019949776786) 0%, rgba(0,84,101,0.5637605383950455) 35%, rgba(72,159,167,0.4573179613642332) 100%);`
            case "02n": return `linear-gradient(180deg, rgba(0,0,0,0.7150210425967262) 0%, rgba(95,95,95,0.6786064767703957) 35%, rgba(124,124,124,0.5777661406359419) 100%);`
            case "03n": return `linear-gradient(180deg, rgba(0,0,0,0.7150210425967262) 0%, rgba(95,95,95,0.6786064767703957) 35%, rgba(124,124,124,0.5777661406359419) 100%);`
            case "04n": return `linear-gradient(180deg, rgba(0,0,0,0.7150210425967262) 0%, rgba(95,95,95,0.6786064767703957) 35%, rgba(124,124,124,0.5777661406359419) 100%);`
            case "09n": return `linear-gradient(180deg, rgba(17,28,58,0.7150210425967262) 0%, rgba(65,61,101,0.6786064767703957) 35%, rgba(89,82,110,0.5777661406359419) 100%);`
            case "10n": return `linear-gradient(180deg, rgba(17,28,58,0.7150210425967262) 0%, rgba(65,61,101,0.6786064767703957) 35%, rgba(89,82,110,0.5777661406359419) 100%);`
            case "11n": return `linear-gradient(180deg, rgba(43,57,96,0.7150210425967262) 0%, rgba(184,182,127,0.6786064767703957) 35%, rgba(100,91,127,0.5777661406359419) 100%);`
            case "13n": return `linear-gradient(180deg, rgba(43,57,96,0.7150210425967262) 0%, rgba(240,240,240,0.6786064767703957) 35%, rgba(132,129,141,0.5777661406359419) 100%);`
            default: return `linear-gradient(180deg, rgba(81,34,71,0.7150210425967262) 0%, rgba(118,105,123,0.6786064767703957) 35%, rgba(166,179,178,0.5777661406359419) 100%);`
       }}};
    @media (min-width:576px){                            //responsive para escritorio
        width:20%;
        margin:5% 40%;
        &:hover{
        transform : scale(1.1);
	    -moz-transform : scale(1.1); /* Firefox */
	    -webkit-transform : scale(1.1); /* Chrome - Safari */
	    -o-transform : scale(1.1); /* Opera */
	    -ms-transform : scale(1.1); /* IE9 */
        -webkit-box-shadow: 0px -7px 26px 0px rgba(255,255,255,1);
        -moz-box-shadow: 0px -7px 26px 0px rgba(255,255,255,1);
        box-shadow: 0px -7px 26px 0px rgba(255,255,255,1);
                }
    }
    
`;

const TitleCard = styled.h2`
    -webkit-text-stroke: 1px white;
    color: transparent; 
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
`;

const InfoTitle = styled.span`
    font-weight:700;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #fdfdfd;
`;

const InfoText = styled.span`
    display:table;
    margin-left: auto;
    color: #fdfdfd;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-transform: capitalize;
`;

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
      width:15%;                     
    }
    
`;

export default function CityExtended({onFilter}) {
    let city= onFilter(useParams().id)
    return (
        <ContainerStyled>
            <Bubbles></Bubbles>
            <Link to='/'>
                <HomeImg src={icon}></HomeImg>
            </Link>
            <DetailedCard current={city.weather}>
                <TitleCard>{city.name}</TitleCard>
                <InfoTitle>Temperatura:</InfoTitle>
                <InfoText>{city.temp}°</InfoText>
                <InfoTitle>Sensacion termica:</InfoTitle>
                <InfoText>{city.termalSense}°</InfoText>
                <InfoTitle>Presion:</InfoTitle>
                <InfoText>{city.pressure}hPa</InfoText>
                <InfoTitle>Humedad:</InfoTitle>
                <InfoText>{city.humidity}%</InfoText>
                <InfoTitle>Velocidad del viento:</InfoTitle>
                <InfoText>{city.wind}m/s</InfoText>
                <InfoTitle>Porcentaje de nubes:</InfoTitle>
                <InfoText>{city.clouds}%</InfoText>
                <InfoTitle>Clima actual:</InfoTitle>
                <InfoText>{city.weatherDesc}</InfoText>
                <ImgCard src={`https://github.com/davshn/weatherapp/raw/master/src/assets/${city.weather}.png`} alt="Imagen del clima"></ImgCard>
            </DetailedCard>
        </ContainerStyled>    
    )
    }