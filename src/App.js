import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import signup from './pages/signup';
import signin from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={signup} />
        <Route path='/signin' exact component={signin} />
      </Switch>
    </Router>
  );
}

export default App;
