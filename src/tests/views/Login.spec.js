import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Login from '../../views/Login';

describe('Login component rendering', () => {
  const wrapper = shallow(<Login />);

  it('Should render the component properly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should call the LoginSubmit method', () => {
    const user = {
      email: '',
      password: '',
    };
    const actual = wrapper.instance().loginSubmit(user);
    expect(actual).toEqual(user);
  });
  it('Should call the Registersubmit method', () => {
    const user = {
      email: '',
      password: '',
    };
    const actual = wrapper.instance().registerSubmit(user);
    expect(actual).toEqual(user);
  });
});
