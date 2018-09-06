import React from 'react';
import { shallow } from 'enzyme';
import LoginCard from '../../components/LoginCard';


describe('LandingPage Component', () => {
  it('renders Landing Page correctly', () => {
    const wrapper = shallow(<LoginCard />);
    expect((wrapper).find('div').length).toBe(1);
    expect((wrapper).find('.btn').length).toBe(2);
    expect((wrapper).find('.login-footer').length).toBe(2);
  });
});
