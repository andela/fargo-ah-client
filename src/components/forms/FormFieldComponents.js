import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const FormField = (type, name, onChange, value, placeholder, label, errors) => (
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

export default FormField;
