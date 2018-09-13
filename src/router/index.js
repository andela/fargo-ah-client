import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/index.scss';
import Home from '../views/Home';
import Login from '../views/Login';
import VerifyEmailComponent from '../components/VerifyEmailComponent';

const Routes = () => ((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/verify-email" component={VerifyEmailComponent} exact />
      <Route path="/verify-email/:token" component={VerifyEmailComponent} />
      <Route path="/category/:title" component={Login} />
    </Switch>
  </BrowserRouter>
));
export default Routes;
