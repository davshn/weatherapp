import WeatherCard from './WeatherCard';
import styled from "styled-components"
import { Text } from "./TextStyled";
import propTypes from "prop-types";

const CardContainer = styled.section`               //Estilo del contenedor de tarjetas
//Tu codigo acá
background:white;
border: 5px solid red;

`;

export default function CardGroup({cities}) {
  if(cities){
  return (
  <CardContainer>    
    {
      cities.map((city)=> <WeatherCard 
        max={city.main.temp_max} 
        min={city.main.temp_min} 
        name={city.name} 
        img={city.weather[0].icon} 
        onClose={() => alert(city.name)}
        key={city.id}/>               
      )
    }{/*para cada elemento del array cities, crea por funcion flecha una tarjeta de clima para cada elemento*/}
  </CardContainer>
  )
  }
  else {return <Text>Sin ciudades</Text>}
};


WeatherCard.propTypes = {            //Verificacion de que los datos enviados sean del tipo correcto
    cities: propTypes.array
}