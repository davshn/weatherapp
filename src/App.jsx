import CardGroup from './components/CardGroup';
import NavigationBar from './components/NavigationBar';
import styled from 'styled-components';
import { useState } from 'react';

const MainApp = styled.main`
  //Tu codigo aqui
  border: 2px #000 solid;
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  border-radius: 15px;
  background: linear-gradient(45deg, #d9f9ff 0%, #c9e2ff 55%, rgba(2,0,36,1) 100%);
  
  
`
const MeteorEffect = styled.span`
//Tu codigo aqui



`

function App() {
  const [cities, setCities] = useState([]);
  const apiKey='d5798098cb9831e5df41e6dcea8d454c';

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

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
      <MeteorEffect></MeteorEffect>
      <NavigationBar onSearch={onSearch} />
      <CardGroup 
        cities={cities}
        onClose={onClose}
      />
    </MainApp>
        
  );
}

export default App;

