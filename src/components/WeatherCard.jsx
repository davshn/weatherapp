import styled from "styled-components"
import {CloseButton} from './CloseButtonStyled';
import { ImgCard } from "./ImgCardStyled";
import propTypes from "prop-types";
import fondo from "../assets/fondo.jpg";

const WhCard = styled.article`               //Estilo de la tarjeta de clima
//Tu codigo acá

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
      //Tu codigo acá
    -webkit-text-stroke: 1px white;
    color: transparent; text-align: center;
    font-size: 37px;
    margin-left: 0%;
    font-family: Arial, Helvetica, sans-serif;
`;

const MinText = styled.span`
      //Tu codigo acá
    width: 100px;
    border: 1px #ccc solid;
    margin: 0px;
    color: #fdfdfd;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: justify;
`;

const MaxText = styled.span`
    //Tu codigo acá
    width: 100px;
    color: #fdfcfc;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 20%;
`;

export default function WeatherCard({onClose,name,min,max,img,id}) {       //Función generadora del componente tarjeta
    
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
            <MinText>Min </MinText>                                {/*Aplica los estilos de texto, representa una etiqueta <span>*/}
            <MaxText>Max <br></br></MaxText>
        </div>
        <div>
            <MinText>{min+"° "}</MinText> 
            <MaxText>{max+"° "} <br></br></MaxText>
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