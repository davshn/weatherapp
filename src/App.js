import WeatherCard from './components/WeatherCard';
import {Cairns} from './data.js';

function App() {
  return (
    
    <div>    {/*Crea la tarjeta de clima y le pasa parametros*/}
    <WeatherCard                               
      max={Cairns.main.temp_max}
      min={Cairns.main.temp_min}
      name={Cairns.name}
      img={Cairns.weather[0].icon}
      onClose={() => alert(Cairns.name)}
    />
    </div>
        
  );
}

export default App;
