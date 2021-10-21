import CardGroup from './components/CardGroup';
import NavigationBar from './components/NavigationBar';
import data from './data.js';
import styled from 'styled-components';

const MainApp = styled.main`
  //Tu codigo aqui



`

function App() {
  return (
    
    <MainApp>    {/*Crea el arreglo de ciudades y les pasa parametros*/}
      <NavigationBar/>
      <CardGroup                               
        cities={data}
      />
    </MainApp>
        
  );
}

export default App;
