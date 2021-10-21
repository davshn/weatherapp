import CardGroup from './components/CardGroup';
import data from './data.js';

function App() {
  return (
    
    <main>    {/*Crea el arreglo de ciudades y les apsa parametros*/}
    <CardGroup                               
      cities={data}
    />
    </main>
        
  );
}

export default App;
