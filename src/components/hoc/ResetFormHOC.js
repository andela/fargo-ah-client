import React, { Component } from 'react';


const FormHOC = WrappedComponent => class HigherComp extends Component {
  state = {
    user: {
      email: '',
    },
    loading: false,
  };

  submit = (data) => {
    console.log(data);
    return data;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    this.setState({
    });
    this.submit(user.email);
  };

  onChange = (e) => {
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
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
};

export default FormHOC;
