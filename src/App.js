import WeatherCard from './components/WeatherCard';
import {Cairns} from './data.js';

function App() {
  return (
    
    <div>
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
