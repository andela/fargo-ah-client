import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import Home from '../views/Home';
import Login from '../views/Login';

const Routes = () => (
=======
import Home from 'views/Home';
import Login from 'views/Login';


const Routes = () => ((
>>>>>>> ch(router): Setup react router
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
<<<<<<< HEAD
);
=======
));
>>>>>>> ch(router): Setup react router
export default Routes;
