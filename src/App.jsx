import CardGroup from './components/CardGroup';
import data from './data.js';

function App() {
  return (
    
    <div>    {/*Crea la tarjeta de clima y le pasa parametros*/}
    <CardGroup                               
      cities={data}
    />
    </div>
        
  );
}

export default App;
