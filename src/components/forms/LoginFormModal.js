import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Dimmer,
  Form,
  Loader,
  Modal,
  TransitionablePortal,
  Message,
} from 'semantic-ui-react';
import ModalFormHOC, { modalOptions } from '../hoc/ModalFormHOC';
import LoginFields from './FormFieldComponents';

export const LoginForm = ({
  state, show, close, onSubmit, onChange,
}) => {
  const {
    errors,
    loading,
    open,
    user: { email, password },
  } = state;

  return (
    <div>
      <Link href="#" to="#" onClick={show}>
        Login with email
      </Link>
      <TransitionablePortal transition={modalOptions} onClose={close} open={open}>
        <Modal
          centered
          closeIcon
          id="modal-form"
          size="tiny"
          dimmer="blurring"
          open={open}
          onClose={close}
        >
          <Dimmer active={loading}>
            <Loader>Preparing your engagement</Loader>
          </Dimmer>
          <Modal.Header>Welcome</Modal.Header>
          {
            errors.randomError
            && (
            <Message negative>
              <Message.Header>{errors.randomError}</Message.Header>
              {errors.randomError === 'Your account has not been activated' ? (
                <Message.Header>
                Click
                  <Link to="/verify-email"> here </Link>
                to verify
                </Message.Header>
              ) : null}
            </Message>
            )
            }
          <Modal.Content>
            <Form className="innerForm " size="large" onSubmit={onSubmit}>
              {/* Rendering the form fields from the FormField component */}
              {LoginFields('email', 'email', onChange, email, 'example@email.com', 'Email:', errors.emailError)}
              {LoginFields('password', 'password', onChange, password, 'Enter your password', 'Password:', errors.passwordError)}
              <Button className="btn" type="submit">
                Login
              </Button>
            </Form>
          </Modal.Content>
          <Modal.Actions>
          Forgot password?
            <Link to="reset/edit"> Recover it here.</Link>
          </Modal.Actions>
        </Modal>
      </TransitionablePortal>
    </div>
  );
};

LoginForm.propTypes = {
  state: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }).isRequired,
    errors: PropTypes.shape({}).isRequired,
    loading: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
  }).isRequired,
  show: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ModalFormHOC(LoginForm);
