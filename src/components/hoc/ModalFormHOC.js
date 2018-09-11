import React, { Component } from 'react';

export const modalOptions = { animation: 'fly up', duration: 1000 };

/**
  * Higher order component returning the form modal states
  * @param {Object} WrappedComponent user login details.
  * @returns {object} returns the user details
  */

/* eslint-disable react/prop-types */
const FormHOC = WrappedComponent => class HOC extends Component {
    state = {
      user: {
        username: '',
        email: '',
        password: '',
      },
      errors: '',
      usernameError: '',
      passwordError: '',
      emailError: '',
      randomError: '',
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
      const { submitForm } = this.props;
      this.setState({ loading: true });
      return submitForm({ user }).then((data) => {
        this.setState({ loading: false });
        if (data.message) this.setState({ randomError: data.message });
      }).catch((err) => {
        const newErrors = Object.assign({}, ...err.response.data.errors.body);
        const { usernameError, passwordError, emailError } = newErrors;
        if (typeof err.response.data.errors.body[0] !== 'object') this.setState({ randomError: err.response.data.errors.body[0] });
        this.setState({
          usernameError, passwordError, emailError, loading: false,
        });
      });
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
        usernameError: '',
        emailError: '',
        passwordError: '',
        randomError: '',
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
};
/* eslint-enable */
export default FormHOC;
