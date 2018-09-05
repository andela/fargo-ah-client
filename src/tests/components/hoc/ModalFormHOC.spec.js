import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ModalFormHOC from '../../../components/hoc/ModalFormHOC';
import { LoginForm } from '../../../components/forms/LoginFormModal';

describe('Modal HOC', () => {
  const HOC = ModalFormHOC(LoginForm);
  const sinonSpy = sinon.spy();
  const e = {
    preventDefault() {},
    target: {
      name: 'email',
      value: 'nwokeochavictor@gmail.com',
    },
  };

  const wrapper = shallow(<HOC handleSubmit={sinonSpy} />);
  it('Should call the handle submit function', () => {
    wrapper.instance().handleSubmit(e);
    expect(sinonSpy.calledWith()).toBe(true);
  });

  it('Should call the handle submit function and set the state', () => {
    wrapper.instance().handleChange(e);
    const actual = wrapper.state().user.email;
    const expected = 'nwokeochavictor@gmail.com';
    expect(actual).toBe(expected);
  });

  it('Should set state "open" to true if called', () => {
    wrapper.instance().show();
    const actual = wrapper.state().open;
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it('Should set state "close" to true if called', () => {
    wrapper.instance().close();
    const actual = wrapper.state().open;
    const expected = false;
    expect(actual).toEqual(expected);
  });
});
