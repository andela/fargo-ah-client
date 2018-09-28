import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import '../styles/index.scss';
import HomePage from '../views/Home';
import Login from '../views/Login';
import UserReset from '../views/Reset';
import PasswordReset from '../views/ResetPassword';
import ResetSuccess from '../views/ResetSuccess';
import CreateArticle from '../views/CreateArticle';
import SingleArticleView from '../views/SingleArticle';
import CategoryPage from '../views/Category';
import EditProfile from '../views/EditProfile';
import VerifyEmailComponent from '../components/VerifyEmailComponent';
import ProfileView from '../views/Profile';
import EditArticle from '../views/EditArticle';
import ArticleDeleted from '../views/ArticleDeleted';
import Forbidden from '../views/403';
import NotFound from '../views/404';
import AuthRoute from './AuthRoute';

import Search from '../views/Search';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reset/edit" component={UserReset} />
      <Route path="/password/reset/edit" component={PasswordReset} />
      <Route path="/email" component={ResetSuccess} />
      <AuthRoute path="/create" component={CreateArticle} />
      <Route path="/articles/:slug" component={SingleArticleView} />
      <Route path="/category/:title" component={CategoryPage} />
      <AuthRoute path="/edit-profile" component={EditProfile} />
      <Route path="/verify-email" component={VerifyEmailComponent} exact />
      <Route path="/verify-email/:token" component={VerifyEmailComponent} />
      <Route path="/profiles/:name" component={ProfileView} />
      <AuthRoute path="/edit/:slug" component={EditArticle} />
      <Route path="/delete-message" component={ArticleDeleted} />
      <Route path="/verify-email" component={VerifyEmailComponent} exact />
      <Route path="/verify-email/:token" component={VerifyEmailComponent} />
      <Route path="/login" component={Login} />
      <Route path="/login/home" component={Login} />
      <Route path="/profiles/:name" component={ProfileView} />
      <Route path="/search" component={Search} />
      <Route path="/403" component={Forbidden} />
      <Route path="/404" component={NotFound} />
      <Redirect path="*" to="/404" />
    </Switch>
  </BrowserRouter>
);
export default Routes;
