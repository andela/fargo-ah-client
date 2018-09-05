import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Form,
  Button,
  Modal,
  Dimmer,
  Loader,
  TransitionablePortal,
} from 'semantic-ui-react';
import LoginFields from './FormComponents';

class RegisterForm extends Component {
  state = {
    user: {
      username: '',
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
      user: { email, username, password },
    } = this.state;

    return (
      <div>
        <Link href="#" to="#" onClick={this.show()}>
          Register
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
            <Modal.Header>Welcome register</Modal.Header>
            <Modal.Content>
              <Form className="innerForm " size="large" onSubmit={this.handleSubmit}>
                {LoginFields(
                  'text',
                  'username',
                  this.handleChange,
                  username,
                  'Enter your username',
                  'Username:',
                  'taken',
                )}
                {LoginFields(
                  'email',
                  'email',
                  this.handleChange,
                  email,
                  'example@gmail.com',
                  'Email:',
                  'Already taken',
                )}
                {LoginFields(
                  'password',
                  'password',
                  this.handleChange,
                  password,
                  'Enter your password',
                  'Password:',
                  'Enter password',
                )}
                <Button className="btn" type="submit">
                  Register
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

RegisterForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default RegisterForm;
