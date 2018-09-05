import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const LoginFields = (type, name, onChange, value, placeholder, label, errors = null) => (
  <Form.Field>
    <label htmlFor={type}>
      {label}
      <input
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </label>
    <Label color="red" pointing>
      {errors}
    </Label>
  </Form.Field>
);

export default LoginFields;
