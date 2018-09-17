import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/index.scss';
import Home from '../views/Home';
import Login from '../views/Login';
import UserReset from '../views/Reset';
import PasswordReset from '../views/ResetPassword';
import ResetSuccess from '../views/ResetSuccess';
import VerifyEmailComponent from '../components/VerifyEmailComponent';
import CategoryPage from '../views/Category';
import CreateArticle from '../views/CreateArticle1';
import SingleArticle from '../views/SingleArticle';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reset/edit" component={UserReset} />
      <Route path="/password/reset/edit" component={PasswordReset} />
      <Route path="/email" component={ResetSuccess} />
      <Route path="/verify-email" component={VerifyEmailComponent} exact />
      <Route path="/verify-email/:token" component={VerifyEmailComponent} />
      <Route path="/category/:title" component={CategoryPage} />
      <Route path="/create" component={CreateArticle} />
      <Route path="/articles/:slug" component={SingleArticle} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
