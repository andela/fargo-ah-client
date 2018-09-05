import React, { Component } from 'react';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

class Login extends Component {
  loginSubmit = (details) => {
    console.log('@LoginPageSubmit', details);
    return details;
  };

  registerSubmit = (details) => {
    console.log('@LoginPageRegister', details);
    return details;
  };

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
