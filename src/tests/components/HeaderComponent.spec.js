import React from 'react';
import { shallow } from 'enzyme';
import { user } from '../__mocks__/mockData';
import Header from '../../components/Header/HeaderComponent';

describe('HeaderComponent rendering', () => {
  const history = {
    location: {
      pathname: '/',
    },
  };
  it('Should render the component properly', () => {
    const wrapper = shallow(<Header user={user} text="Home" history={history} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('.logo-img').props().src).toBe('https://res.cloudinary.com/blackincode/image/upload/v1536148508/FargoIcon_msl9hl.png');
    expect(wrapper.find('.logo-img').props().alt).toBe('Authors Haven Logo');
    expect(wrapper.find('LoggedInNav').props().user.user.username).toBe('klevaman');
    expect(wrapper.find('LoggedInNav').props().user.user.email).toBe('email@email.com');
    expect(wrapper.find('LoggedInNav').props().user.user.bio).toBe('bio');
    expect(wrapper.find('LoggedInNav').props().user.user.image).toBe('https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8bb0f429fa983025b80205fa3dd0f1bf&auto=format&fit=crop&w=800&q=60');
  });

  it('Should render the component properly', () => {
    const wrapper = shallow(<Header user={{}} text="Home" history={history} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('.logo-img').props().src).toBe('https://res.cloudinary.com/blackincode/image/upload/v1536148508/FargoIcon_msl9hl.png');
    expect(wrapper.find('.logo-img').props().alt).toBe('Authors Haven Logo');
    expect(wrapper.find('Nav')).toHaveProperty('text');
  });
});
