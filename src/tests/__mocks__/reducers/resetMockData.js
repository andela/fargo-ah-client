import actions from '../../../redux/actions/index';

const {
  UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE,
} = actions;

export const initialState = {
  user: [],
  email: {},
  response: {},
};
const payload = {
  user: { message: 'Email sent successfully' },
};
export const actualResetSuccess = {
  type: RESET_PASSWORD_SUCCESS,
  payload,
  email: 'JakeJone@register.com',
};
export const expectedResetSuccess = {
  user: payload,
  email: 'JakeJone@register.com',
};

export const actualResetFailure = {
  type: RESET_PASSWORD_FAILURE,
  payload: {
    errors: {
      body: [
        'email does not exist',
      ],
    },
  },
};
export const expectedResetFailure = {
  user: {
    errors: {
      body: [
        'email does not exist',
      ],
    },
  },
};
export const actualUpdateSuccess = {
  type: UPDATE_PASSWORD_SUCCESS,
  result: {},
};
export const expectedUpdateSuccess = {
  response: {},
};
export const actualUpdateFailure = {
  type: UPDATE_PASSWORD_FAILURE,
  result: '',
};
export const expectedUpdateFailure = {
  response: '',
};
