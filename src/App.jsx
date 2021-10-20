import CardGroup from './components/CardGroup';
import data from './data.js';

function App() {
  return (
    
    <div>    {/*Crea el arreglo de ciudades y les apsa parametros*/}
    <CardGroup                               
      cities={data}
    />
    </div>
        
  );
}

export default App;
