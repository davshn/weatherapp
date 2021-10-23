import styled from "styled-components"
import {CloseButton} from './CloseButtonStyled';
import propTypes from "prop-types";
import fondo from "../assets/fondo.jpg";
import { Link } from "react-router-dom";

const WhCard = styled.article`               //Estilo de la tarjeta de clima
    background-image:url("${fondo}");
    display: inline-block;
    width: 200px;
    margin: 25px;
    margin-top: 8%;
    margin-left: 12%;
    border-radius: 10%;
    -webkit-box-shadow: 7px 23px 65px -26px rgba(137,33,255,1);
    -moz-box-shadow: 7px 23px 65px -26px rgba(137,33,255,1);
    box-shadow: 7px 23px 65px -26px rgba(137,33,255,1);

    &:hover{
        transform : scale(1.1);
	    -moz-transform : scale(1.1); /* Firefox */
	    -webkit-transform : scale(1.1); /* Chrome - Safari */
	    -o-transform : scale(1.1); /* Opera */
	    -ms-transform : scale(1.1); /* IE9 */
        -webkit-box-shadow: 2px 8px 65px -5px rgba(137,33,255,1);
        -moz-box-shadow: 2px 8px 65px -5px rgba(137,33,255,1);
        box-shadow: 2px 8px 65px -5px rgba(137,33,255,1);
    }
`;
//estilo para los titulos de las cartas
const TitleCard = styled.h3`
    -webkit-text-stroke: 1px white;
    color: transparent; text-align: center;
    font-size: 37px;
    margin-left: 0%;
    font-family: Arial, Helvetica, sans-serif;
`;

const InfoText = styled.span`
    width: 100px;
    border: 1px #ccc solid;
    margin: 0px;
    color: #fdfdfd;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: justify;
`;

const ImgCard = styled.img`
    

`;

export default function WeatherCard({onClose,name,id,country,weather,longitude,latitude,sunrise,sunset}) {       //Función generadora del componente tarjeta
    function getDate(unix){
        let date=new Date(unix*1000);
        return date;
    }
    return (                          //Dentro del return hay codigo html xon inserciones de javascript
    <WhCard> 
                                                        {/*WhCard aplica los estilos de la tarjeta de clima, representa una etiqueta <article> */}
            <CloseButton onClick={(e) => {
                e.preventDefault();
                onClose(id);
            }}>
            X
            </CloseButton>   {/*Aplica los estilos de boton cerrar, representa una etiqueta <Button>*/}
            <Link to={`/city/${id}`} >
            <TitleCard>{name}</TitleCard>                    {/*Aplica los estilos del titulo de tarjetas, representa una etiqueta <h3>*/}
            </Link>
            <InfoText>Pais:</InfoText>
            <InfoText>{country} <br></br></InfoText>                      {/*Aplica los estilos de texto, representa una etiqueta <span>*/}
            <InfoText>Longitud:</InfoText>
            <InfoText>{longitude} <br></br></InfoText>
            <InfoText>Latitud:</InfoText>
            <InfoText>{latitude} <br></br></InfoText>
            <InfoText>Salida del sol:</InfoText>
            <InfoText>{getDate(sunrise).getHours()+":"+getDate(sunrise).getMinutes()} <br></br></InfoText>
            <InfoText>Puesta del sol:</InfoText>
            <InfoText>{getDate(sunset).getHours()+":"+getDate(sunset).getMinutes()} <br></br></InfoText>
            <ImgCard src={`https://github.com/davshn/weatherapp/raw/master/src/assets/${weather}.png`} alt="Imagen Dia o noche"></ImgCard>
    </WhCard>
    )
};

WeatherCard.propTypes = {            //Verificacion de que los datos enviados sean del tipo correcto
    max: propTypes.number,
    temp: propTypes.number,
    name: propTypes.string,
    img: propTypes.string,
    onClose: propTypes.func
};