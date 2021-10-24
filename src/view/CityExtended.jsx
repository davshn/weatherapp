import { useParams } from "react-router"
import styled from "styled-components"
import icon from "../assets/Weather icon.png";

const ExtendedContainer = styled.section` 



`

const DetailedCard = styled.article` 



`

const TitleCard = styled.h2`
    -webkit-text-stroke: 1px white;
    color: black; text-align: center;
    font-size: 37px;
    margin-left: 0%;
    font-family: Arial, Helvetica, sans-serif;
`;

const InfoText = styled.span`
    width: 100px;
    border: 1px #ccc solid;
    margin: 0px;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: justify;
`;

const ImgCard = styled.img`
    

`;

export default function CityExtended({onFilter}) {
    let city= onFilter(useParams().id)
    return (
        <ExtendedContainer>
            <DetailedCard>
                <ImgCard src={icon}></ImgCard>
                <TitleCard>{city.name}</TitleCard>
                <InfoText>Temperatura:</InfoText>
                <InfoText>{city.temp}°<br></br></InfoText>
                <InfoText>Sensacion termica:</InfoText>
                <InfoText>{city.termalSense}°<br></br></InfoText>
                <InfoText>Presion:</InfoText>
                <InfoText>{city.pressure}hPa<br></br></InfoText>
                <InfoText>Humedad:</InfoText>
                <InfoText>{city.humidity}%<br></br></InfoText>
                <InfoText>Velocidad del viento:</InfoText>
                <InfoText>{city.wind}m/s<br></br></InfoText>
                <InfoText>Porcentaje de nubes:</InfoText>
                <InfoText>{city.clouds}%<br></br></InfoText>
                <InfoText>Clima actual:</InfoText>
                <InfoText>{city.weatherDesc}<br></br></InfoText>
                <ImgCard src={`https://github.com/davshn/weatherapp/raw/master/src/assets/${city.weather}.png`} alt="Imagen del clima"></ImgCard>
            </DetailedCard>
        </ExtendedContainer>    
    )
 
    }