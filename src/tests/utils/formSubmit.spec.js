import { loginSubmit, registerSubmit } from '../../utils/formSubmit';


describe('Testing the form submit functions', () => {
  it('Should call the LoginSubmit function', () => {
    const user = {
      email: '',
      password: '',
    };
    const actual = loginSubmit(user);
    expect(actual).toEqual(user);
  });
  it('Should call the RegisterSubmit function', () => {
    const user = {
      email: '',
      password: '',
    };
    const actual = registerSubmit(user);
    expect(actual).toEqual(user);
  });
});
