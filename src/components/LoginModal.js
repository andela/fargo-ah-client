import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  TransitionablePortal,
  Form,
  Button,
  Modal,
  Dimmer,
  Loader,
  Label,
} from 'semantic-ui-react';

class LoginForm extends Component {
  state = {
    user: {
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
      user: { email, password },
    } = this.state;

    return (
      <div>
        <Link to="#" onClick={this.show()}>
          Login
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
            <Modal.Header>Welcome</Modal.Header>
            <Modal.Content>
              <Form className="innerForm " size="large" onSubmit={this.handleSubmit}>
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
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                    placeholder="Enter password"
                    type="password"
                    value={password}
                  />
                  <Label color="red" pointing>
                    That password is taken!
                  </Label>
                </Form.Field>
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

export default LoginForm;
