import React from 'react';
import { Button, Card, Image, CardDescription } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../styles/loginCard.scss';


const LoginCard = () => (
  <div className="login_div">
    <Card className="login_card" color="rgba(190, 165, 165, 0.15)">
      <Card.Content>
        <div className="content-div">
        <Card.Header><h1 id="header-text">Welcome</h1></Card.Header>
        <div>
          <Button fluid basic>
            <Image src="https://res.cloudinary.com/blackincode/image/upload/v1536166680/google-plus-symbol_rvwwax.svg" />
            Sign up with google
          </Button>
        </div>
        <div>
          <Button fluid basic>
            <Image src="https://res.cloudinary.com/blackincode/image/upload/v1536166591/facebook_psims7.svg" />
            Sign up with facebook
          </Button>
        </div>
        <Card.Description id="email">
          Not a fan of social media?
          <NavLink to="/"> Sign up with email</NavLink>
        </Card.Description>
        <CardDescription id="login-footer">
          Already have an account?
          <NavLink to="/login"> Login</NavLink>
        </CardDescription>
        </div>
      </Card.Content>
    </Card>
  </div>
);

export default LoginCard;
