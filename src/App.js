import './index.css';
import Clothes from './pages/listing/listing';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Contacts from './pages/contacts/contacts';
import ShowRoom from './pages/showroom/showroom';
import Main from './pages/main/main';
import {navigationContext} from './context/navigationContext'
import { useState } from 'react';

function App() {

  const [burger, setBurger] = useState(true)

  return (
    <Router>
      <Switch>
        <navigationContext.Provider value={{burger, setBurger}}>
          <Route path='/' exact component={Main} />
          <Route path='/clothes/:id' component={Clothes} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/showroom' component={ShowRoom} />
        </navigationContext.Provider>
      </Switch>
    </Router>

  );
}

export default App;
