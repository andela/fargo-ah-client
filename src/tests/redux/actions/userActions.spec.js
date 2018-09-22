import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import api from '../../../redux/api';
import login, { logout } from '../../../redux/actions/userActions';

describe('Login Action', () => {
  const middleware = [thunk]; // add your middleware like `redux-thunk`
  const mockStore = configureMockStore(middleware);
  beforeEach(() => {
    moxios.install(api);
  });

  afterEach(() => {
    moxios.uninstall(api);
  });
  const store = mockStore({});

  const userData = {
    success: true,
    user: {
      email: 'janbass1@gmail.com',
      token: 'eyY4Mjc2NzKL7SsdXgeFddA',
      username: 'janbass1',
      bio: null,
      image: null,
    },
  };

  it('should login with login details', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: userData,
      });
    });

    const details = {
      email: 'example@gmail.com',
      password: '123456',
    };

    const expected = {
      email: 'janbass1@gmail.com',
      image: null,
      username: 'janbass1',
    };

    return store.dispatch(login(details)).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: 'SET_CURRENT_USER',
        payload: expected,
      });
    });
  });

  it('should logout a user', () => {
    store.dispatch(logout());
    expect(store.getActions()[1]).toEqual({
      type: 'UNSET_CURRENT_USER',
    });
  });
});
