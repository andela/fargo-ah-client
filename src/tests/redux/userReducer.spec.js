import userReducer from '../../redux/reducers/userReducer';
import { setCurrentUser } from '../../redux/actions/signupAction';

describe('User Reducer Test', () => {
  it('should update current user state', (done) => {
    const initialState = {
      isAuthenticated: false,
      detail: {
        username: 'fdsflkdsjfldsf',
        email: 'olduser@yahoo.com',
      },
    };
    const newUser = {
      username: 'newperson',
      email: 'newuser@yahoo.com',
    };
    const action = setCurrentUser(newUser);
    // To cater for default value in switch case

    userReducer(initialState, {});
    expect(userReducer(initialState, action).detail).toEqual(newUser);
    done();
  });
});
