import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { ResetForm } from '../../../components/forms/PasswordResetForm';


describe('PASSWORD RESET FORM', () => {
  const props = {
    submit: jest.fn(),
    result: 'result',
  };

  const result = {
    result: 'result',
  };

  const sinonSpy = sinon.spy();
  const event = {
    preventDefault() {},
    target: {
      name: 'password',
      value: 'password123',
    },
  };

  const wrapper = shallow(<ResetForm onSubmit={sinonSpy} {...props} />);
  it('Should call the onSubmit function', () => {
    wrapper.instance().onSubmit(event);
    expect(sinonSpy.calledWith()).toBe(false);
  });

  it('Should call the on submit function and set the state', () => {
    wrapper.instance().onChange(event);
    const actual = wrapper.state().user.password;
    const expected = 'password123';
    expect(actual).toBe(expected);
  });

  it('Should call the on didupdate function and set the state', () => {
    wrapper.instance().componentDidUpdate(result);
    const actual = wrapper.state().loading;
    wrapper.instance().updateCurrentState(true);
    expect(actual).toBe(true);
  });

  it('should call update current state function', () => {
    const prevProp = wrapper.props();
    wrapper.find('Form').simulate('submit', { preventDefault() {} });
    wrapper.instance().updateCurrentState(true);
    wrapper.setProps({ result: 'data' });
    wrapper.instance().componentDidUpdate(prevProp);
  });

  it('Should set state "loading" to true if called', () => {
    wrapper.instance().updateCurrentState(true);
    const actual = wrapper.state().loading;
    const expected = true;
    expect(actual).toBe(expected);
  });

  it('Should set state "loading" to false if called', () => {
    wrapper.instance().updateCurrentState(false);
    const actual = wrapper.state().loading;
    const expected = false;
    expect(actual).toBe(expected);
  });

  it('Should set state with errors if any password error', () => {
    const user = {
      password: 'password123',
      confirmPassword: 'password234',
    };
    const actual = wrapper.instance().validate(user);
    const expected = {
      confirmPassword: 'your passwords do not match',
    };
    expect(actual).toEqual(expected);
  });
});
