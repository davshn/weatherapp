import styled from "styled-components"
import {CloseButton} from './CloseButtonStyled';
import propTypes from "prop-types";
import day from "../assets/dia.jpg";
import night from "../assets/noche.jpg";
import { Link } from "react-router-dom";

const WhCard = styled.article`               //Estilo de la tarjeta de clima
    display:grid;                               //crea una cuadricula
    grid-template-columns:repeat(2,1fr);        //2 columnas iguales de grandes
    grid-template-rows:repeat(3,1fr);                 //1 columna de una tercera parte del tamaño de la segunda
    position:relative;
    align-items:center;
    border-radius: 0.5rem;
    -webkit-box-shadow: 7px 23px 65px -26px #f6f0fc;
    -moz-box-shadow: 7px 23px 65px -26px #f6f0fc;
    box-shadow: 7px 23px 65px -26px #f6f0fc;
    background: ${(props)=> props.current === "d" ? `url(${day})` : `url(${night})`};
    background-size: cover;

    @media (min-width:576px){                            //responsive para escritorio
        width:16rem;                                     //1 rem = 16px en pantallas de pc
        height:23rem;    
        grid-template-columns:1fr;
        grid-template-rows:repeat(7,1fr);
        border: 1px #fff solid;
        
        &:hover{
        transform : scale(1.1);
	    -moz-transform : scale(1.1); /* Firefox */
	    -webkit-transform : scale(1.1); /* Chrome - Safari */
	    -o-transform : scale(1.1); /* Opera */
	    -ms-transform : scale(1.1); /* IE9 */
        -webkit-box-shadow: 7px 23px 65px -26px #f6f0fc;
        -moz-box-shadow: 7px 23px 65px -26px #f6f0fc;
        box-shadow: 7px 23px 65px -26px #f6f0fc;
        }
    }                                          
  
`;
//estilo para los titulos de las cartas
const Routlink= styled(Link)`
    grid-column: 1/span 2;
    text-align: center;
    text-decoration: none;
    
    @media (min-width:576px){                            //responsive para escritorio
        grid-column: 1;                         
    }              
`

const TitleCard = styled.span`
    -webkit-text-stroke: 1px white;
    color: transparent; 
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
`;

const InfoText = styled.span`
    color: #fdfdfd;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    
`;
const InfoCountry = styled.span`
    grid-column: 1/span 2;
    color: #fdfdfd;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    @media (min-width:576px){                            //responsive para escritorio
        grid-column: 1;                         
    }  
`;
const ImgCard = styled.img`
    grid-column: 1/span 2;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (min-width:576px){                            //responsive para escritorio
        grid-column: 1;                         
    } 
    
`;

export default function WeatherCard({onClose,name,id,country,weather,longitude,latitude,sunrise,sunset}) {       //Función generadora del componente tarjeta
    function getDate(unix){
    let date=new Date(unix*1000);
        return date;
    }
    return (                          //Dentro del return hay codigo html xon inserciones de javascript
    <WhCard current={weather}> 
                                                        {/*WhCard aplica los estilos de la tarjeta de clima, representa una etiqueta <article> */}
            <CloseButton onClick={(e) => {
                e.preventDefault();
                onClose(id);
            }}>
            X
            </CloseButton>   {/*Aplica los estilos de boton cerrar, representa una etiqueta <Button>*/}
            <Routlink to={`/city/${id}`} >
            <TitleCard>{name}</TitleCard>                    {/*Aplica los estilos del titulo de tarjetas, representa una etiqueta <h3>*/}
            </Routlink>
            <InfoCountry>{`Pais: ${country}`}</InfoCountry>       {/*Aplica los estilos de texto, representa una etiqueta <span>*/}
            <InfoText>{`Longitud: ${longitude}`}</InfoText> 
            <InfoText>{`Latitud: ${latitude}`}</InfoText> 
            <InfoText>{`Salida del sol: ${getDate(sunrise).getHours()+":"+getDate(sunrise).getMinutes()}`}</InfoText> 
            <InfoText>{`Puesta del sol: ${getDate(sunset).getHours()+":"+getDate(sunset).getMinutes()}`}</InfoText> 
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