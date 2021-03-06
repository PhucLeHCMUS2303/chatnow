import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignIn from '../AuthPage/SignIn';
import SignUp from '../AuthPage/SignUp';
import Home from '../Home';
import PrivateRoute from './PrivateRoute';

const RoutesComponent = () => (
  <Switch>
    <PrivateRoute exact path='/' component={Home}></PrivateRoute>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default RoutesComponent;