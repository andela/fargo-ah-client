import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'views/Home';
import Login from 'views/Login';


const Routes = () => ((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
));
export default Routes;
