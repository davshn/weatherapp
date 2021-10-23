import { Route } from 'react-router-dom';
import About from './view/About';
import Citiesview from './view/CitiesView';

export default function App() {
//Enrutador
  return (
    
    <>                     {/*Si la ruta es / renderiza CitiesView, si la ruta es /about va a about*/}
      <Route
        path='/'
        component={Citiesview}
      />
      <Route
        path='/about'
        component={About}
      />
    </>
  );
}