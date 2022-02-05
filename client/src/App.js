import Home from './pages/home/Home';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from './pages/profile/Profile'
import Messenger from './pages/messenger/Messenger'
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { Redirect, Switch } from 'react-router'
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Switch>
        <Route exact path="/">

          {user ? <Home /> : < Login />}
        </Route>

        <Route path="/login">
          {user ? <Redirect to='/' /> : <Login />}
        </Route>

        <Route path="/register">
          {user ? <Redirect to='/' /> : <Register />}

        </Route>

        <Route path="/messenger">

          {user ? <Redirect to='/' /> : <Messenger />}

        </Route>

        <Route path="/profile/:username">
          <Profile />
        </Route>

      </Switch>

    </Router>

  );
}

export default App;
