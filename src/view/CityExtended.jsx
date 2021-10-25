import { useParams } from "react-router"
import styled from "styled-components"
import icon from "../assets/Weather icon.png";
import { Link } from 'react-router-dom';

const ExtendedContainer = styled.section` 
    background: linear-gradient(180deg, rgba(54,59,68,1) 0%, rgba(72,70,91,1) 35%, rgba(141,162,164,1) 100%);
    height:100vh;

`

const DetailedCard = styled.article` 
    margin:10%;
    display:grid;
    position:relative;
    border:1px black solid;
    border-radius:10%;
    width: 80%;
    @media (min-width:576px){                            //responsive para escritorio
        width:25%;
        margin:5% 37%;
    }
    


`

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
    padding-top:10%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:20%;
    
    @media (min-width:576px){ 
        padding-top:5%;                           //responsive para escritorio
        width:8rem;

    } 
`;

export default function CityExtended({onFilter}) {
    let city= onFilter(useParams().id)
    return (
        <ExtendedContainer>
            
            <Link to='/'>
                <ImgCard src={icon}></ImgCard>
            </Link>
            <DetailedCard>
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
        </ExtendedContainer>    
    )
 
    }