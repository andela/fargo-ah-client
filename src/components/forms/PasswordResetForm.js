import React, { Component } from 'react';
import {
  Button,
  Dimmer,
  Form,
  Loader,
  Message,
  Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import FormField from './FormFieldComponents';
import RenderDiv from '../../helpers/helper';

export class ResetForm extends Component {
  state = {
    user: {
      password: '',
      confirmPassword: '',
    },
    errors: {},
    loading: false,
  };

  componentDidUpdate(prevProps) {
    const { result, error } = this.props;
    if ((result !== prevProps.result) || (error !== prevProps.error)) {
      this.updateCurrentState(false);
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { submit } = this.props;
    const errors = this.validate(user);
    this.setState({
      errors,
    });
    if (Object.keys(errors).length === 0) {
      this.updateCurrentState(true);
      submit(user.password);
    }
  };

  onChange = (event) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [event.target.name]: event.target.value,
      },
      errors: {},
    });
  };

  validate = (data) => {
    const errors = {};
    if (data.password !== data.confirmPassword) errors.confirmPassword = 'your passwords do not match';
    return errors;
  }

  updateCurrentState(newName) {
    this.setState({
      loading: newName,
    });
  }

  render() {
    const { user, errors, loading } = this.state;
    const { error, result } = this.props;
    return (
      <div id="reset-page">
        <Dimmer active={loading}><Loader>Resetting</Loader></Dimmer>
        <div id="reset-div" className="reset-div">
          <Image id="key" src="https://image.flaticon.com/icons/svg/481/481195.svg" />
          <h2>Reset Your Password&nbsp;&nbsp;</h2>
          <Form onSubmit={this.onSubmit}>
            {result ? <Message success id="result">{result}</Message> : null}
            {error ? <Message negative>{error.body[0]}</Message> : null}
            {FormField(
              'password', 'password', this.onChange, user.password,
              'Enter new password', '',
            )}
            {FormField(
              'password', 'confirmPassword', this.onChange, user.confirmPassword,
              'Confirm password', '', errors ? errors.confirmPassword : null,
            )}
            <Button type="submit" content="Submit" />
            <RenderDiv />
          </Form>
        </div>
      </div>
    );
  }
}

ResetForm.propTypes = {
  submit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
export default ResetForm;
