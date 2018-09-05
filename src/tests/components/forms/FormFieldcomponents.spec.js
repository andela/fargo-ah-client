import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FormComponents from '../../../components/forms/FormFieldComponents';

describe(' LoginModal component rendering', () => {
  const spy = sinon.spy();
  const wrapper = shallow(<FormComponents
    type="email"
    name="email"
    onChange={spy}
    value="email"
    placeholder="enter password"
    label="username"
    errors="Invalid Input"
  />);

  it('Should render properly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should handle and store the email input', () => {
    wrapper.find('#email').simulate('change', {
      target: { name: 'email', value: 'nwokeochavictor@gmail.com' },
    });
    expect(spy.called).toBe(true);
  });
});
