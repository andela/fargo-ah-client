import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { RegisterForm } from '../../../components/forms/RegisterFormModal';

describe(' LoginModal component rendering', () => {
  const state = {
    user: {
      username: '',
      email: '',
      password: '',
    },
    errors: {
      username: 'Invalid',
      email: 'Invalid',
      password: 'Invalid',
    },
    loading: false,
    open: false,
  };
  const sinonSpy = sinon.spy();
  const wrapper = shallow(<RegisterForm
    state={state}
    show={sinonSpy}
    close={sinonSpy}
    onSubmit={sinonSpy}
    onChange={sinonSpy}
  />);

  it('Should render properly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call the submit method on submit', () => {
    wrapper.find('Form').simulate('submit', { preventDefault() {} });
    expect(sinonSpy.called).toBe(true);
  });
});
