import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ModalFormHOC from '../../../components/hoc/ModalFormHOC';
import { LoginForm } from '../../../components/forms/LoginFormModal';

describe('Modal HOC', () => {
  const userErrors = {
    response: {
      data: {
        errors: {
          body: {},
        },
      },
    },
  };
  const randomErrors = {
    response: {
      data: {
        errors: {
          body: [{ err: 'jhj' }],
        },
      },
    },
  };

  const sinonRandomErrors = sinon.spy(() => Promise.reject(randomErrors));
  const sinonUserErrors = sinon.spy(() => Promise.reject(userErrors));
  const spy = sinon.spy();
  const HOC = ModalFormHOC(LoginForm);
  const e = {
    preventDefault() {},
    target: {
      name: 'email',
      value: 'nwokeochavictor@gmail.com',
    },
  };

  const wrapper = shallow(<HOC handleSubmit={spy} submitForm={sinonUserErrors} />);
  it('Should call the handle submit function', () => {
    wrapper.instance().handleSubmit(e);
    expect(sinonUserErrors).toHaveProperty('callCount', 1);
  });

  it('Should call the handle submit function and catch errors', () => {
    const wrapper2 = shallow(<HOC handleSubmit={spy} submitForm={sinonRandomErrors} />);
    wrapper2.instance().handleSubmit(e);
    expect(sinonRandomErrors).toHaveProperty('callCount', 1);
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
