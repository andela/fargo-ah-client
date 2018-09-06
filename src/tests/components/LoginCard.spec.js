import React from 'react';
import { shallow } from 'enzyme';
import LoginCard from '../../components/LoginCard';


describe('LandingPage Component', () => {
  const wrapper = shallow(<LoginCard />);
  it('renders Landing Page correctly', () => {
    expect((wrapper).find('div').length).toBe(1);
    expect((wrapper).find('.btn').length).toBe(2);
    expect((wrapper).find('.login-footer').length).toBe(2);
  });
  it('Should call the LoginSubmit function', () => {
    const user = {
      email: '',
      password: '',
    };
    const actual = wrapper.instance().loginSubmit(user);
    expect(actual).toEqual(user);
  });
  it('Should call the RegisterSubmit function', () => {
    const user = {
      email: '',
      password: '',
    };
    const actual = wrapper.instance().registerSubmit(user);
    expect(actual).toEqual(user);
  });
});
