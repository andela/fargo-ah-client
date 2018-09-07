import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  TransitionablePortal, Form, Button, Modal, Dimmer, Loader,
} from 'semantic-ui-react';
import LoginFields from './FormComponents';

class LoginForm extends Component {
  state = {
    user: {
      email: '',
      password: '',
    },
    // errors: {},
    loading: false,
    open: false,
  };

  show = () => () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const { submit } = this.props;
    this.setState({ loading: true });
    return submit(user);
  };

  handleChange = (e) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const {
      // errors,
      loading,
      open,
      user: { email, password },
    } = this.state;

    return (
      <div>
        <Link href="#" to="#" onClick={this.show()}>
          Login with email
        </Link>
        <TransitionablePortal
          transition={{ animation: 'fly up', duration: 1000 }}
          onClose={this.close}
          open={open}
        >
          <Modal
            centered
            closeIcon
            id="modal-form"
            size="tiny"
            dimmer="blurring"
            open={open}
            onClose={this.close}
          >
            <Dimmer active={loading}>
              <Loader>Preparing your engagement</Loader>
            </Dimmer>
            <Modal.Header>Welcome</Modal.Header>
            <Modal.Content>
              <Form className="innerForm " size="large" onSubmit={this.handleSubmit}>
                {LoginFields(
                  'email',
                  'email',
                  this.handleChange,
                  email,
                  'example@email.com',
                  'Email:',
                  'Please enter a valid email',
                )}
                {LoginFields(
                  'password',
                  'password',
                  this.handleChange,
                  password,
                  'Enter your password',
                  'Password:',
                  'This password is not strong enough',
                )}
                <Button className="btn" type="submit">
                  Login
                </Button>
              </Form>
            </Modal.Content>
            <Modal.Actions />
          </Modal>
        </TransitionablePortal>
      </div>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;
