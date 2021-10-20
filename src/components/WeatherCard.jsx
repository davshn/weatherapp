import styled from "styled-components"
import {CloseButton} from './CloseButtonStyled';
import { ImgCard } from "./ImgCardStyled";
import { Text } from "./TextStyled";
import { TitleCard } from "./TitleCardStyled";
import propTypes from "prop-types";

export default function WeatherCard({onClose,name,min,max,img}) {       //Función generadora del componente tarjeta
    const WhCard = styled.article`               //Estilo de la tarjeta de clima
        //Tu codigo acá
        background:white;
        border: 2px solid #000;
    
    `;

  return (                          //Dentro del return hay codigo html xon inserciones de javascript
    <WhCard>                                                 {/*WhCard aplica los estilos de la tarjeta de clima, representa una etiqueta <article> */}
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


WeatherCard.propTypes = {
    max: propTypes.number,
    min: propTypes.number,
    name: propTypes.string,
    img: propTypes.string,
    onClose: propTypes.func
}