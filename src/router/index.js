import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import Home from '../views/Home';
import Login from '../views/Login';

const Routes = () => (
=======
import Home from 'views/Home';
import Login from 'views/Login';


const Routes = () => ((
>>>>>>> ch(router): Setup react router
=======
import Home from '../views/Home';
import Login from '../views/Login';

const Routes = () => (
>>>>>>> ch(testing): Setup testing environment
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
<<<<<<< HEAD
<<<<<<< HEAD
);
=======
));
>>>>>>> ch(router): Setup react router
=======
);
>>>>>>> ch(testing): Setup testing environment
export default Routes;
