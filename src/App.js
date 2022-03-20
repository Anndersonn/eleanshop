import './index.css';
import Main from './pages/main/main';
import Clothes from './pages/clothes/clothes';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Contacts from './pages/contacts/contacts';
import ShowRoom from './pages/brand/brand';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/clothes/:id' component={Clothes} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/showroom' component={ShowRoom} />
      </Switch>
    </Router>

  );
}

export default App;
