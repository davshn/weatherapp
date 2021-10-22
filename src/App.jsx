import CardGroup from './components/CardGroup';
import NavigationBar from './components/NavigationBar';
import styled from 'styled-components';
import { useState } from 'react';

const MainApp = styled.main`
  border: 2px #000 solid;
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  border-radius: 15px;
  background: linear-gradient(45deg, #d9f9ff 0%, #c9e2ff 55%, rgba(2,0,36,1) 100%);
    
`
const MeteorEffect = styled.span`


`

function App() {
  const [cities, setCities] = useState([]);                 //Estado para agregar las ciudades
  const apiKey='d5798098cb9831e5df41e6dcea8d454c';

  function onClose(id) {                                    //Funcion para cerrar las tarjetas
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {                   //Funcion buscadora, trae la informacion de la API
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=sp&appid=${apiKey}&units=metric`)
    .then(data => data.json())
      .then((resource) => {
        if(resource.main !== undefined){
          const ciudad = {
            temp: Math.round(resource.main.temp*10)/10,      //Temperatura
            id: resource.id,                                 //Codigo unico ciudad
            weatherDesc: resource.weather[0].description,    //Descripcion del clima
            country: resource.sys.country,                   //Pais
            name: resource.name,                             //Nombre de la ciudad
            weather: resource.weather[0].icon,               //Clima
          };
        setCities(oldCities => [...oldCities, ciudad]);       //Crea un arreglo con todas las ciudades a mostrar
      } else {
        alert("Ciudad no encontrada");                        //Mensaje si no encuentra una ciudad
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

