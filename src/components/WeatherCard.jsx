import styled from "styled-components"
import {CloseButton} from './CloseButtonStyled';
import { ImgCard } from "./ImgCardStyled";
import { Text } from "./TextStyled";
import { TitleCard } from "./TitleCardStyled";
import propTypes from "prop-types";

const WhCard = styled.article`               //Estilo de la tarjeta de clima
//Tu codigo acá
display: inline-block;
width: 200px;
margin: 25px;
margin-top: 15%;
margin-left: 12%;
background: linear-gradient(45deg, rgba(0,212,255,1) 0%, rgba(121,9,115,1) 55%, rgba(2,0,36,1) 100%);
border-radius: 10%;
border: #ccc 1px solid;
-webkit-box-shadow: 10px 10px 12px -5px rgba(54,37,54,1);
-moz-box-shadow: 10px 10px 12px -5px rgba(54,37,54,1);
box-shadow: 10px 10px 12px -5px rgba(54,37,54,1);
`;

export default function WeatherCard({onClose,name,min,max,img}) {       //Función generadora del componente tarjeta
  
    return (                          //Dentro del return hay codigo html xon inserciones de javascript
    <WhCard> 
                                                        {/*WhCard aplica los estilos de la tarjeta de clima, representa una etiqueta <article> */}
        <div>
            <CloseButton onClick={onClose}>X</CloseButton>   {/*Aplica los estilos de boton cerrar, representa una etiqueta <Button>*/}
            <TitleCard>{name}</TitleCard>                    {/*Aplica los estilos del titulo de tarjetas, representa una etiqueta <h3>*/}
        </div>
        <div>
            <Text>Min </Text>                                {/*Aplica los estilos de texto, representa una etiqueta <span>*/}
            <Text>Max <br></br></Text>
        </div>
        <div>
            <Text>{min+"°k "}</Text> 
            <Text>{max+"°k "} <br></br></Text>
        </div>
        <div>
            <ImgCard src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Logo"></ImgCard>
        </div>
    </WhCard>
    )
};

WeatherCard.propTypes = {            //Verificacion de que los datos enviados sean del tipo correcto
    max: propTypes.number,
    min: propTypes.number,
    name: propTypes.string,
    img: propTypes.string,
    onClose: propTypes.func
};