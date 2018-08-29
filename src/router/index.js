<<<<<<< HEAD
import React from 'react';
=======
import React from'react';
>>>>>>> ch(router): Setup react router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';

<<<<<<< HEAD
const Routes = () => ((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
));
export default Routes;
=======

const Routes = () => ((
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
    </Switch>
    </BrowserRouter>
  ));
  
  export default Routes;
  
>>>>>>> ch(router): Setup react router
