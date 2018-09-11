import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import Footer from './FooterSlim';
import Header from './Header/HeaderComponent';
import verifyEmail, { resendEmail } from '../redux/actions/emailAction';

export class VerifyEmailComponent extends Component {
  state= {
    sent: false,
    loading: false,
    isVerifyTokenPage: false,
    verifyTokenMessage: '',
  }

  componentDidMount() {
    this.checkToken();
  }

  checkToken = () => {
    const { match, verifyEmailAction, location } = this.props;
    if (match.params.token) {
      this.setState({ isVerifyTokenPage: true, loading: true });
      verifyEmailAction(match.params.token).then(() => {
        this.setState({ loading: false, verifyTokenMessage: 'Your account has been successfully verified ' });
        this.redirect();
      }).catch(err => this.setState({
        verifyTokenMessage: err.response.data.errors.body[0],
        loading: false,
      }));
    } else if (location.search.startsWith('?email')) {
      const emailAddress = location.search.replace('?email=', '').trim();
      window.history.replaceState({}, document.title, '/verify-email');
      this.reSendMail(emailAddress);
    }
  }

  reSendMail = (emailAddress) => {
    const { currentUser, resendEmailAction } = this.props;
    resendEmailAction(emailAddress || currentUser.detail.email);
    this.setState({
      sent: true,
    });
  }


  redirect = () => {
    const { history } = this.props;
    setTimeout(() => { history.push('/login'); }, 5000);
  }


  render() {
    const {
      sent, isVerifyTokenPage, verifyTokenMessage, loading,
    } = this.state;
    const { currentUser } = this.props;
    return (
      <div id="success">
        <Header text="Engage" pathname="/login" />
        <Dimmer active={loading}><Loader>processing...</Loader></Dimmer>
        <div className="success-box">
          <p id="success-text">
            {sent ? 'Email Sent Successfully!' : null}
          </p>
          { isVerifyTokenPage ? <h3>{verifyTokenMessage}</h3>
            : (
              <h3>
              A link has been sent to your email to verify your email, for resend click
                <Link id="bold" to="/verify-email" onClick={() => this.reSendMail(currentUser.detail.email)}> here </Link>
              </h3>
            )
            }
        </div>
        <Footer />
      </div>
    );
  }
}
VerifyEmailComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  verifyEmailAction: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    detail: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  }).isRequired,
  resendEmailAction: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  currentUser: state.currentUser,
});
export default connect(mapStateToProps, {
  verifyEmailAction: verifyEmail,
  resendEmailAction: resendEmail,
})(VerifyEmailComponent);
