import CardGroup from './components/CardGroup';
import NavigationBar from './components/NavigationBar';
import styled from 'styled-components';
import { useState } from 'react';

const MainApp = styled.main`
  //Tu codigo aqui

`

function App() {
  const [cities, setCities] = useState([]);
  const apiKey='4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(ciudad) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(data => data.json())
    .then((resource) => {
      if(resource.main !== undefined){
        const ciudad = {
          min: Math.round(resource.main.temp_min*10)/10,
          max: Math.round(resource.main.temp_max*10)/10,
          img: resource.weather[0].icon,
          id: resource.id,
          wind: resource.wind.speed,
          temp: resource.main.temp,
          name: resource.name,
          weather: resource.weather[0].main,
          clouds: resource.clouds.all,
          latitud: resource.coord.lat,
          longitud: resource.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
    }

  return (
    
    <MainApp>    {/*Crea el arreglo de ciudades y les pasa parametros*/}
      <NavigationBar onSearch={onSearch} />
      <CardGroup cities={cities}/>
    </MainApp>
        
  );
}

export default App;

