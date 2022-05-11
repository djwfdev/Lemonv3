import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RequestService from './pages/RequestService';
import Login from './pages/Login';
import LoginMotorist from './pages/LoginMotorist';
import LoginAP from './pages/LoginAP';
import SignUp from './pages/SignUp';
import SignUpMotorist from './pages/SignUpMotorist';
import SignUpAP from './pages/SignUpAP';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/service-request' component={RequestService} />
          <Route path='/login' component={Login} />
          <Route path='/login-motorist' component={LoginMotorist} />
          <Route path='/login-ap' component={LoginAP} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signup-ap' component={SignUpAP} />
          <Route path='/signup-motorist' component={SignUpMotorist} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
