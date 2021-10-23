import { Route } from 'react-router-dom';
import About from './view/About';
import Citiesview from './view/CitiesView';
import CityExtended from './view/CityExtended';
import { useState } from 'react';

export default function App() {
const [cities, setCities] = useState([]);                 //Estado para agregar las ciudades
  const apiKey='d5798098cb9831e5df41e6dcea8d454c';

function onClose(id) {                                    //Funcion para cerrar las tarjetas
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

function onSearch(ciudad) {                   //Funcion buscadora, trae la informacion de la API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=sp&appid=${apiKey}&units=metric`)
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
function onFilter(cityId) {
  let city = cities.filter(c => c.id === parseInt(cityId));
  if(city.length > 0) {
      return city[0];
  } else {
      return null;
  }
}

  return (
    <>                     {/*Si la ruta es / renderiza CitiesView, si la ruta es /about va a about*/}
      <Route
        exact path='/'
        render={() => <Citiesview 
          onSearch={onSearch}
          cities={cities} 
          onClose={onClose}
          />}
      />
      <Route
        path='/about'
        component={About}
      />
      <Route
        exact path="/city/:id"
        render={() => <CityExtended 
        onFilter={onFilter}/>}
      />
    </>
  );
}