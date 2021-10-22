import styled from "styled-components"
import {CloseButton} from './CloseButtonStyled';
import propTypes from "prop-types";
import fondo from "../assets/fondo.jpg";

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

export default function WeatherCard({onClose,name,temp,country,weather,id,weatherDesc}) {       //Función generadora del componente tarjeta
    console.log(weather);
    return (                          //Dentro del return hay codigo html xon inserciones de javascript
    <WhCard> 
                                                        {/*WhCard aplica los estilos de la tarjeta de clima, representa una etiqueta <article> */}
        <div>
            <CloseButton onClick={(e) => {
                e.preventDefault();
                onClose(id);
            }}>
            X
            </CloseButton>   {/*Aplica los estilos de boton cerrar, representa una etiqueta <Button>*/}
            <TitleCard>{name}</TitleCard>                    {/*Aplica los estilos del titulo de tarjetas, representa una etiqueta <h3>*/}
        </div>
        <div>
            <InfoText>Temp </InfoText>                                {/*Aplica los estilos de texto, representa una etiqueta <span>*/}
            <InfoText>Pais <br></br></InfoText>
        </div>
        <div>
            <InfoText>{temp+"° "}</InfoText> 
            <InfoText>{country} <br></br></InfoText>
        </div>
        <div>
            <InfoText>{weatherDesc}<br></br></InfoText>
            <ImgCard src={`https://github.com/davshn/weatherapp/raw/master/src/assets/${weather}.png`} alt="Weather logo"></ImgCard>
        </div>
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