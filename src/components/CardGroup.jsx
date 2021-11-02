import WeatherCard from './WeatherCard';
import styled from "styled-components"
import propTypes from "prop-types";
//Contenedor de las cartas, envia informacion a las cartas
const CardContainer = styled.section`               //Estilo del contenedor de tarjetas
  display:flex;
  flex-direction:column;                            //organiza en columnas las tarjetas
  gap:0.5rem;                                       //Separacion de las tarjetas
  padding-top:1rem;


  @media (min-width:576px){                            //responsive para escritorio
    flex-direction:row;                             //organiza en fila las tarjetas
    flex-wrap: wrap;                                //Cuando se llene la fila crea una nueva fila
    justify-content:center;                               
    gap:5rem;
    padding-top:2rem;
  }                                          

`;

export default function CardGroup({cities,onClose}) {
  
  if(cities){
    return (      //Crea el contenedor de tarjetas y crea cada tarjeta con la informacion de la ciudad
    <CardContainer>    
    { 
      cities.map((city)=> <WeatherCard          
        onClose={onClose}
        key={city.id}                       
        id={city.id}
        name={city.name}
        country={city.country}
        weather={city.weather[2]}
        longitude={city.longitude}
        latitude={city.latitude}
        sunrise={city.sunrise}
        sunset={city.sunset}
        />               
      )
    }{/*para cada elemento del array cities, crea por funcion flecha una tarjeta de clima para cada elemento*/}
    </CardContainer>
    )
  }
  else {return <span>Sin ciudades</span>}
};


WeatherCard.propTypes = {            //Verificacion de que los datos enviados sean del tipo correcto
    cities: propTypes.array
}