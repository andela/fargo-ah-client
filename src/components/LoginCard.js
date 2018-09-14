import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Card, Icon } from 'semantic-ui-react';
import { login } from '../redux/actions/userActions';
import Login from './forms/LoginFormModal';
import Register from './forms/RegisterFormModal';
import userSignupAction from '../redux/actions/signupAction';

export class LoginCard extends React.Component {
  loginSubmit = (details) => {
    const { loginAction, history } = this.props;
    return loginAction(details).then(() => history.push('/'));
  };

  registerSubmit = (user) => {
    const { userSignup, history } = this.props;
    return userSignup(user).then(() => history.push('/verify-email'));
  }

  render() {
    return (
      <div id="login_div">
        <Card fluid>
          <Card.Header>Welcome</Card.Header>
          <Card.Content>
            <form action={process.env.GOOGLE_LOGIN_URL} method="GET">
              <Button className="btn">
                <Icon name="google plus square" size="big" />
              Continue with google
              </Button>
            </form>
            <form action={process.env.FACEBOOK_LOGIN_URL} method="GET">
              <Button className="btn">
                <Icon name="facebook square" size="big" />
              Continue with facebook
              </Button>
            </form>
            <Card.Description className="email-login login-footer">
              Not a fan of social media?&nbsp;&nbsp;
              <Login submitForm={this.loginSubmit} />
            </Card.Description>
          </Card.Content>
          <Card.Content extra className="login-footer">
            Do not have an account?&nbsp;&nbsp;
            <Register submitForm={this.registerSubmit} />
          </Card.Content>
        </Card>
      </div>
    );
  }
}

LoginCard.propTypes = {
  userSignup: PropTypes.func.isRequired,
  loginAction: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const LoginCardWithRedux = connect(null, {
  loginAction: login, userSignup: userSignupAction,
})(LoginCard);

export default LoginCardWithRedux;
