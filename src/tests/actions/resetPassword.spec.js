import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { sendEmail, resetPassword } from '../../redux/actions/resetPassword';
import types from '../../redux/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Resest password action', () => {
  const store = mockStore({});
  const {
    RESET_PASSWORD_FAILURE, RESET_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILURE,
  } = types;
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('Send Email to user', () => {
    it('should send email to user', () => {
      const userResponse = {
        data: {
          message: 'Email Successfully sent',
        },
      };

      const expectedActions = [
        {
          type: RESET_PASSWORD_SUCCESS,
          email: 'JakeJone@register.com',
          payload: { data: { message: 'Email Successfully sent' } },
        },
      ];
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: userResponse,
        });
      });
      return store.dispatch(sendEmail('JakeJone@register.com')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should return error if email is incorrect', () => {
      const userResponse = {
        error: {
          body: ['email does not exist'],
        },
      };
      const expectedAction = {
        type: RESET_PASSWORD_FAILURE,
        payload: {
          error: {
            body: ['email does not exist'],
          },
        },
      };

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: userResponse,
        });
      });

      return store.dispatch(sendEmail('jack@register.com')).then(() => {
        expect(store.getActions()[1]).toEqual(expectedAction);
      });
    });
  });

  describe('Update users password', () => {
    it('should send email to user', () => {
      const userResponse = {
        data: {
          message: 'Password reset successful!',
          success: true,
        },
      };

      const expectedActions = {
        type: UPDATE_PASSWORD_SUCCESS,
        result: {
          data: {
            message: 'Password reset successful!',
            success: true,
          },
        },
      };


      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: userResponse,
        });
      });
      return store.dispatch(resetPassword('qwer1234')).then(() => {
        expect(store.getActions()[2]).toEqual(expectedActions);
      });
    });

    it('should not reset pssword if no token', () => {
      const userResponse = {
        data: {
          success: false,
          errors: {
            body: ['No token has been provided in the request'],
          },
        },
      };
      const expectedAction = {
        type: UPDATE_PASSWORD_FAILURE,
        result: {
          data: {
            success: false,
            errors: {
              body: ['No token has been provided in the request'],
            },
          },
        },
      };

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 401,
          response: userResponse,
        });
      });

      return store.dispatch(resetPassword('qwer1234')).then(() => {
        expect(store.getActions()[3]).toEqual(expectedAction);
      });
    });
  });
});
