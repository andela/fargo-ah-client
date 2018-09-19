import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/index.scss';
import HomePage from '../views/Home';
import Login from '../views/Login';
import VerifyEmailComponent from '../components/VerifyEmailComponent';
import UserReset from '../views/Reset';
import PasswordReset from '../views/ResetPassword';
import ResetSuccess from '../views/ResetSuccess';
import CategoryPage from '../views/Category';

const Routes = () => ((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/verify-email" component={VerifyEmailComponent} exact />
      <Route path="/verify-email/:token" component={VerifyEmailComponent} />
      <Route path="/login/home" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reset/edit" component={UserReset} />
      <Route path="/password/reset/edit" component={PasswordReset} />
      <Route path="/email" component={ResetSuccess} />
      <Route path="/category/:title" component={CategoryPage} />
    </Switch>
  </BrowserRouter>
));

export default Routes;
