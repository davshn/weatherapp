import WeatherCard from './Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
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