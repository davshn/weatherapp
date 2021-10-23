import { Route } from 'react-router-dom';
import About from './view/About';
import Citiesview from './view/CitiesView';
import CityExtended from './view/CitiesView';

export default function App() {
//Enrutador
  return (
    
    <>                     {/*Si la ruta es / renderiza CitiesView, si la ruta es /about va a about*/}
      <Route
        path='/' exact
        component={Citiesview}
      />
      <Route
        path='/about'
        component={About}
      />
      <Route
          path="/city/:id"
          render={({ match }) => {
            const id = parseInt(match.params.id);
            return <CityExtended id={id} />;
          }}
        />
    </>
  );
}