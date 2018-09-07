import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginCard from '../components/LoginCard';
import Header from '../components/Header/LoginNav';
import FooterSlim from '../components/FooterSlim';

import { user } from '../tests/__mocks__/mockData';

class Login extends Component {
  loginSubmit = (details) => {
    const {
      history: { push },
    } = this.props;
    console.log('@LoginDetails', details);
    push('/');
  };

  registerSubmit = (details) => {
    const {
      history: { push },
    } = this.props;
    console.log('@registerDetails', details);
    push('/');
  };

  render() {
    return (
      <div>
        <Header text="Home" user={user} />
        <LoginCard loginSubmit={this.loginSubmit} registerSubmit={this.registerSubmit} />
        <FooterSlim />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
