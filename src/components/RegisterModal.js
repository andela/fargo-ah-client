import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Button,
  Modal,
  Dimmer,
  Loader,
  Label,
  TransitionablePortal,
} from 'semantic-ui-react';

class RegisterForm extends Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
    },
    errors: {},
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
      errors,
      loading,
      open,
      user: { email, username, password },
    } = this.state;

    return (
      <div>
        <Link to="#" onClick={this.show()}>
          Register
        </Link>
        <TransitionablePortal
          transition={{ animation: 'fly up', duration: 500 }}
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
                <Form.Field>
                  <label htmlFor="email">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                    placeholder="Enter your username"
                  />
                  <Label color="red" pointing>
                    That name is taken!
                  </Label>
                </Form.Field>
                <Form.Field>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                    placeholder="example@email.com"
                  />
                  <Label color="red" pointing>
                    That name is taken!
                  </Label>
                </Form.Field>
                <Form.Field>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                    value={password}
                    placeholder="Enter password"
                  />
                  <Label color="red" pointing>
                    That name is taken!
                  </Label>
                </Form.Field>
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

export default RegisterForm;
