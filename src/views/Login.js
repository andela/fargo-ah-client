import React, { Component } from 'react';
import LoginModal from '../components/forms/LoginFormModal';
import RegisterModal from '../components/forms/RegisterFormModal';

/**
 * Represents the Login Component.
 * @extends Component
 * */
class Login extends Component {
  /**
    * When the state changes, does it affect the rendered appearance?
    * @param {Object} details user login details.
    * @returns {Object} returns the user details
    */
  loginSubmit = details => details;

  /**
    * When the state changes, does it affect the rendered appearance?
    * @param {Object} details user register details.
    * @returns {Object} returns the user details
    */
  registerSubmit = details => details;

  /**
 * Renders the Component.
 * @returns {Object} returns the jsx
 * */
  render() {
    return (
      <div>
        <h1>FARGO REACT APP - TEST LOGIN VIEW</h1>
        <LoginModal handleSubmit={this.loginSubmit} />
        <RegisterModal handleSubmit={this.registerSubmit} />
      </div>
    );
  }
}

export default Login;
