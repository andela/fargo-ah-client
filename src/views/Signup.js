import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterModal from '../components/RegisterModal';
import userSignupAction from '../redux/actions/signupAction';

class Signup extends Component {
  registerSubmit = (details) => {
    console.log('@LoginPageRegister', details);
    return details;
  };

  render() {
    const { userSignup, history } = this.props;
    return (
      <div>
        <h1>FARGO REACT APP - TEST LOGIN VIEW</h1>
        <RegisterModal submit={this.registerSubmit} history={history} userSignup={userSignup} />
      </div>
    );
  }
}

export default connect(null, { userSignup: userSignupAction })(Signup);
