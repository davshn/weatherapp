import styled from "styled-components"
import {CloseButton} from './CloseButtonStyled';
import { ImgCard } from "./ImgCardStyled";
import { TitleCard } from "./TitleCardStyled";
import propTypes from "prop-types";
import fondo from "../assets/fondo.jpg";

const WhCard = styled.article`               //Estilo de la tarjeta de clima
//Tu codigo acá

background-image:url("${fondo}");
display: inline-block;
width: 200px;
margin: 25px;
margin-top: 15%;
margin-left: 12%;
border-radius: 10%;
-webkit-box-shadow: 19px 20px 17px -12px rgba(1,3,26,1);
-moz-box-shadow: 19px 20px 17px -12px rgba(1,3,26,1);
box-shadow: 19px 20px 17px -12px rgba(1,3,26,1);

`;

const MinText = styled.span`
      //Tu codigo acá
      width: 100px;
      border: 1px #ccc solid;
      margin: 13px;
      color: #fdfcfc;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    
`;

const MaxText = styled.span`
      //Tu codigo acá
      width: 100px;
      border: 1px #ccc solid;
      margin: 13px;
      color: #fdfcfc;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    
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
            <MinText>Min </MinText>                                {/*Aplica los estilos de texto, representa una etiqueta <span>*/}
            <MaxText>Max <br></br></MaxText>
        </div>
        <div>
            <MinText>{min+"°k "}</MinText> 
            <MaxText>{max+"°k "} <br></br></MaxText>
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