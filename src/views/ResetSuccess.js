import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sendEmail } from '../redux/actions/resetPassword';
import Footer from '../components/FooterSlim';
import Header from '../components/Header/HeaderComponent';

class ResetSuccess extends Component {
  state= {
    status: false,
  }

  reSendMail = () => {
    const email = localStorage.getItem('email');
    sendEmail(email);
    this.setState({
      status: true,
    });
  }

  render() {
    const { status } = this.state;
    return (
      <div id="success">
        <Header text="Home" pathname="/login" />
        <div className="success-box">
          <p id="success-text">
            {status ? 'Email Sent Successfully!' : null}
          </p>
          <h3>
              A link has been sent to your email to reset your password, to resend click
            <Link id="bold" to="/email" onClick={this.reSendMail}> here </Link>

          </h3>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ResetSuccess;
