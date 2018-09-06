import React from 'react';
import {
  Button, Card, Icon,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../styles/loginCard.scss';


const LoginCard = () => (
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
          <NavLink to="/"> Sign up with email</NavLink>
        </Card.Description>
      </Card.Content>
      <Card.Content extra className="login-footer">
        Do not have an account?&nbsp;&nbsp;
        <NavLink to="/login"> Login</NavLink>
      </Card.Content>
    </Card>
  </div>
);

export default LoginCard;
