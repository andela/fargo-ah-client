import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Loader,
  Dimmer,
  Message,
  Form,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import FormField from './FormFieldComponents';
import Header from '../Header/HeaderComponent';
import Footer from '../FooterSlim';
import RenderDiv from '../../helpers/helper';

export class ResetForm extends Component {
  state = {
    user: {
      email: '',
      response: {},
    },
    loading: false,
  };

  componentDidUpdate(prevProps) {
    const { data, error } = this.props;
    if ((data !== prevProps.data) || (error !== prevProps.error)) {
      this.updateState(false);
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { submit } = this.props;
    this.setState({
      loading: true,
    });
    submit(user.email);
  };

  onChange = (event) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [event.target.name]: event.target.value,
      },
    });
  };

  updateState(newName) {
    this.setState({
      loading: newName,
    });
  }

  render() {
    const { user, loading } = this.state;
    const { error, data } = this.props;
    return (
      <div id="reset-page">
        <Header text="Home" pathname="/login" />
        <div id="reset" className="reset-div">
          <Dimmer active={loading}><Loader>Sending</Loader></Dimmer>
          <h3>Enter your email to reset password&nbsp;&nbsp;</h3>
          {data ? <Message success id="result">{data}</Message> : null}
          {error && error.body ? <Message negative id="error">{error.body[0]}</Message> : null}
          {data ? <Redirect to="/email" /> : null}
          <Form onSubmit={this.onSubmit}>
            {FormField('email', 'email', this.onChange, user.email, 'Enter your email', '', '')}
            <Button type="submit" content="Continue" />
            <RenderDiv />
          </Form>
        </div>
        <Footer />
      </div>
    );
  }
}

ResetForm.propTypes = {
  submit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  data: PropTypes.shape({
    data: PropTypes.shape({
      message: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default ResetForm;
