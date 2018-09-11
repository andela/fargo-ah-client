import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import userSignupAction from '../../redux/actions/signupAction';
import actionTypes from '../../redux/actions/actionTypes';

const mockStore = configureMockStore([thunk]);
describe('Testing API calls', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should dispatch SET_CURRENT_USER ACTION', (done) => {
    const userData = {
      user: {
        username: 'JohnPaulr',
        email: 'John4@example.com',
        password: 'shit32132844',
      },
    };
    const expectedActions = [
      { type: actionTypes.SET_CURRENT_USER },
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: userData,
      });
    });
    const store = mockStore({ currentUser: {} }, expectedActions, done);
    store.dispatch(userSignupAction(userData)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(actionTypes.SET_CURRENT_USER);
      done();
    });
  });
});
