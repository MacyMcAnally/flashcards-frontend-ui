import HomePage from './components/pages/HomePage';
import Header from './components/Header'
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import NewUserPage from './components/pages/NewUserPage';
import UserHomePage from './components/UserWPass/UserHomePage';
import UserNotFound from './components/pages/UserNotFound';
import ViewCards from './components/UserWPass/ViewCards';
import CreateCards from './components/UserWPass/CreateCards';
import CreateCardTemp from './components/UserWPass/CreateCardTemp';


import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/ui' component={HomePage} />
          <LoginPage exact path='/ui/Login' component={LoginPage} />
          <NewUserPage exact path='/ui/NewUser' component={NewUserPage} />
          <UserNotFound exact path='/ui/UserError' component={UserNotFound} />
          <UserHomePage exact path='/ui/UserHome' component={UserHomePage} />
          <ViewCards exact path='/ui/ViewCards' component={ViewCards} />
          <CreateCardTemp exact path='/ui/CreateTemp' component={CreateCardTemp} />
          <CreateCards exact path='/ui/CreateCards' component={CreateCards} />
          { /* <ViewCardsComponent cards={state.cards}/>*/ }
        </Switch>
      </Router>
    </>
  );
}

export default App;
