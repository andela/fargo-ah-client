import React from 'react';
import PropTypes from 'prop-types';
import { Form, Label } from 'semantic-ui-react';

const FormField = ({
  type, name, onChange, value, placeholder, label, errors,
}) => (
  <Form.Field>
    <label htmlFor={name}>
      {label}
      <input
        required
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </label>
    {errors && (
      <Label color="red" pointing>
        {errors}
      </Label>
    )}
  </Form.Field>
);

FormField.defaultProps = {
  errors: undefined,
};

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string,
};

export default FormField;
