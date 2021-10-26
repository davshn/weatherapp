import { useParams } from "react-router"
import styled from "styled-components"
import icon from "../assets/Weather icon.png";
import { Link } from 'react-router-dom';
import {ContainerStyled} from "../components/ContainerStyled";
import Bubbles from "../components/Bubbles";
import { HomeImg } from "../components/HomeStyled";
import despejadoDia from "../assets/despejadoDia.jpg";
import despejadoNoche from "../assets/despejadoNoche.jpg";
import nubesDia from "../assets/nubesDia.jpg";
import nubesNoche from "../assets/nubesNoche.jpg";
import nublado from "../assets/nublado.jpg";
import lluviaDia from "../assets/lluviaDia.jpg";
import lluviaNoche from "../assets/lluviaNoche.jpg";
import tormentaDia from "../assets/tormentaDia.jpg";
import tormentaNoche from "../assets/tormentaNoche.jpg";
import nieveDia from "../assets/nieveDia.jpg";
import nieveNoche from "../assets/nieveNoche.jpg";
import neblina from "../assets/neblina.jpg";

const DetailedCard = styled.article` 
    margin:10%;
    display:grid;
    position:relative;
    border:1px black solid;
    border-radius:10%;
    width: 80%;
    background: ${(props)=> { 
        switch (props.current){
            case "01d": return `url(${despejadoDia})`
            case "02d": return `url(${nubesDia})`
            case "03d": return `url(${nublado})`
            case "04d": return `url(${nublado})`
            case "09d": return `url(${lluviaDia})`
            case "10d": return `url(${lluviaDia})`
            case "11d": return `url(${tormentaDia})`
            case "13d": return `url(${nieveDia})`
            case "01n": return `url(${despejadoNoche})`
            case "02n": return `url(${nubesNoche})`
            case "03n": return `url(${nublado})`
            case "04n": return `url(${nublado})`
            case "09n": return `url(${lluviaNoche})`
            case "10n": return `url(${lluviaNoche})`
            case "11n": return `url(${tormentaNoche})`
            case "13n": return `url(${nieveNoche})`
            default: return `url(${neblina})`
       }

    }};

    @media (min-width:576px){                            //responsive para escritorio
        width:20%;
        margin:5% 40%;
    }
    
`;

const TitleCard = styled.h2`
    -webkit-text-stroke: 1px white;
    color: black; text-align: center;
    font-size: 37px;
    font-family: Arial, Helvetica, sans-serif;
`;

const InfoTitle = styled.span`
    font-weight:700;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const InfoText = styled.span`
    display:table;
    margin-left: auto;
    color: black;
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