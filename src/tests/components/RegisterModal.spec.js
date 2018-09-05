import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import RegisterModal from '../../components/RegisterModal';

describe(' RegisterModal component rendering', () => {
  const sinonSpy = sinon.spy();
  const wrapper = shallow(<RegisterModal submit={sinonSpy} />);

  it('Should render properly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render the register form', () => {
    expect(wrapper.find('Form').length).toBe(1);
  });

  it('Should handle and store the username input', () => {
    wrapper.find('#username').simulate('change', {
      target: { name: 'username', value: 'nwokeochavictor' },
    });
    const actual = wrapper.state().user.username;
    const expected = 'nwokeochavictor';
    expect(actual).toEqual(expected);
  });

  it('Should handle and store the email input', () => {
    wrapper.find('#email').simulate('change', {
      target: { name: 'email', value: 'nwokeochavictor@gmail.com' },
    });
    const actual = wrapper.state().user.email;
    const expected = 'nwokeochavictor@gmail.com';
    expect(actual).toEqual(expected);
  });

  it('Should handle and store the password input', () => {
    wrapper.find('#password').simulate('change', {
      target: { name: 'password', value: '123456' },
    });
    const actual = wrapper.state().user.password;
    const expected = '123456';
    expect(actual).toEqual(expected);
  });

  it('Should call the submit method on submit', () => {
    wrapper.find('Form').simulate('submit', { preventDefault() {} });
    expect(sinonSpy).toHaveProperty('callCount', 1);
  });

  it('Should set state "open" to true on click', () => {
    wrapper.find('Link').simulate('click');
    const actual = wrapper.state().open;
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it('Should set state "close" to true on click', () => {
    wrapper.instance().close();
    const actual = wrapper.state().open;
    const expected = false;
    expect(actual).toEqual(expected);
  });
});
