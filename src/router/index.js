import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/index.scss';
import HomePage from '../views/Home';
import Login from '../views/Login';
import VerifyEmailComponent from '../components/VerifyEmailComponent';
import UserReset from '../views/Reset';
import PasswordReset from '../views/ResetPassword';
import ResetSuccess from '../views/ResetSuccess';
import CreateArticle from '../views/CreateArticle';
import SingleArticleView from '../views/SingleArticle';
import CategoryPage from '../views/Category';
import EditProfile from '../views/EditProfile';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/verify-email" component={VerifyEmailComponent} exact />
      <Route path="/verify-email/:token" component={VerifyEmailComponent} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reset/edit" component={UserReset} />
      <Route path="/password/reset/edit" component={PasswordReset} />
      <Route path="/email" component={ResetSuccess} />
      <Route path="/create" component={CreateArticle} />
      <Route path="/articles/:slug" component={SingleArticleView} />
      <Route path="/profile" component={HomePage} />
      <Route path="/category/:title" component={CategoryPage} />
      <Route path="/editprofile" component={EditProfile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
