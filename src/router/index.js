import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/index.scss';
import Home from '../views/Home';
import Login from '../views/Login';
import UserReset from '../views/Reset';

const Routes = () => ((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/login/home" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reset" component={UserReset} />
    </Switch>
  </BrowserRouter>
));
export default Routes;
