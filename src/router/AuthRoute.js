import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AuthRoute = ({ component: Component, isAuthenticated, ...otherProps }) => (
  <Route
    {...otherProps}
    render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/403" />)}
  />
);

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.currentUser.isAuthenticated,
});

export default connect(mapStateToProps)(AuthRoute);
