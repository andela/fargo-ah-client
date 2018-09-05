import React from 'react';
import { Form, Label } from 'semantic-ui-react';

<<<<<<< HEAD
const FormField = (type, name, onChange, value, placeholder, label, errors) => (
=======
const FormField = (type, name, onChange, value, placeholder, label, error) => (
>>>>>>> ft(form-modals): Create the login and register modal component
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
<<<<<<< HEAD
    {errors && (
      <Label color="red" pointing>
        {errors}
=======
    {error && (
      <Label color="red" pointing>
        {error}
>>>>>>> ft(form-modals): Create the login and register modal component
      </Label>
    )}
  </Form.Field>
);

export default FormField;
