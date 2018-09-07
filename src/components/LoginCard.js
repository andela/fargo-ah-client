import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Icon } from 'semantic-ui-react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const LoginCard = ({ loginSubmit, registerSubmit }) => (
  <div id="login_div">
    <Card fluid>
      <Card.Header>Welcome</Card.Header>
      <Card.Content>
        <Button className="btn">
          <Icon name="google plus square" size="big" />
          Continue with google
        </Button>
        <Button className="btn">
          <Icon name="facebook square" size="big" />
          Continue with facebook
        </Button>
        <Card.Description className="email-login">
          Not a fan of social media?&nbsp;&nbsp;
          <LoginModal submit={loginSubmit} />
        </Card.Description>
      </Card.Content>
      <Card.Content extra className="login-footer">
        Do not have an account?&nbsp;&nbsp;
        <RegisterModal submit={registerSubmit} />
      </Card.Content>
    </Card>
  </div>
);

LoginCard.propTypes = {
  loginSubmit: PropTypes.func.isRequired,
  registerSubmit: PropTypes.func.isRequired,
};

export default LoginCard;
