export default function fetchCity(city) {    
    const apiKey='d5798098cb9831e5df41e6dcea8d454c';               //Funcion buscadora, trae la informacion de la API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sp&appid=${apiKey}&units=metric`)
    .then(data => data.json())
      .then((resource) => {
        if(resource.main !== undefined){
          const city = {
            temp: Math.round(resource.main.temp*10)/10,      //Temperatura
            id: resource.id,                                 //Codigo unico ciudad
            weatherDesc: resource.weather[0].description,    //Descripcion del clima
            country: resource.sys.country,                   //Pais
            name: resource.name,                             //Nombre de la ciudad
            weather: resource.weather[0].icon,               //Clima
          };
        return city;       //Crea un arreglo con todas las ciudades a mostrar
      } else {
       alert("Ciudad no encontrada");                        //Mensaje si no encuentra una ciudad
      }
    });
}