import React from 'react';
import PropTypes from 'prop-types';
import LoginCardWithRedux from '../components/LoginCard';
import Header from '../components/Header/HeaderComponent';
import FooterSlim from '../components/FooterSlim';

const Login = ({ history, history: { location } }) => (
  <div>
    <Header text="Home" pathname={location.pathname} />
    <LoginCardWithRedux history={history} />
    <FooterSlim />
  </div>
);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
