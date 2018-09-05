import React, { Component } from 'react';
import LoginCard from '../components/LoginCard';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

class Login extends Component {
  loginSubmit = details => details;

  registerSubmit = details => details;

  render() {
    return (
      <div>
        <h1>FARGO REACT APP - TEST LOGIN VIEW</h1>
        <LoginModal submit={this.loginSubmit} />
        <RegisterModal submit={this.registerSubmit} />
        <LoginCard />
      </div>
    );
  }
}

export default Login;
