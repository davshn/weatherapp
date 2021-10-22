import WeatherCard from './WeatherCard';
import styled from "styled-components"
import propTypes from "prop-types";

const CardContainer = styled.section`               //Estilo del contenedor de tarjetas


`;

export default function CardGroup({cities,onClose}) {
  
  if(cities){
    return (      //Crea el contenedor de tarjetas y crea cada tarjeta con la informacion de la ciudad
    <CardContainer>    
    {
      cities.map((city)=> <WeatherCard 
        country={city.country} 
        temp={city.temp} 
        name={city.name} 
        onClose={onClose}
        key={city.id}
        id={city.id}
        weatherDesc={city.weatherDesc.charAt(0).toUpperCase() + city.weatherDesc.slice(1)}
        weather={city.weather}
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