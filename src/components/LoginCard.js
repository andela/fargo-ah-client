import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Card, Icon } from 'semantic-ui-react';
import userSignupAction from '../redux/actions/signupAction';
import Login from './forms/LoginFormModal';
import Register from './forms/RegisterFormModal';
import '../styles/loginCard.scss';

export class LoginCard extends React.Component {
     registerSubmit = (user) => {
       const { userSignup } = this.props;
       return userSignup(user);
     }

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
};

const LoginCardWithRedux = connect(null, { userSignup: userSignupAction })(LoginCard);

export default LoginCardWithRedux;
