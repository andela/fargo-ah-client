import React from 'react';
import { shallow } from 'enzyme';
import { user } from '../__mocks__/mockData';
import LoggedInNav from '../../components/Header/LoggedInNavComponent';

describe('LoggedInNavComponent rendering', () => {
  it('Should render the component properly', () => {
    const wrapper = shallow(<LoggedInNav user={user} text="Home" class="Nav" />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('Avatar').props().user.user.username).toBe('klevaman');
    expect(wrapper.find('Avatar').props().user.user.email).toBe('email@email.com');
    expect(wrapper.find('Avatar').props().user.user.bio).toBe('bio');
    expect(wrapper.find('Avatar').props().user.user.image).toBe('https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8bb0f429fa983025b80205fa3dd0f1bf&auto=format&fit=crop&w=800&q=60');
  });
  it('Should render notification bell properly', () => {
    const wrapper = shallow(<LoggedInNav user={user} text="Home" class="Nav" />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('.notification').props().src).toBe('http://res.cloudinary.com/blackincode/image/upload/v1536159370/Vector_pw6m41.png');
    expect(wrapper.find('.notification').props().alt).toBe('Notifications');
  });
  it('Should render notification bell properly', () => {
    const wrapper = shallow(<LoggedInNav user={user} text="Home" class="Nav" />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('.pen').props().src).toBe('https://res.cloudinary.com/blackincode/image/upload/v1536149768/fountain-pen-close-up_gfzl7b.svg');
    expect(wrapper.find('.pen').props().alt).toBe('Pen');
    expect(wrapper.find('.tell-story').props().children[1]).toBe('Tell a story');
  });
});
