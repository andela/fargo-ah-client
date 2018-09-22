import {
  setTokenToStorage,
  setAuthorizationHeader,
  removeTokenFromStorage,
  getTokenFromStorage,
} from '../../redux/api';


describe('Testing the api helper functions', () => {
  it('Should set the default header', () => {
    const actual = setAuthorizationHeader();
    const expected = { Accept: 'application/json, text/plain, */*' };
    expect(actual).toEqual(expected);
  });

  it('Should set the localStorage', () => {
    const actual = setTokenToStorage();
    expect(actual).toBeUndefined();
  });

  it('Should unset the localStorage', () => {
    const actual = getTokenFromStorage();
    expect(actual).toEqual('undefined');
  });

  it('Should unset the localStorage', () => {
    const actual = removeTokenFromStorage();
    expect(actual).toBeUndefined();
  });
});
