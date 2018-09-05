import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ResetHOC from '../hoc/ResetFormHOC';
import FormField from './FormFieldComponents';


export const ResetForm = ({
  state, onSubmit, onChange,
}) => {
  const { user: { email } } = state;

  return (
    <div id="reset-div">
      <h1> reset</h1>
      <Form onSubmit={onSubmit}>
        {FormField('text', 'email', onChange, email, 'Enter your email', 'Email:', null)}
        <Button content="Send" />
      </Form>
    </div>

  );
};

ResetForm.propTypes = {
  state: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ResetHOC(ResetForm);
