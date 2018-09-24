import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendEmail } from '../redux/actions/resetPassword';
import Reset from '../components/forms/ResetForm';

export class ResetView extends Component {
  submit = (data) => {
    const { resetReduxAction } = this.props;
    resetReduxAction(data);
    return data;
  }

  render() {
    const { errors, message } = this.props;
    return (
      <div>
        <Reset data={message} error={errors} submit={this.submit} />
      </div>
    );
  }
}

export const mapStateToProps = ({ resetReducer }) => {
  const { user } = resetReducer;
  return user;
};

export const mapActionToProps = {
  resetReduxAction: sendEmail,
};

ResetView.propTypes = {
  resetReduxAction: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(ResetView);
