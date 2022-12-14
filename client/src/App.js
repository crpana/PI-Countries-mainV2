import './App.css';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CreateActivity from './components/CreateActivity/CreateActivity';
import CountryDetail from './components/CountryDetalles/CountryDetalles';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home/:id' component={CountryDetail}></Route>
          <Route path='/home' component={Home} />
          <Route path='/activities' component={CreateActivity}/>
        </Switch>   

      </div>
    </BrowserRouter>
  );
}

export default App;
//component={CountryDetail}