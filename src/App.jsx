import CardGroup from './components/CardGroup';
import NavigationBar from './components/NavigationBar';
import data from './data.js';

function App() {
  return (
    
    <main>    {/*Crea el arreglo de ciudades y les pasa parametros*/}
      <NavigationBar/>
      <CardGroup                               
        cities={data}
      />
    </main>
        
  );
}

export default App;
