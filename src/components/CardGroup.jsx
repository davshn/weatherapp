import WeatherCard from './WeatherCard';
import styled from "styled-components"
import propTypes from "prop-types";

const CardContainer = styled.section`               //Estilo del contenedor de tarjetas
//Tu codigo acá

`;

export default function CardGroup({cities,onClose}) {
  
  if(cities){
  return (
  <CardContainer>    
    {
      cities.map((city)=> <WeatherCard 
        max={city.max} 
        min={city.min} 
        name={city.name} 
        img={city.img} 
        onClose={onClose}
        key={city.id}
        id={city.id}/>               
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