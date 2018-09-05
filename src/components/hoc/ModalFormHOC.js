import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const modalOptions = { animation: 'fly up', duration: 1000 };

/**
  * Higher order component returning the form modal states
  * @param {Object} WrappedComponent user login details.
  * @returns {object} returns the user details
  */
const FormHOC = (WrappedComponent) => {
  /**
   * Represents the Login Component.
   * @extends Component
   */
  class HOC extends Component {
    state = {
      user: {
        username: '',
        email: '',
        password: '',
      },
      errors: {
        username: '',
        email: '',
        password: '',
      },
      loading: false,
      open: false,
    };

    /**
     * Handles show for the modals
     * @returns {Object} sets the open state to true
     */
    show = () => this.setState({ open: true });

    /**
     * Handles close for the modals
     * @returns {Object} sets the close state to true
     */
    close = () => this.setState({ open: false });

    /**
     * Handles for submission
     * @param {Object} e - event
     * @returns {Object} returns the handle submit prop
    * */
    handleSubmit = (e) => {
      e.preventDefault();
      const { user } = this.state;
      const { handleSubmit } = this.props;
      this.setState({ loading: true });
      return handleSubmit(user);
    };

    /**
    * Handles form change
    * @param {Object} e - event
    * @returns {Object} returns nothing
    * */
    handleChange = (e) => {
      const { user } = this.state;
      this.setState({
        user: {
          ...user,
          [e.target.name]: e.target.value,
        },
      });
    };

    /**
      * Renders the wrapped Component with props.
      * @returns {Object} returns the component
    */
    render() {
      return (
        <WrappedComponent
          state={this.state}
          show={this.show}
          close={this.close}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          {...this.props}
        />
      );
    }
  }
  HOC.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
  return HOC;
};

export default FormHOC;
