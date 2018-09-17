import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/index.scss';
import Home from '../views/Home';
import Login from '../views/Login';
import UserReset from '../views/Reset';
import PasswordReset from '../views/ResetPassword';
import ResetSuccess from '../views/ResetSuccess';
import VerifyEmailComponent from '../components/VerifyEmailComponent';
import Editor from '../components/Editor';
import CreateArticle from '../views/CreateArticle';
import Editor from '../components/Aricles';
import CreateArticle from '../views/CreateArticle1';

const Routes = () => ((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reset/edit" component={UserReset} />
      <Route path="/password/reset/edit" component={PasswordReset} />
      <Route path="/email" component={ResetSuccess} />
      <Route path="/verify-email" component={VerifyEmailComponent} exact />
      <Route path="/verify-email/:token" component={VerifyEmailComponent} />
      <Route path="/category/:title" component={Login} />
      <Route path="/createarticle" component={CreateArticle} />
      <Route path="/editor" component={Editor} />
    </Switch>
  </BrowserRouter>
));
export default Routes;
