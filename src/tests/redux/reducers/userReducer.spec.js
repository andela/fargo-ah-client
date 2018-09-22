import userReducer from '../../../redux/reducers/userReducer';

describe('Test userReducers', () => {
  const data = {
    username: 'username',
    email: 'mail',
    image: 'image',
  };

  it('Should return initial state', () => {
    expect(userReducer({}, {})).toEqual({});
  });

  it('Should return state of loaded user', () => {
    const actual = userReducer({}, {
      type: 'SET_CURRENT_USER',
      payload: data,
    });
    const expected = {
      isAuthenticated: true,
      detail: {
        email: 'mail',
        image: 'image',
        username: 'username',
      },
    };
    expect(actual).toEqual(expected);
  });

  it('Should return an empty object', () => {
    const actual = userReducer({}, {
      type: 'UNSET_CURRENT_USER',
    });
    expect(actual).toEqual({});
  });
});
