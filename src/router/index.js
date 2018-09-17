import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/index.scss';
import Home from '../views/Home';
import Login from '../views/Login';
import VerifyEmailComponent from '../components/VerifyEmailComponent';
import CategoryPage from '../views/Category';
import CreateArticle from '../views/CreateArticle1';
import SingleArticle from '../views/SingleArticle';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/verify-email" component={VerifyEmailComponent} exact />
      <Route path="/verify-email/:token" component={VerifyEmailComponent} />
      <Route path="/category/:title" component={CategoryPage} />
      <Route path="/create" component={CreateArticle} />
      <Route path="/articles/:slug" component={SingleArticle} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
