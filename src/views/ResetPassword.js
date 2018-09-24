import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetPassword } from '../redux/actions/resetPassword';
import Reset from '../components/forms/PasswordResetForm';
import Header from '../components/Header/HeaderComponent';
import Footer from '../components/FooterSlim';


export class ResetView extends Component {
  submit = (data) => {
    const { resetPasswordAction } = this.props;
    resetPasswordAction(data);
    return data;
  }

  render() {
    const { message, errors } = this.props;
    return (
      <div>
        <Header text="Home" pathname="/login" />
        <Reset result={message} error={errors} submit={this.submit} />
        <Footer />
      </div>
    );
  }
}

export const mapStateToProps = ({ resetReducer }) => {
  const { response } = resetReducer;
  return response;
};

const mapActionToProps = {
  resetPasswordAction: resetPassword,
};

ResetView.propTypes = {
  resetPasswordAction: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(ResetView);
