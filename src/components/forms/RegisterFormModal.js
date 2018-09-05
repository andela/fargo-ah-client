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
} from 'semantic-ui-react';
import ModalFormHOC, { modalOptions } from '../hoc/ModalFormHOC';
import LoginFields from './FormFieldComponents';
<<<<<<< HEAD
=======
import { registerSubmit } from '../../utils/formSubmit';
>>>>>>> ft(form-modals): Create the login and register modal component

export const RegisterForm = ({
  state, show, close, onSubmit, onChange,
}) => {
  const {
    errors,
    loading,
    open,
    user: { email, username, password },
  } = state;

  return (
    <div>
      <Link href="#" to="#" onClick={show}>
        Register
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
          <Modal.Header>Welcome register</Modal.Header>
          <Modal.Content>
            <Form className="innerForm " size="large" onSubmit={onSubmit}>
              {/* Rendering the form fields from the FormField component */}
              {LoginFields('text', 'username', onChange, username, 'Enter your username', 'Username:', errors.username)}
              {LoginFields('email', 'email', onChange, email, 'example@gmail.com', 'Email:', errors.email)}
              {LoginFields('password', 'password', onChange, password, 'Enter your password', 'Password:', errors.password)}
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
};

RegisterForm.propTypes = {
  state: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
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

export default ModalFormHOC(RegisterForm);
