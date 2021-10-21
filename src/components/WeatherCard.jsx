import styled from "styled-components"
import {CloseButton} from './CloseButtonStyled';
import { ImgCard } from "./ImgCardStyled";
import { Text } from "./TextStyled";
import { TitleCard } from "./TitleCardStyled";
import propTypes from "prop-types";

const WhShadow = styled.span`

	width: 350px;
	position: absolute; bottom: -10px; 
	background: #000;
	z-index: -1;
	box-shadow: 0 0 25px 8px rgba(0, 0, 0, 0.4);
	border-radius: 50%;



`
const WhCard = styled.article`               //Estilo de la tarjeta de clima
//Tu codigo acá
background-color: #000;
&:after {
	width: 100px; height: 100px;
	top: -50px; left: 50px;
	border-radius: 100px;
    
}

&:before {
	width: 200px; height: 200px;
	top: -90px; right: 50px;
	border-radius: 200px;
}

&:after, &:before {
	content: '';
	
	background: #FFF;
	z-index: -1
}

 
	width: 350px; height: 120px;
	background: #BFF;
	background: linear-gradient(top, #BFF 5%, #DFF 100%);
	background: -webkit-linear-gradient(top, #FFF 1%, #BFF 100%);
	background: -moz-linear-gradient(top, #BFF 5%, #DFF 100%);
	background: -ms-linear-gradient(top, #BFF 5%, #DFF 100%);
	background: -o-linear-gradient(top, #BFF 5%, #DFF 100%);
	top: 50px; left: 50px;
	border-radius: 100px;
	
	margin: 120px auto 20px;





`;

export default function WeatherCard({onClose,name,min,max,img}) {       //Función generadora del componente tarjeta
  
    return (                          //Dentro del return hay codigo html xon inserciones de javascript
    <WhCard> 
        <WhShadow></WhShadow>                                                {/*WhCard aplica los estilos de la tarjeta de clima, representa una etiqueta <article> */}
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