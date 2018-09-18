import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { LoginCard } from '../../components/LoginCard';


describe('LandingPage Component', () => {
  const wrapper = shallow(<LoginCard />);

  const spy = sinon.spy(() => Promise.resolve({ success: true }));

  it('renders Landing Page correctly', () => {
    expect((wrapper).find('div').length).toBe(1);
    expect((wrapper).find('.btn').length).toBe(2);
    expect((wrapper).find('.login-footer').length).toBe(2);
    wrapper.setProps({ loginAction: spy });
    wrapper.instance().loginSubmit();
  });
});
