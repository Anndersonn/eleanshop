import './index.css';
import Main from './pages/main/main';
import Clothes from './pages/clothes/clothes';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/clothes/:id' component={Clothes} />
      </Switch>
    </Router>

  );
}

export default App;
