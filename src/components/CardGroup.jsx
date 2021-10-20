import WeatherCard from './WeatherCard';

export default function CardGroup(props) {
  

  return (
  <>    
    {
      props.cities.map((city)=> <WeatherCard 
        max={city.main.temp_max} 
        min={city.main.temp_min} 
        name={city.name} 
        img={city.weather[0].icon} 
        onClose={() => alert(city.name)}
        key={city.id}/>               
      )
    }{/*para cada elemento del array cities, crea por funcion flecha una tarjeta de clima para cada elemento*/}
  </>
  )
};