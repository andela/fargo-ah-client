import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './FooterSlim';
import Header from './Header/HeaderComponent';
import axios from 'axios';

// import PropTypes from 'prop-types';
class ResetSuccess extends Component {
  state= {
    status: false,
  }

  verifyToken = (token) => {
    axios(`http://localhost:3000/api/users/verify/${token}`).then(() => this.setState({ status: true }));
  }

  // reSendMail = () => {
  //   const email = localStorage.getItem('email');
  //   sendEmail(email);
  //   this.setState({
  //     status: true,
  //   });
  // }

  render() {
    const { status } = this.state;
    const { match } = this.props;
    // const token = match.params.token ? match.params.token : undefined;
    match.params.token ? this.verifyToken(match.params.token): null;
    return (
      <div id="success">
        <Header text="Engage" />
        <div className="success-box">
          <p id="success-text">
            {status ? 'Email Sent Successfully!' : null}
          </p>
          <h3>
              A link has been sent to your email to verify your email, for resend click
            <Link id="bold" to="/email" onClick={this.reSendMail}> here </Link>
          </h3>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ResetSuccess;
