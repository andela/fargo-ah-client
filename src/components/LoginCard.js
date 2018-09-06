import React, { Component } from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';
import RegisterModal from './forms/RegisterFormModal';
import LoginModal from './forms/LoginFormModal';


class LoginCard extends Component {
  loginSubmit = details => details;

  registerSubmit = details => details;

  render() {
    return (
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
            <Card.Description className="email-login login-footer">
              Not a fan of social media?&nbsp;&nbsp;
              <RegisterModal submit={this.registerSubmit} />
            </Card.Description>
          </Card.Content>
          <Card.Content extra className="login-footer">
            Already have an account?&nbsp;&nbsp;
            <LoginModal submit={this.loginSubmit} />
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default LoginCard;
