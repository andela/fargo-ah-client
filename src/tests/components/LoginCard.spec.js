import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { LoginCard } from '../../components/LoginCard';


describe('LandingPage Component', () => {
  const spy = sinon.spy(() => Promise.resolve({ success: true }));
  const wrapper = shallow(<LoginCard userSignup={spy} />);
  it('renders Landing Page correctly', () => {
    expect((wrapper).find('div').length).toBe(1);
    expect((wrapper).find('.btn').length).toBe(2);
    expect((wrapper).find('.login-footer').length).toBe(2);
    wrapper.setProps({ loginAction: spy });
    wrapper.instance().loginSubmit();
    wrapper.instance().registerSubmit();
  });
});
