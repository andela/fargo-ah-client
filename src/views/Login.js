import React, { Component } from 'react';
import LoginModal from '../components/forms/LoginFormModal';
import RegisterModal from '../components/forms/RegisterFormModal';


class Login extends Component {
  loginSubmit = details => details;

  registerSubmit = details => details;

  render() {
    return (
      <div>
        <h1>FARGO REACT APP - TEST LOGIN VIEW</h1>
        <LoginModal submit={this.loginSubmit} />
        <RegisterModal submit={this.registerSubmit} />
      </div>
    );
  }
}
export default Login;
