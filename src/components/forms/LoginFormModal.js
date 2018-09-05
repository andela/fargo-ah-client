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
<<<<<<< HEAD
  Message,
} from 'semantic-ui-react';
import ModalFormHOC, { modalOptions } from '../hoc/ModalFormHOC';
import LoginFields from './FormFieldComponents';
=======
} from 'semantic-ui-react';
import ModalFormHOC, { modalOptions } from '../hoc/ModalFormHOC';
import LoginFields from './FormFieldComponents';
import { loginSubmit } from '../../utils/formSubmit';
>>>>>>> ft(form-modals): Create the login and register modal component

export const LoginForm = ({
  state, show, close, onSubmit, onChange,
}) => {
  const {
    errors,
    loading,
    open,
    user: { email, password },
  } = state;
<<<<<<< HEAD
  return (
    <div>
      <Link to="#" onClick={show}>
=======

  return (
    <div>
      <Link href="#" to="#" onClick={show}>
>>>>>>> ft(form-modals): Create the login and register modal component
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
<<<<<<< HEAD
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
=======
          <Modal.Content>
            <Form className="innerForm " size="large" onSubmit={onSubmit} error>
              {/* Rendering the form fields from the FormField component */}
              {LoginFields('email', 'email', onChange, email, 'example@email.com', 'Email:', errors.email)}
              {LoginFields('password', 'password', onChange, password, 'Enter your password', 'Password:', errors.password)}
              <Link href="#" to="/reset" onClick={close}> Reset Password</Link>
>>>>>>> ft(form-modals): Create the login and register modal component
              <Button className="btn" type="submit">
                Login
              </Button>
            </Form>
          </Modal.Content>
<<<<<<< HEAD
          <Modal.Actions>
          Forgot password?
            <Link to="/reset/password"> Recover it here.</Link>
          </Modal.Actions>
=======
          <Modal.Actions />
>>>>>>> ft(form-modals): Create the login and register modal component
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
<<<<<<< HEAD
=======
    errors: PropTypes.object.isRequired,
>>>>>>> ft(form-modals): Create the login and register modal component
    loading: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
  }).isRequired,
  show: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

<<<<<<< HEAD
export default ModalFormHOC(LoginForm);
=======
export default ModalFormHOC(LoginForm, loginSubmit);
>>>>>>> ft(form-modals): Create the login and register modal component
