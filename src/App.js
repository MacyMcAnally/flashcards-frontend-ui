import HomePage from './components/pages/HomePage';
import Header from './components/Header'
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewUserPage from './components/pages/NewUserPage';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <LoginPage exact path='/Login' component={LoginPage} />
          <NewUserPage exact path='/NewUser' component={NewUserPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
