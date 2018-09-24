import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../../components/AvatarComponent';
import { user } from '../__mocks__/mockData';

describe('Avatar component rendering', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<Avatar user={user} />);
    expect(wrapper.length).toBe(1);
    expect(user).toHaveProperty('user');
    expect(user.user).toHaveProperty('email');
    expect(user.user).toHaveProperty('username');
    expect(user.user).toHaveProperty('bio');
    expect(user.user).toHaveProperty('image');
  });
});
