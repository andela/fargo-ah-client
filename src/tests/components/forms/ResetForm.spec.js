import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { ResetForm } from '../../../components/forms/ResetForm';
import ResetDiv from '../../../helpers/helper';

describe('RESET FORM', () => {
  const props = {
    submit: jest.fn(),

  };

  const sinonSpy = sinon.spy();
  const event = {
    preventDefault() {},
    target: {
      name: 'email',
      value: 'JakeJone@gmail.com',
    },
  };

  const wrapper = shallow(<ResetForm onSubmit={sinonSpy} {...props} />);
  it('Should call the onSubmit function', () => {
    wrapper.instance().onSubmit(event);
    expect(sinonSpy.calledWith()).toBe(false);
  });

  it('Should call the on submit function and set the state', () => {
    wrapper.instance().onChange(event);
    const actual = wrapper.state().user.email;
    const expected = 'JakeJone@gmail.com';
    expect(actual).toBe(expected);
  });

  it('Should set state "loading" to true if called', () => {
    wrapper.instance().updateState(true);
    const actual = wrapper.state().loading;
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should render reset div properly', () => {
    const shallowWrapper = shallow(<ResetDiv />);
    expect(shallowWrapper.length).toBe(1);
    expect(shallowWrapper).toMatchSnapshot();
  });
});
